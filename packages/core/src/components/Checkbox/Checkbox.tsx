import React, { useState } from 'react';
import { PolymorphicProps } from '../../utils';
import { Text, TextVariants } from '../Text';
import { TextElement } from '../Text/Text';
import { checkbox, CheckboxVariants } from './Checkbox.styles';

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
export interface CheckboxRootProps
  extends Omit<React.ComponentProps<'label'>, 'onChange'>, CheckboxVariants {
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
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

  const { root } = checkbox({ disabled });

  return (
    <CheckboxContext.Provider value={{ checked: isChecked, disabled }}>
      <label className={root({ className })} {...props}>
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
  const { indicator, indicatorIcon } = checkbox({ checked });

  return (
    <span className={indicator()}>
      <svg
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={indicatorIcon()}
      >
        <path
          d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

// Checkbox.Label
export type CheckboxLabelProps<E extends TextElement = 'span'> =
  PolymorphicProps<E, TextVariants>;

const CheckboxLabel = <E extends TextElement = 'span'>({
  children,
  typography = 'body-16-regular',
  textColor = 'gray-600',
  className,
  ...props
}: CheckboxLabelProps<E>) => {
  const { disabled } = useCheckboxContext();
  const { label } = checkbox({ disabled });

  return (
    <Text
      typography={typography}
      textColor={textColor}
      className={label({ className })}
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
