import { ComponentProps } from 'react';
import { buttonStyles, ButtonSize, ButtonColor } from './Button.styles';

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
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({
        size,
        color,
        active,
        disabled,
        fullWidth,
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
