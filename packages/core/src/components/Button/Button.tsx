import { ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonStyles, ButtonSize, ButtonColor } from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  active?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
}

export function Button({
  size = 'md',
  color = 'gray',
  active = false,
  fullWidth = false,
  disabled = false,
  leftIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
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
      {leftIcon && (
        <span className="flex shrink-0 items-center">{leftIcon}</span>
      )}

      {children && <span>{children}</span>}
    </button>
  );
}
