import { ComponentProps } from 'react';
import { ctaButton, CTAButtonVariants } from './CTAButton.styles';
import { mergeStyles } from '../../utils';
import { Primitive, PrimitiveProps } from '../Primitive';

export interface CTAButtonProps
  extends
    Omit<ComponentProps<'button'>, 'color'>,
    PrimitiveProps,
    CTAButtonVariants {}

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
        ctaButton({ color, fullWidth, disabled }),
        className,
      )}
      {...props}
    >
      {children}
    </Primitive.button>
  );
}
