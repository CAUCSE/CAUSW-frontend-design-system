import React from 'react';
import { useFieldContext } from '../../hooks';
import { Primitive, PrimitiveProps } from '../Primitive';
import { textArea, type TextAreaVariants } from './TextArea.styles';

// TextArea Root
export interface TextAreaProps
  extends React.HTMLAttributes<HTMLDivElement>, PrimitiveProps {
  children: React.ReactNode;
}

const TextAreaRoot = ({ className, children, ...props }: TextAreaProps) => {
  const field = useFieldContext();

  const { root } = textArea({
    disabled: field?.disabled,
    error: field?.error,
  });

  return (
    <Primitive.div className={root({ className })} {...props}>
      {children}
    </Primitive.div>
  );
};

// TextArea.Input
export interface TextAreaInputProps
  extends React.ComponentProps<'textarea'>, Pick<TextAreaVariants, 'resize'> {}

const TextAreaInput = ({
  resize = true,
  disabled: disabledProp,
  className,
  ...props
}: TextAreaInputProps) => {
  const field = useFieldContext();
  const disabled = disabledProp ?? field?.disabled ?? false;

  const { input } = textArea({ disabled, resize });

  return (
    <textarea className={input({ className })} disabled={disabled} {...props} />
  );
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
  const { footer } = textArea();
  return (
    <Primitive.div className={footer({ className })} {...props}>
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
