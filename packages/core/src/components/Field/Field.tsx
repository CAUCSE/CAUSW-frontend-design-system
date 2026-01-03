import React, { useId } from 'react';
import { mergeStyles } from '../../utils';
import { Text, type TextStyleProps } from '../Text';
import {
  FieldContext,
  useFieldContext,
} from '../../hooks/field/useFieldContext';

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
export interface FieldLabelProps
  extends React.ComponentProps<'label'>, TextStyleProps {}

const FieldLabel = ({
  children,
  className,
  typography = 'body-sm-point',
  textColor = 'gray-700',
  as = 'label',
  ...labelProps
}: FieldLabelProps) => {
  const { id } = useFieldContext();

  return (
    <Text
      as={as}
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

// Field.Description - only shows when NOT in error state
export interface FieldDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const FieldDescription = ({
  children,
  className,
  ...props
}: FieldDescriptionProps) => {
  const { id, error } = useFieldContext();

  if (error) return null;

  return (
    <Text
      typography="body2-sm"
      textColor="gray-400"
      id={id ? `${id}-description` : undefined}
      className={className}
      {...props}
    >
      {children}
    </Text>
  );
};

// Field.ErrorDescription - only shows when in error state
export interface FieldErrorDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const FieldErrorDescription = ({
  children,
  className,
  ...props
}: FieldErrorDescriptionProps) => {
  const { id, error } = useFieldContext();

  if (!error) return null;

  return (
    <Text
      typography="body2-sm"
      textColor="red-400"
      id={id ? `${id}-error` : undefined}
      className={className}
      {...props}
    >
      {children}
    </Text>
  );
};

// Compound component assembly
Field.Label = FieldLabel;
Field.Description = FieldDescription;
Field.ErrorDescription = FieldErrorDescription;

Field.displayName = 'Field';
FieldLabel.displayName = 'Field.Label';
FieldDescription.displayName = 'Field.Description';
FieldErrorDescription.displayName = 'Field.ErrorDescription';
