import React, { useState } from 'react';
import { mergeStyles, PolymorphicProps } from '../../utils';
import { Text, TextStyleProps } from '../Text';
import { TextElement } from '../Text/Text';

// Toggle Context
interface ToggleContextValue {
  checked: boolean;
  disabled?: boolean;
}

const ToggleContext = React.createContext<ToggleContextValue | null>(null);

const useToggleContext = () => {
  const context = React.useContext(ToggleContext);
  if (!context) {
    throw new Error(
      'Toggle 서브 컴포넌트는 <Toggle> 컴포넌트 내부에서 사용해야 합니다. ex) <Toggle><Toggle.Switch /></Toggle>',
    );
  }
  return context;
};

// Toggle
export interface ToggleRootProps extends Omit<
  React.ComponentProps<'label'>,
  'onChange'
> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const ToggleRoot = ({
  checked: checkedProp,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  children,
  className,
  ...props
}: ToggleRootProps) => {
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
    <ToggleContext.Provider value={{ checked: isChecked, disabled }}>
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
    </ToggleContext.Provider>
  );
};

// Toggle.Switch

const ToggleSwitch = () => {
  const { checked } = useToggleContext();

  return (
    <span
      className={mergeStyles(
        'relative inline-flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out',
        'h-7 w-12', // 48px x 28px
        checked ? 'bg-gray-600' : 'bg-gray-200',
      )}
    >
      <span
        className={mergeStyles(
          'pointer-events-none inline-block rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out',
          'h-5 w-5', // 20px
          checked ? 'translate-x-5' : 'translate-x-0',
        )}
      />
    </span>
  );
};

// Toggle.Label
export type ToggleLabelProps<E extends TextElement = 'span'> = PolymorphicProps<
  E,
  TextStyleProps
>;

const ToggleLabel = <E extends TextElement = 'span'>({
  children,
  typography = 'fixed-16',
  textColor = 'gray-700',
  ...props
}: ToggleLabelProps<E>) => {
  const { disabled } = useToggleContext();

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
ToggleRoot.displayName = 'Toggle';
ToggleSwitch.displayName = 'Toggle.Switch';
ToggleLabel.displayName = 'Toggle.Label';

export const Toggle = Object.assign(ToggleRoot, {
  Switch: ToggleSwitch,
  Label: ToggleLabel,
});
