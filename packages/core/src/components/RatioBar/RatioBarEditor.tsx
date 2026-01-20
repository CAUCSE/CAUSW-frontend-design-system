import React, { useState, useCallback, useId } from 'react';
import { Plus, CloseFilled } from '@causw/icons';
import { mergeStyles } from '../../utils';
import { Checkbox } from '../Checkbox';
import {
  ratioBarEditorRootStyles,
  ratioBarEditorFieldsStyles,
  ratioBarEditorInputStyles,
  ratioBarEditorTextInputStyles,
  ratioBarEditorRemoveButtonStyles,
  ratioBarEditorAddButtonStyles,
  ratioBarEditorAddButtonTextStyles,
  ratioBarEditorFooterStyles,
  ratioBarEditorDeleteButtonStyles,
} from './RatioBarEditor.styles';

export interface RatioBarEditorOption {
  id: string;
  value: string;
}

export interface RatioBarEditorProps extends Omit<
  React.ComponentProps<'div'>,
  'onChange'
> {
  /** 옵션 목록 */
  options?: RatioBarEditorOption[];
  /** 옵션 변경 콜백 */
  onOptionsChange?: (options: RatioBarEditorOption[]) => void;
  /** 복수 선택 허용 여부 */
  allowMultiple?: boolean;
  /** 복수 선택 변경 콜백 */
  onAllowMultipleChange?: (allowMultiple: boolean) => void;
  /** 투표 삭제 콜백 */
  onDelete?: () => void;
  /** 최소 옵션 수 (기본: 2) */
  minOptions?: number;
  /** 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 비활성화 */
  disabled?: boolean;
}

export const RatioBarEditor = ({
  options: optionsProp,
  onOptionsChange,
  allowMultiple: allowMultipleProp,
  onAllowMultipleChange,
  onDelete,
  minOptions = 2,
  placeholder = '내용을 입력해주세요',
  disabled,
  className,
  ...props
}: RatioBarEditorProps) => {
  const baseId = useId();

  // 내부 상태 (uncontrolled)
  const [internalOptions, setInternalOptions] = useState<
    RatioBarEditorOption[]
  >(() => {
    const initial: RatioBarEditorOption[] = [];
    for (let i = 0; i < minOptions; i++) {
      initial.push({ id: `${baseId}-${i}`, value: '' });
    }
    return initial;
  });
  const [internalAllowMultiple, setInternalAllowMultiple] = useState(false);

  // controlled vs uncontrolled
  const isOptionsControlled = optionsProp !== undefined;
  const isAllowMultipleControlled = allowMultipleProp !== undefined;

  const options = isOptionsControlled ? optionsProp : internalOptions;
  const allowMultiple = isAllowMultipleControlled
    ? allowMultipleProp
    : internalAllowMultiple;

  // 옵션 값 변경
  const handleOptionChange = useCallback(
    (id: string, value: string) => {
      const newOptions = options.map((opt) =>
        opt.id === id ? { ...opt, value } : opt,
      );
      if (!isOptionsControlled) {
        setInternalOptions(newOptions);
      }
      onOptionsChange?.(newOptions);
    },
    [options, isOptionsControlled, onOptionsChange],
  );

  // 옵션 추가
  const handleAddOption = useCallback(() => {
    const newOption: RatioBarEditorOption = {
      id: `${baseId}-${Date.now()}`,
      value: '',
    };
    const newOptions = [...options, newOption];
    if (!isOptionsControlled) {
      setInternalOptions(newOptions);
    }
    onOptionsChange?.(newOptions);
  }, [options, isOptionsControlled, onOptionsChange, baseId]);

  // 옵션 삭제
  const handleRemoveOption = useCallback(
    (id: string) => {
      if (options.length <= minOptions) return;
      const newOptions = options.filter((opt) => opt.id !== id);
      if (!isOptionsControlled) {
        setInternalOptions(newOptions);
      }
      onOptionsChange?.(newOptions);
    },
    [options, minOptions, isOptionsControlled, onOptionsChange],
  );

  // 복수 선택 토글
  const handleAllowMultipleChange = useCallback(
    (checked: boolean) => {
      if (!isAllowMultipleControlled) {
        setInternalAllowMultiple(checked);
      }
      onAllowMultipleChange?.(checked);
    },
    [isAllowMultipleControlled, onAllowMultipleChange],
  );

  const canRemove = options.length > minOptions;

  return (
    <div
      className={mergeStyles(ratioBarEditorRootStyles({ disabled }), className)}
      {...props}
    >
      {/* 입력 필드들 */}
      <div className={ratioBarEditorFieldsStyles()}>
        {options.map((option) => (
          <div key={option.id} className={ratioBarEditorInputStyles()}>
            <input
              type="text"
              value={option.value}
              onChange={(e) => handleOptionChange(option.id, e.target.value)}
              placeholder={placeholder}
              disabled={disabled}
              className={ratioBarEditorTextInputStyles()}
            />
            {canRemove && (
              <button
                type="button"
                onClick={() => handleRemoveOption(option.id)}
                disabled={disabled}
                className={ratioBarEditorRemoveButtonStyles()}
                aria-label="옵션 삭제"
              >
                <CloseFilled size={20} />
              </button>
            )}
          </div>
        ))}

        {/* 항목 추가 버튼 */}
        <button
          type="button"
          onClick={handleAddOption}
          disabled={disabled}
          className={ratioBarEditorAddButtonStyles()}
        >
          <Plus size={20} />
          <span className={ratioBarEditorAddButtonTextStyles()}>
            다른 선택 항목 추가
          </span>
        </button>
      </div>

      {/* 푸터 */}
      <div className={ratioBarEditorFooterStyles()}>
        <Checkbox
          checked={allowMultiple}
          onCheckedChange={handleAllowMultipleChange}
          disabled={disabled}
        >
          <Checkbox.Indicator />
          <Checkbox.Label>복수 선택 허용</Checkbox.Label>
        </Checkbox>

        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            disabled={disabled}
            className={ratioBarEditorDeleteButtonStyles()}
          >
            투표 삭제
          </button>
        )}
      </div>
    </div>
  );
};

RatioBarEditor.displayName = 'RatioBarEditor';
