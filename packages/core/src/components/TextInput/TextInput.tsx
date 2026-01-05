import React from 'react';
import { mergeStyles } from '../../utils';
import { useFieldContext } from '../../hooks';
import { TextStyleProps } from '../Text';
import { textStyles } from '../Text/Text.styles';

export type TextInputVariant = 'default' | 'underline';

export interface TextInputProps
  extends React.ComponentProps<'input'>, TextStyleProps {
  /** Input variant style */
  variant?: TextInputVariant;
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
  typography = 'body2-sm',
  textColor = 'gray-700',
  ...props
}: TextInputProps) => {
  // Optional Field context - works with or without Field
  const field = useFieldContext();

  const id = idProp ?? field?.id;
  const disabled = disabledProp ?? field?.disabled ?? false;
  const error = errorProp ?? field?.error ?? false;

  const classes = textStyles({ typography, textColor });

  const inputStyles = mergeStyles(
    'w-full bg-transparent outline-none',
    'placeholder:text-gray-400',
    'caret-gray-600',
  );

  const variantStyles: Record<TextInputVariant, string> = {
    default: mergeStyles(
      'rounded-md p-4',
      'bg-white',
      'focus-within:ring-2 focus-within:ring-gray-600',
    ),
    underline: mergeStyles(
      'py-2 px-0',
      'border-b border-gray-400',
      'bg-transparent',
      'focus-within:border-gray-600',
    ),
  };

  const wrapperStyles = mergeStyles(
    'flex items-center gap-2 self-stretch',
    variantStyles[variant],
    disabled && 'cursor-not-allowed opacity-50',
    error &&
      variant === 'default' &&
      'ring-2 ring-red-400 focus-within:ring-red-400',
    error &&
      variant === 'underline' &&
      'border-red-400 focus-within:border-red-400',
    className,
  );

  return (
    <div className={wrapperStyles}>
      {leftIcon && (
        <span className="flex-shrink-0 text-gray-400">{leftIcon}</span>
      )}
      <input
        id={id}
        disabled={disabled}
        className={mergeStyles(inputStyles, classes)}
        {...props}
      />
      {rightIcon && (
        <span className="flex-shrink-0 text-gray-400">{rightIcon}</span>
      )}
    </div>
  );
};

TextInput.displayName = 'TextInput';
