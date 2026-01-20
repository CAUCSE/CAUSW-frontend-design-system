import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { mergeStyles } from '../../utils';
import {
  RatioBarContext,
  useRatioBarContext,
  type RatioBarSelectionMode,
} from '../../hooks/ratioBar';
import {
  ratioBarRootStyles,
  ratioBarItemStyles,
  ratioBarItemFillStyles,
  ratioBarItemContentStyles,
  ratioBarLabelStyles,
  ratioBarRatioStyles,
  ratioBarFooterStyles,
  ratioBarFooterTextStyles,
} from './RatioBar.styles';

// Root Props - 단일 선택
interface RatioBarRootSingleProps extends Omit<
  React.ComponentProps<'div'>,
  'defaultValue'
> {
  mode?: 'single';
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

// Root Props - 다중 선택
interface RatioBarRootMultipleProps extends Omit<
  React.ComponentProps<'div'>,
  'defaultValue'
> {
  mode: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
}

export type RatioBarRootProps =
  | RatioBarRootSingleProps
  | RatioBarRootMultipleProps;

const RatioBarRoot = (props: RatioBarRootProps) => {
  const {
    mode = 'single',
    value: valueProp,
    defaultValue,
    onValueChange,
    disabled,
    children,
    className,
    ...rest
  } = props;

  // 단일 선택 내부 상태
  const [internalSingleValue, setInternalSingleValue] = useState<string>(
    (mode === 'single' ? (defaultValue as string) : '') || '',
  );

  // 다중 선택 내부 상태
  const [internalMultipleValue, setInternalMultipleValue] = useState<string[]>(
    (mode === 'multiple' ? (defaultValue as string[]) : []) || [],
  );

  // count 기반 자동 비율 계산을 위한 state
  const [counts, setCounts] = useState<Map<string, number>>(new Map());

  const isControlled = valueProp !== undefined;

  const currentValue =
    mode === 'single'
      ? isControlled
        ? (valueProp as string)
        : internalSingleValue
      : isControlled
        ? (valueProp as string[])
        : internalMultipleValue;

  const isSelected = useCallback(
    (itemValue: string) => {
      if (mode === 'single') {
        return currentValue === itemValue;
      }
      return (currentValue as string[]).includes(itemValue);
    },
    [mode, currentValue],
  );

  const onSelect = useCallback(
    (itemValue: string) => {
      if (disabled) return;

      if (mode === 'single') {
        if (!isControlled) {
          setInternalSingleValue(itemValue);
        }
        (onValueChange as ((value: string) => void) | undefined)?.(itemValue);
      } else {
        const currentArray = currentValue as string[];
        const newValue = currentArray.includes(itemValue)
          ? currentArray.filter((v) => v !== itemValue)
          : [...currentArray, itemValue];

        if (!isControlled) {
          setInternalMultipleValue(newValue);
        }
        (onValueChange as ((value: string[]) => void) | undefined)?.(newValue);
      }
    },
    [mode, disabled, isControlled, currentValue, onValueChange],
  );

  // count 등록/해제 함수
  const registerCount = useCallback((itemValue: string, count: number) => {
    setCounts((prev) => new Map(prev).set(itemValue, count));
  }, []);

  const unregisterCount = useCallback((itemValue: string) => {
    setCounts((prev) => {
      const next = new Map(prev);
      next.delete(itemValue);
      return next;
    });
  }, []);

  // 전체 count 합계
  const totalCount = useMemo(() => {
    let total = 0;
    counts.forEach((c) => (total += c));
    return total;
  }, [counts]);

  // 항목의 비율 계산
  const getRatio = useCallback(
    (itemValue: string) => {
      const count = counts.get(itemValue) ?? 0;
      return totalCount > 0 ? Math.round((count / totalCount) * 100) : 0;
    },
    [counts, totalCount],
  );

  return (
    <RatioBarContext.Provider
      value={{
        value: currentValue,
        mode: mode as RatioBarSelectionMode,
        disabled,
        onSelect,
        isSelected,
        counts,
        registerCount,
        unregisterCount,
        totalCount,
        getRatio,
      }}
    >
      <div
        role="group"
        className={mergeStyles(ratioBarRootStyles({ disabled }), className)}
        {...rest}
      >
        {children}
      </div>
    </RatioBarContext.Provider>
  );
};

// Item Props
export interface RatioBarItemProps extends Omit<
  React.ComponentProps<'button'>,
  'value'
> {
  value: string;
  label: string;
  count?: number; // count만 전달하면 자동으로 비율 계산
  ratio?: number; // 0-100, 직접 비율 지정 (count사용 시 count 우선)
  disabled?: boolean;
}

const RatioBarItem = ({
  value,
  label,
  count,
  ratio,
  disabled: itemDisabled,
  className,
  ...props
}: RatioBarItemProps) => {
  const {
    disabled: rootDisabled,
    onSelect,
    isSelected,
    registerCount,
    unregisterCount,
    getRatio,
  } = useRatioBarContext();
  const disabled = itemDisabled || rootDisabled;
  const selected = isSelected(value);

  // count가 있으면 등록
  useEffect(() => {
    if (count !== undefined) {
      registerCount(value, count);
      return () => unregisterCount(value);
    }
  }, [count, value, registerCount, unregisterCount]);

  const handleClick = () => {
    if (!disabled) {
      onSelect(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      onSelect(value);
    }
  };

  // count가 있으면 자동 계산, 없으면 ratio prop 사용, 둘 다 없으면 0
  const displayRatio = count !== undefined ? getRatio(value) : (ratio ?? 0);
  // ratio 표시 여부: count가 있거나 ratio가 명시적으로 지정된 경우
  const showRatio = count !== undefined || ratio !== undefined;

  // 텍스트 컨텐츠
  const contentElement = (
    <>
      <span className={ratioBarLabelStyles()}>{label}</span>
      {showRatio && (
        <span className={ratioBarRatioStyles()}>{displayRatio}%</span>
      )}
    </>
  );

  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={mergeStyles(ratioBarItemStyles({ disabled }), className)}
      style={{ minWidth: 0 }}
      {...props}
    >
      {/* 비율 배경 */}
      <span
        className={ratioBarItemFillStyles({ selected })}
        style={{ width: `${displayRatio}%` }}
      />

      {selected ? (
        <>
          {/* selected: 흰색 텍스트 (fill 영역에서만 보임) */}
          <span
            className={ratioBarItemContentStyles({ variant: 'light' })}
            style={{ clipPath: `inset(0 ${100 - displayRatio}% 0 0)` }}
          >
            {contentElement}
          </span>

          {/* selected: 검은색 텍스트 (fill 밖에서만 보임) */}
          <span
            className={ratioBarItemContentStyles({ variant: 'dark' })}
            style={{ clipPath: `inset(0 0 0 ${displayRatio}%)` }}
          >
            {contentElement}
          </span>
        </>
      ) : (
        /* unselected: 검은색 텍스트 하나만 */
        <span className={ratioBarItemContentStyles({ variant: 'dark' })}>
          {contentElement}
        </span>
      )}
    </button>
  );
};

// Footer Props
export interface RatioBarFooterProps extends React.ComponentProps<'div'> {
  endDate?: Date; // 종료 시간 자동 계산
  endTime?: string; // 직접 문자열 지정
  hideParticipantCount?: boolean;
}

// 남은 시간 계산
function formatTimeRemaining(endDate: Date): string {
  const now = new Date();
  const diff = endDate.getTime() - now.getTime();

  if (diff <= 0) return '종료됨';

  const totalHours = diff / (1000 * 60 * 60);
  const totalMinutes = diff / (1000 * 60);

  // 24시간 이상이면 일 단위 (12시간 기준 반올림/내림)
  if (totalHours >= 24) {
    return `${Math.round(totalHours / 24)}일 후 종료`;
  }

  // 1시간 이상이면 시간 단위 (내림)
  if (totalHours >= 1) {
    return `${Math.floor(totalHours)}시간 후 종료`;
  }

  // 그 외 분 단위 (내림)
  return `${Math.floor(totalMinutes)}분 후 종료`;
}

const RatioBarFooter = ({
  endDate,
  endTime,
  hideParticipantCount,
  className,
  children,
  ...props
}: RatioBarFooterProps) => {
  const { totalCount } = useRatioBarContext();

  // endDate가 있으면 자동 계산, 없으면 endTime 사용
  const displayEndTime = endDate ? formatTimeRemaining(endDate) : endTime;

  return (
    <div className={mergeStyles(ratioBarFooterStyles(), className)} {...props}>
      {children ?? (
        <>
          {!hideParticipantCount && (
            <span className={ratioBarFooterTextStyles()}>
              {totalCount}명 참여
            </span>
          )}
          {displayEndTime && (
            <span className={ratioBarFooterTextStyles()}>{displayEndTime}</span>
          )}
        </>
      )}
    </div>
  );
};

RatioBarRoot.displayName = 'RatioBar.Root';
RatioBarItem.displayName = 'RatioBar.Item';
RatioBarFooter.displayName = 'RatioBar.Footer';

export const RatioBar = Object.assign(RatioBarRoot, {
  Root: RatioBarRoot,
  Item: RatioBarItem,
  Footer: RatioBarFooter,
});
