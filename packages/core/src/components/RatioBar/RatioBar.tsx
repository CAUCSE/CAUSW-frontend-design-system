import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { mergeStyles } from '../../utils';
import {
  RatioBarContext,
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

  return (
    <RatioBarContext.Provider
      value={{
        value: currentValue,
        mode: mode as RatioBarSelectionMode,
        disabled,
        onSelect,
        isSelected,
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
  ratio?: number; // 0-100
  disabled?: boolean;
}

const RatioBarItem = ({
  value,
  label,
  ratio,
  disabled: itemDisabled,
  className,
  ...props
}: RatioBarItemProps) => {
  const context = React.useContext(RatioBarContext);
  if (!context) {
    throw new Error(
      'RatioBar.Item은 <RatioBar.Root> 내부에서 사용해야 합니다.',
    );
  }

  const { disabled: rootDisabled, onSelect, isSelected } = context;
  const disabled = itemDisabled || rootDisabled;
  const selected = isSelected(value);

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

  // ratio가 없으면 0%로 표시
  const displayRatio = ratio ?? 0;

  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={mergeStyles(
        ratioBarItemStyles({ selected, disabled }),
        className,
      )}
      style={{ minWidth: 0 }}
      {...props}
    >
      {/* 비율 배경 */}
      <span
        className={ratioBarItemFillStyles({ selected })}
        style={{ width: `${displayRatio}%` }}
      />

      {/* 컨텐츠 */}
      <span className={ratioBarItemContentStyles({ selected })}>
        <span className={ratioBarLabelStyles()}>{label}</span>
        {ratio !== undefined && (
          <span className={ratioBarRatioStyles()}>{ratio}%</span>
        )}
      </span>
    </button>
  );
};

RatioBarRoot.displayName = 'RatioBar.Root';
RatioBarItem.displayName = 'RatioBar.Item';

export const RatioBar = Object.assign(RatioBarRoot, {
  Root: RatioBarRoot,
  Item: RatioBarItem,
});
