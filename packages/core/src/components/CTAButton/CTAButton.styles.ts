import { mergeStyles } from '../../utils';

export type CTAButtonColor = 'blue' | 'red' | 'dark' | 'light' | 'white';

type CTAButtonInternalColor = CTAButtonColor | 'disabled';

const baseStyles =
  'inline-flex items-center justify-center ' +
  'h-[3.375rem] p-[0.5rem] rounded-[0.75rem] ' +
  'typo-body-15-semibold whitespace-nowrap select-none ' +
  'transition-colors';

const widthStyles = {
  default: 'w-[18rem]',
  full: 'w-full',
};

const colorStyles: Record<CTAButtonInternalColor, string> = {
  blue: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
  red: 'bg-red-400 hover:bg-red-500 text-white',
  dark: 'bg-gray-700 hover:bg-gray-800 text-white hover:text-gray-300',
  light: 'bg-gray-100 hover:bg-gray-200 text-gray-500',
  white: 'bg-white hover:bg-gray-100 text-gray-500',
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
    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
  );
}
