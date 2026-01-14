import { ComponentProps, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import {
  floatingActionButtonStyles,
  FABIconPosition,
} from './FloatingActionButton.styles';
import { mergeStyles } from '../../utils';

export interface FloatingActionButtonProps extends ComponentProps<'button'> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  asChild?: boolean;
}

export function FloatingActionButton({
  leftIcon,
  rightIcon,
  disabled = false,
  asChild = false,
  children,
  className,
  ...props
}: FloatingActionButtonProps) {
  const iconPosition: FABIconPosition = leftIcon
    ? 'left'
    : rightIcon
      ? 'right'
      : 'none';

  const Component = asChild ? Slot : 'button';

  return (
    <Component
      type={asChild ? undefined : 'button'}
      disabled={disabled}
      className={mergeStyles(
        floatingActionButtonStyles({ iconPosition, disabled }),
        className,
      )}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </Component>
  );
}
