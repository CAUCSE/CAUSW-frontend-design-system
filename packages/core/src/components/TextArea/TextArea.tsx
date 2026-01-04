import React from 'react';
import { mergeStyles } from '../../utils';
import { Primitive, PrimitiveProps } from '../Primitive';

// TextArea Root
export interface TextAreaProps
  extends React.HTMLAttributes<HTMLDivElement>, PrimitiveProps {
  children: React.ReactNode;
}

const TextAreaRoot = ({ className, children, ...props }: TextAreaProps) => {
  const wrapperStyles = mergeStyles(
    'rounded-md p-4',
    'bg-white',
    'focus-within:ring-2 focus-within:ring-gray-600',
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
  className,
  ...props
}: TextAreaInputProps) => {
  const textareaStyles = mergeStyles(
    'w-full bg-transparent outline-none',
    'typo-body-sm',
    'text-gray-700 placeholder:text-gray-400',
    'caret-gray-600',
    resize ? 'resize-y' : 'resize-none',
    className,
  );

  return <textarea className={textareaStyles} {...props} />;
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
