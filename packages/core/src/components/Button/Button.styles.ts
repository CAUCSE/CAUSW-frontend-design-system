import { mergeStyles } from '../../utils';

export type ButtonSize = 'sm' | 'md';
export type ButtonColor = 'white' | 'gray' | 'red';

const baseStyles =
  'inline-flex items-center justify-center gap-[0.375rem] ' +
  'whitespace-nowrap rounded-[0.5rem] ' +
  'transition-colors duration-150 ' +
  'disabled:opacity-50 disabled:pointer-events-none';

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-w-[3rem] h-[1.875rem] px-[0.5rem] typo-body-14-semibold',
  md: 'h-[2.375rem] px-[0.75rem] typo-body-14-semibold',
};

const colorStyles: Record<ButtonColor, { base: string; active: string }> = {
  // base와 active에 대한 설정이 아직 정해지지 않음
  white: {
    base: 'bg-white text-gray-400 hover:bg-gray-100',
    active: 'bg-white text-gray-400 hover:bg-gray-200',
  },
  gray: {
    base: 'bg-gray-100 text-gray-400 hover:bg-gray-200',
    active: 'bg-gray-100 text-gray-400 hover:bg-gray-200',
  },
  red: {
    base: 'bg-red-100 text-red-400 hover:bg-red-200',
    active: 'bg-red-100 text-red-400 hover:bg-red-200',
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
