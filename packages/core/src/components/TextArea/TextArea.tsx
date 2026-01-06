import React from 'react';
import { useFieldContext } from '../../hooks';
import { mergeStyles } from '../../utils';
import { Primitive, PrimitiveProps } from '../Primitive';

// TextArea Root
export interface TextAreaProps
  extends React.HTMLAttributes<HTMLDivElement>, PrimitiveProps {
  children: React.ReactNode;
}

const TextAreaRoot = ({ className, children, ...props }: TextAreaProps) => {
  const field = useFieldContext();

  const wrapperStyles = mergeStyles(
    'rounded-md p-4',
    'bg-white',
    'focus-within:ring-2 focus-within:ring-gray-600',
    field?.disabled && 'cursor-not-allowed opacity-50',
    field?.error && 'ring-2 ring-red-400 focus-within:ring-red-400',
    className,
  );

  return (
    <Primitive.div className={wrapperStyles} {...props}>
      {children}
    </Primitive.div>
  );
};

// TextArea.Input
export interface TextAreaInputProps extends React.ComponentProps<'textarea'> {
  /** Whether to allow vertical resizing @default true */
  resize?: boolean;
}

const TextAreaInput = ({
  resize = true,
  disabled: disabledProp,
  className,
  ...props
}: TextAreaInputProps) => {
  const field = useFieldContext();
  const disabled = disabledProp ?? field?.disabled ?? false;

  const textareaStyles = mergeStyles(
    'w-full min-w-0 min-h-10 bg-transparent outline-none',
    'typo-body-sm',
    'text-gray-700 placeholder:text-gray-400',
    'caret-gray-600',
    resize ? 'resize-y' : 'resize-none',
    disabled && 'cursor-not-allowed',
    className,
  );

  return <textarea className={textareaStyles} disabled={disabled} {...props} />;
};

// TextArea.Footer
export interface TextAreaFooterProps
  extends React.HTMLAttributes<HTMLDivElement>, PrimitiveProps {
  children: React.ReactNode;
}

const TextAreaFooter = ({
  className,
  children,
  ...props
}: TextAreaFooterProps) => {
  return (
    <Primitive.div className={mergeStyles('mt-2', className)} {...props}>
      {children}
    </Primitive.div>
  );
};

// Compound Component
TextAreaRoot.displayName = 'TextArea';
TextAreaInput.displayName = 'TextArea.Input';
TextAreaFooter.displayName = 'TextArea.Footer';

export const TextArea = Object.assign(TextAreaRoot, {
  Input: TextAreaInput,
  Footer: TextAreaFooter,
});
