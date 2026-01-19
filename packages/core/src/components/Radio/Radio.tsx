import React, { createContext, useContext } from 'react';
import { Primitive, PrimitiveProps } from '../Primitive';
import { Text } from '../Text';
import { radio } from './Radio.styles';

// RadioGroup Context
interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

const useRadioGroupContext = () => {
  return useContext(RadioGroupContext);
};

// RadioGroup
export interface RadioGroupProps
  extends React.HTMLAttributes<HTMLDivElement>, PrimitiveProps {
  name: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export const RadioGroup = ({
  name,
  value,
  defaultValue,
  onValueChange,
  className,
  children,
  ...props
}: RadioGroupProps) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const currentValue = value ?? internalValue;
  const { group } = radio();

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <RadioGroupContext.Provider
      value={{ name, value: currentValue, onChange: handleChange }}
    >
      <Primitive.div
        role="radiogroup"
        className={group({ className })}
        {...props}
      >
        {children}
      </Primitive.div>
    </RadioGroupContext.Provider>
  );
};

// Radio icons ( icons 구현 전까지 임시 )
const RadioIcon = ({
  checked,
  className,
}: {
  checked: boolean;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <circle
      cx="10"
      cy="10"
      r={checked ? 7 : 7.5}
      stroke="currentColor"
      strokeWidth={checked ? 6 : 5}
      className="transition-all duration-150 ease-in-out"
    />
  </svg>
);

// Radio
export interface RadioProps extends Omit<
  React.ComponentProps<'input'>,
  'type'
> {
  value: string;
  children: React.ReactNode;
}

export const Radio = ({
  value,
  children,
  className,
  checked: checkedProp,
  onChange,
  ...props
}: RadioProps) => {
  const group = useRadioGroupContext();

  const isChecked = group ? group.value === value : checkedProp;
  const name = group?.name ?? props.name;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    group?.onChange?.(value);
    onChange?.(e);
  };

  const { item, indicatorWrapper, indicatorIcon } = radio({
    checked: !!isChecked,
    disabled: props.disabled,
  });

  return (
    <label className={item({ className })}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
        className="sr-only"
        {...props}
      />
      <span className={indicatorWrapper()}>
        <RadioIcon checked={!!isChecked} className={indicatorIcon()} />
      </span>
      <Text typography="body-16-regular" textColor="gray-800">
        {children}
      </Text>
    </label>
  );
};

RadioGroup.displayName = 'RadioGroup';
Radio.displayName = 'Radio';

export { useRadioGroupContext };
