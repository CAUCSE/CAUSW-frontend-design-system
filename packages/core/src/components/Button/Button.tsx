import { ComponentProps } from 'react';
import { button, ButtonVariants } from './Button.styles';
import { mergeStyles } from '../../utils';
import { Primitive, PrimitiveProps } from '../Primitive';

export interface ButtonProps
  extends
    Omit<ComponentProps<'button'>, 'color'>,
    ButtonVariants,
    PrimitiveProps {}

export function Button({
  size = 'md',
  color = 'gray',
  fullWidth = false,
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Primitive.button
      disabled={disabled}
      className={mergeStyles(
        button({
          size,
          color,
          fullWidth,
          disabled,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Primitive.button>
  );
}
