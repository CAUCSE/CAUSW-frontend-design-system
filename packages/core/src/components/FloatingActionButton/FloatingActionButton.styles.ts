import { mergeStyles } from '../../utils';

const baseStyles =
  'inline-flex items-center justify-center ' +
  'bg-gray-100 border border-gray-200 ' +
  'hover:bg-gray-200 hover:border-gray-300 ' +
  'text-gray-500 typo-subtitle-16-bold ' +
  'h-[2.875rem] rounded-[6.1875rem] ' +
  'select-none whitespace-nowrap ' +
  'transition-colors';

const paddingStyles = 'px-[1rem] py-[0.625rem]';

export interface FloatingActionButtonStyleOptions {
  disabled?: boolean;
}

export function floatingActionButtonStyles({
  disabled = false,
}: FloatingActionButtonStyleOptions) {
  return mergeStyles(
    baseStyles,
    paddingStyles,
    disabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer',
  );
}
