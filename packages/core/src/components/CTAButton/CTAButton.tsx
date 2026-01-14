import { ComponentProps } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ctaButtonStyles, CTAButtonColor } from './CTAButton.styles';
import { mergeStyles } from '../../utils';

export interface CTAButtonProps extends ComponentProps<'button'> {
  color?: CTAButtonColor;
  fullWidth?: boolean;
  asChild?: boolean;
}

export function CTAButton({
  color = 'light',
  fullWidth = false,
  disabled = false,
  asChild = false,
  className,
  children,
  ...props
}: CTAButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      type={asChild ? undefined : 'button'}
      disabled={disabled}
      className={mergeStyles(
        ctaButtonStyles({ color, fullWidth, disabled }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
