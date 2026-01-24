import { ComponentProps } from 'react';
import { ctaButtonStyles, CTAButtonColor } from './CTAButton.styles';
import { mergeStyles } from '../../utils';
import { Primitive, PrimitiveProps } from '../Primitive';

export interface CTAButtonProps
  extends ComponentProps<'button'>, PrimitiveProps {
  color?: CTAButtonColor;
  fullWidth?: boolean;
  asChild?: boolean;
}

export function CTAButton({
  color = 'light',
  fullWidth = false,
  disabled = false,
  className,
  children,
  ...props
}: CTAButtonProps) {
  return (
    <Primitive.button
      disabled={disabled}
      className={mergeStyles(
        ctaButtonStyles({ color, fullWidth, disabled }),
        className,
      )}
      {...props}
    >
      {children}
    </Primitive.button>
  );
}
