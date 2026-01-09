import { ButtonHTMLAttributes } from 'react';
import { ctaButtonStyles, CTAButtonColor } from './CTAButton.styles';
import { mergeStyles } from '../../utils';

export interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: CTAButtonColor;
  fullWidth?: boolean;
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
    <button
      type="button"
      className={mergeStyles(
        ctaButtonStyles({ color, fullWidth, disabled }),
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
