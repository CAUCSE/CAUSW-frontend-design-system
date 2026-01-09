import { mergeStyles } from '../../utils';

export type ButtonSize = 'sm' | 'md';
export type ButtonColor = 'white' | 'gray' | 'red';

const baseStyles =
  'inline-flex items-center justify-center gap-[6px] ' +
  'whitespace-nowrap rounded-[8px] ' +
  'transition-colors duration-150 ' +
  'disabled:opacity-50 disabled:pointer-events-none';

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-w-[48px] h-[30px] px-2 typo-body2-sm-point',
  md: 'h-[38px] px-3 typo-body2-sm-point',
};

const colorStyles: Record<ButtonColor, { base: string; active: string }> = {
  white: {
    base: 'bg-white text-gray-400',
    active: 'bg-white text-gray-400',
  },
  gray: {
    base: 'bg-gray-100 text-gray-400',
    active: 'bg-gray-100 text-gray-400',
  },
  red: {
    base: 'bg-red-100 text-red-400',
    active: 'bg-red-100 text-red-400',
  },
};

export interface ButtonStyleOptions {
  size: ButtonSize;
  color: ButtonColor;
  active?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function buttonStyles({
  size,
  color,
  active = false,
  disabled = false,
  fullWidth = false,
}: ButtonStyleOptions) {
  return mergeStyles(
    baseStyles,
    disabled ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer',
    sizeStyles[size],
    active ? colorStyles[color].active : colorStyles[color].base,
    fullWidth && 'w-full',
  );
}
