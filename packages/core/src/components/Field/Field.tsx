import React, { useId } from 'react';
import { PolymorphicProps } from '../../utils/polymorphic';
import { Text, type TextVariants } from '../Text';
import {
  FieldContext,
  useFieldContext,
} from '../../hooks/field/useFieldContext';
import { TextElement } from '../Text/Text';
import { field } from './Field.styles';

// Field Root
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
}

const FieldRoot = ({
  children,
  disabled = false,
  error = false,
  className,
  ...props
}: FieldProps) => {
  const id = useId();
  const { root } = field();

  return (
    <FieldContext.Provider value={{ id, disabled, error }}>
      <div className={root({ className })} {...props}>
        {children}
      </div>
    </FieldContext.Provider>
  );
};

export type FieldLabelProps<E extends TextElement = 'label'> = PolymorphicProps<
  E,
  TextVariants
>;

const FieldLabel = <E extends TextElement = 'label'>({
  children,
  className,
  typography = 'subtitle-16-bold',
  textColor = 'gray-700',
  ...labelProps
}: FieldLabelProps<E>) => {
  const fieldContext = useFieldContext();
  const id = fieldContext?.id;
  const { label } = field();

  return (
    <Text
      typography={typography}
      textColor={textColor}
      htmlFor={id}
      className={label({ className })}
      {...labelProps}
    >
      {children}
    </Text>
  );
};

export interface FieldDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const FieldDescription = ({
  children,
  className,
  ...props
}: FieldDescriptionProps) => {
  const fieldContext = useFieldContext();

  const id = fieldContext?.id;
  const error = fieldContext?.error;
  const { description } = field();

  if (error) return null;

  return (
    <Text
      typography="body-14-regular"
      textColor="gray-400"
      id={id ? `${id}-description` : undefined}
      className={description({ className })}
      {...props}
    >
      {children}
    </Text>
  );
};

export interface FieldErrorDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const FieldErrorDescription = ({
  children,
  className,
  ...props
}: FieldErrorDescriptionProps) => {
  const fieldContext = useFieldContext();

  const id = fieldContext?.id;
  const error = fieldContext?.error;
  const { error: errorStyle } = field();

  if (!error) return null;

  return (
    <Text
      typography="body-14-regular"
      textColor="red-400"
      id={id ? `${id}-error` : undefined}
      className={errorStyle({ className })}
      {...props}
    >
      {children}
    </Text>
  );
};

FieldRoot.displayName = 'Field';
FieldLabel.displayName = 'Field.Label';
FieldDescription.displayName = 'Field.Description';
FieldErrorDescription.displayName = 'Field.ErrorDescription';

export const Field = Object.assign(FieldRoot, {
  Label: FieldLabel,
  Description: FieldDescription,
  ErrorDescription: FieldErrorDescription,
});
