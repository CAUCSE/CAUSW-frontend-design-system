import { mergeStyles } from '../../utils';

export type CTAButtonColor = 'blue' | 'red' | 'dark' | 'light' | 'white';

type CTAButtonInternalColor = CTAButtonColor | 'disabled';

const baseStyles =
  'inline-flex items-center justify-center ' +
  'h-[54px] px-[8px] rounded-[12px] ' +
  'typo-fixed-15 whitespace-nowrap select-none ' +
  'transition-colors';

const widthStyles = {
  default: 'w-[288px]',
  full: 'w-full',
};

const colorStyles: Record<CTAButtonInternalColor, string> = {
  blue: 'bg-blue-100 text-blue-700',
  red: 'bg-red-400 text-white',
  dark: 'bg-gray-700 text-white',
  light: 'bg-gray-100 text-gray-500',
  white: 'bg-white text-gray-500',
  disabled: 'bg-gray-200 text-gray-300',
};

export interface CTAButtonStyleOptions {
  color: CTAButtonColor;
  fullWidth?: boolean;
  disabled?: boolean;
}

export function ctaButtonStyles({
  color,
  fullWidth = false,
  disabled = false,
}: CTAButtonStyleOptions) {
  return mergeStyles(
    baseStyles,
    fullWidth ? widthStyles.full : widthStyles.default,
    colorStyles[disabled ? 'disabled' : color],
    disabled ? 'pointer-events-none' : 'cursor-pointer',
  );
}
