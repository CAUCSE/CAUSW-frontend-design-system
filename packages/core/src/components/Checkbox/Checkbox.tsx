import React, { useState } from 'react';
import { mergeStyles, PolymorphicProps } from '../../utils';
import { Text, TextStyleProps } from '../Text';
import { TextElement } from '../Text/Text';

// Checkbox Context
interface CheckboxContextValue {
  checked: boolean;
  disabled?: boolean;
}

const CheckboxContext = React.createContext<CheckboxContextValue | null>(null);

const useCheckboxContext = () => {
  const context = React.useContext(CheckboxContext);
  if (!context) {
    throw new Error(
      'Checkbox 서브 컴포넌트는 <Checkbox> 컴포넌트 내부에서 사용해야 합니다. ex) <Checkbox><Checkbox.Indicator /></Checkbox>',
    );
  }
  return context;
};

// Checkbox
export interface CheckboxRootProps extends Omit<
  React.ComponentProps<'label'>,
  'onChange'
> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const CheckboxRoot = ({
  checked: checkedProp,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  children,
  className,
  ...props
}: CheckboxRootProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checkedProp !== undefined ? checkedProp : internalChecked;

  const handleChange = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    if (checkedProp === undefined) {
      setInternalChecked(newChecked);
    }
    onCheckedChange?.(newChecked);
  };

  return (
    <CheckboxContext.Provider value={{ checked: isChecked, disabled }}>
      <label
        className={mergeStyles(
          'inline-flex cursor-pointer items-center gap-2',
          disabled && 'cursor-not-allowed opacity-50',
          className,
        )}
        {...props}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
        />
        {children}
      </label>
    </CheckboxContext.Provider>
  );
};

// Checkbox.Indicator
const CheckboxIndicator = () => {
  const { checked } = useCheckboxContext();

  if (checked) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className="flex-shrink-0"
      >
        <rect width="18" height="18" rx="4" fill="#1E2939" />
        <path
          d="M5 9.08333L7.94737 12L13 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <span
      className={mergeStyles(
        'flex-shrink-0',
        'aspect-square h-[18px] w-[18px]',
        'rounded border-2 border-gray-200 bg-white',
      )}
    />
  );
};

// Checkbox.Label
export type CheckboxLabelProps<E extends TextElement = 'span'> =
  PolymorphicProps<E, TextStyleProps>;

const CheckboxLabel = <E extends TextElement = 'span'>({
  children,
  typography = 'body-sm',
  textColor = 'gray-600',
  ...props
}: CheckboxLabelProps<E>) => {
  const { disabled } = useCheckboxContext();

  return (
    <Text
      typography={typography}
      textColor={disabled ? 'gray-400' : textColor}
      {...props}
    >
      {children}
    </Text>
  );
};

// Compound Component
CheckboxRoot.displayName = 'Checkbox';
CheckboxIndicator.displayName = 'Checkbox.Indicator';
CheckboxLabel.displayName = 'Checkbox.Label';

export const Checkbox = Object.assign(CheckboxRoot, {
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
});
