import { mergeStyles } from '../../utils';
export type ChipVariant = 'default' | 'dropdown' | 'closable';
export type ChipSize = 'sm' | 'md';
export type ChipColor = 'white' | 'lightgray' | 'darkgray';

const baseStyles =
  'inline-flex items-center gap-1 rounded-[12px] select-none whitespace-nowrap transition-colors ';

const sizeStyles: Record<ChipSize, string> = {
  sm: 'px-2 py-1 typo-fixed-14',
  md: 'px-[14px] py-[6px] typo-fixed-16',
};

const colorStyles: Record<ChipColor, string> = {
  white: 'bg-white text-gray-700',
  lightgray: 'bg-[#F5F6F8] text-gray-500',
  darkgray: 'bg-[#364153] text-white',
};

export interface ChipStylesOptions {
  size: ChipSize;
  color: ChipColor;
  disabled?: boolean;
}

export function chipStyles({
  color,
  size,
  disabled = false,
}: ChipStylesOptions) {
  return mergeStyles(
    baseStyles,
    sizeStyles[size],
    colorStyles[color],
    disabled ? 'cursor-not-allowed' : 'cursor-default',
  );
}

export function chipIconStyles(disabled?: boolean) {
  return mergeStyles(
    'inline-flex items-center justify-center',
    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
  );
}
