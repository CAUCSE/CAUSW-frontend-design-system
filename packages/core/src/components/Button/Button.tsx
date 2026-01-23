import { ComponentProps } from 'react';
import { buttonStyles, ButtonSize, ButtonColor } from './Button.styles';
import { mergeStyles } from '../../utils';

export interface ButtonProps extends ComponentProps<'button'> {
  size?: ButtonSize;
  color?: ButtonColor;
  active?: boolean;
  fullWidth?: boolean;
}

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
        buttonStyles({
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
