import React, { useId } from 'react';
import { useFieldContext } from '../../hooks';
import { TextVariants } from '../Text';
import { text } from '../Text/Text.styles';
import { textInput, type TextInputVariants } from './TextInput.styles';

export interface TextInputProps
  extends React.ComponentProps<'input'>, TextVariants, TextInputVariants {
  /** Icon to display on the left side of input */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side of input */
  rightIcon?: React.ReactNode;
  /** Error state (overrides Field context) */
  error?: boolean;
}

export const TextInput = ({
  id: idProp,
  disabled: disabledProp,
  error: errorProp,
  className,
  leftIcon,
  rightIcon,
  variant = 'default',
  typography = 'body-16-regular',
  textColor = 'gray-700',
  ...props
}: TextInputProps) => {
  // Optional Field context - works with or without Field
  const field = useFieldContext();
  const generatedId = useId();

  const id = idProp ?? field?.id ?? generatedId;
  const disabled = disabledProp ?? field?.disabled ?? false;
  const error = errorProp ?? field?.error ?? false;

  const textClasses = text({ typography, textColor });

  const {
    root,
    input,
    leftIcon: leftIconClass,
    rightIcon: rightIconClass,
  } = textInput({
    variant,
    error,
    disabled,
  });

  return (
    <div className={root({ className })}>
      {leftIcon && <span className={leftIconClass()}>{leftIcon}</span>}
      <input
        id={id}
        disabled={disabled}
        className={input({ className: textClasses })}
        {...props}
      />
      {rightIcon && <span className={rightIconClass()}>{rightIcon}</span>}
    </div>
  );
};

TextInput.displayName = 'TextInput';
