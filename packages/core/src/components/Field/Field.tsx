import React, { ComponentProps, createContext, useContext, useId } from 'react';
import { mergeStyles } from '../../utils';
import { Text, type Typography, type TextColor } from '../Text';

// Field Context
interface FieldContextValue {
  id: string;
  disabled?: boolean;
  error?: boolean;
}

const FieldContext = createContext<FieldContextValue | null>(null);

function useField() {
  const context = useContext(FieldContext);
  if (!context) {
    throw new Error('Field compound components must be used within a Field');
  }
  return context;
}

// Field Root
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
}

export const Field = ({
  children,
  disabled = false,
  error = false,
  className,
  ...props
}: FieldProps) => {
  const id = useId();

  return (
    <FieldContext.Provider value={{ id, disabled, error }}>
      <div className={mergeStyles('flex flex-col gap-2', className)} {...props}>
        {children}
      </div>
    </FieldContext.Provider>
  );
};

// Field.Label
export type FieldLabelProps = React.ComponentProps<'label'> & {
  children: React.ReactNode;
  typography?: Typography;
  textColor?: TextColor;
};

const FieldLabel = ({
  children,
  className,
  typography = 'body-sm-point',
  textColor = 'gray-700',
  ...labelProps
}: FieldLabelProps) => {
  const { id } = useField();

  return (
    <Text
      as="label"
      typography={typography}
      textColor={textColor}
      htmlFor={id}
      className={mergeStyles('px-1', className)}
      {...labelProps}
    >
      {children}
    </Text>
  );
};

// Field.Text (Input wrapper)
export type FieldTextProps = ComponentProps<'input'> & {
  /** Icon to display on the left side of input */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side of input */
  rightIcon?: React.ReactNode;
};

const FieldText = ({
  className,
  leftIcon,
  rightIcon,
  ...props
}: FieldTextProps) => {
  const { id, disabled, error } = useField();

  const inputStyles = mergeStyles(
    'flex-1 w-full bg-transparent outline-none',
    'typo-body-sm',
    'text-gray-700 placeholder:text-gray-400',
    'caret-gray-600',
  );

  const wrapperStyles = mergeStyles(
    'flex items-center gap-3',
    'rounded-md px-4 py-3',
    'bg-white',
    'focus-within:ring-2 focus-within:ring-gray-600',
    disabled && 'cursor-not-allowed bg-gray-100 opacity-50',
    error && 'ring-2 ring-red-400 focus-within:ring-red-400',
    className,
  );

  return (
    <div className={wrapperStyles}>
      {leftIcon && (
        <span className="flex-shrink-0 text-gray-400">{leftIcon}</span>
      )}
      <input id={id} disabled={disabled} className={inputStyles} {...props} />
      {rightIcon && (
        <span className="flex-shrink-0 text-gray-400">{rightIcon}</span>
      )}
    </div>
  );
};

// Field.Description
export type FieldDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

const FieldDescription = ({ children, className }: FieldDescriptionProps) => {
  const { id, error } = useField();

  return (
    <Text
      typography="body2-sm"
      textColor={error ? 'red-400' : 'gray-400'}
      id={`${id}-description`}
      className={className}
    >
      {children}
    </Text>
  );
};

// Compound component assembly
Field.Label = FieldLabel;
Field.Text = FieldText;
Field.Description = FieldDescription;

Field.displayName = 'Field';
FieldLabel.displayName = 'Field.Label';
FieldText.displayName = 'Field.Text';
FieldDescription.displayName = 'Field.Description';
