import React, { useState } from 'react';
import { PolymorphicProps } from '../../utils';
import { Text, TextVariants } from '../Text';
import { TextElement } from '../Text/Text';
import { toggle, ToggleVariants } from './Toggle.styles';

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
export interface ToggleRootProps
  extends Omit<React.ComponentProps<'label'>, 'onChange'>, ToggleVariants {
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
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

  const { root } = toggle({ disabled });

  return (
    <ToggleContext.Provider value={{ checked: isChecked, disabled }}>
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
    </ToggleContext.Provider>
  );
};

// Toggle.Switch

const ToggleSwitch = () => {
  const { checked } = useToggleContext();
  const { switch: switchStyle, switchThumb } = toggle({ checked });

  return (
    <span className={switchStyle()}>
      <span className={switchThumb()} />
    </span>
  );
};

// Toggle.Label
export type ToggleLabelProps<E extends TextElement = 'span'> = PolymorphicProps<
  E,
  TextVariants
>;

const ToggleLabel = <E extends TextElement = 'span'>({
  children,
  typography = 'body-16-medium',
  textColor = 'gray-700',
  className,
  ...props
}: ToggleLabelProps<E>) => {
  const { disabled } = useToggleContext();
  const { label } = toggle({ disabled });

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
ToggleRoot.displayName = 'Toggle';
ToggleSwitch.displayName = 'Toggle.Switch';
ToggleLabel.displayName = 'Toggle.Label';

export const Toggle = Object.assign(ToggleRoot, {
  Switch: ToggleSwitch,
  Label: ToggleLabel,
});
