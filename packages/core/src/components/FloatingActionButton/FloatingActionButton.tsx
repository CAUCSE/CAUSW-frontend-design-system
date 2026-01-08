import { ButtonHTMLAttributes, ReactNode } from 'react';
import {
  floatingActionButtonStyles,
  FABIconPosition,
} from './FloatingActionButton.styles';

export interface FloatingActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function FloatingActionButton({
  leftIcon,
  rightIcon,
  disabled = false,
  children,
  ...props
}: FloatingActionButtonProps) {
  const iconPosition: FABIconPosition = leftIcon
    ? 'left'
    : rightIcon
      ? 'right'
      : 'none';

  return (
    <button
      type="button"
      disabled={disabled}
      className={floatingActionButtonStyles({
        iconPosition,
        disabled,
      })}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
}
