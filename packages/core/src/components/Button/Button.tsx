import { ComponentProps } from 'react';
import { button, ButtonVariants } from './Button.styles';
import { mergeStyles } from '../../utils';

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'color'>, ButtonVariants {}

export function Button({
  size = 'md',
  color = 'gray',
  active = false,
  fullWidth = false,
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={mergeStyles(
        button({
          size,
          color,
          active,
          disabled,
          fullWidth,
        }),
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
