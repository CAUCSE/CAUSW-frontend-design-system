import { mergeStyles } from '../../utils';

export type FABIconPosition = 'left' | 'right' | 'none';

const baseStyles =
  'inline-flex items-center justify-center ' +
  'bg-gray-100 border border-gray-200 ' +
  'text-gray-500 typo-body-sm-point ' +
  'h-[2.875rem] rounded-[6.1875rem] ' +
  'select-none whitespace-nowrap ' +
  'transition-colors';

const paddingStyles = 'px-[1rem] py-[0.625rem]';

const iconGapStyles: Record<FABIconPosition, string> = {
  left: 'gap-[0.25rem]',
  right: 'gap-[0.625rem]',
  none: '',
};

export interface FloatingActionButtonStyleOptions {
  iconPosition?: FABIconPosition;
  disabled?: boolean;
}

export function floatingActionButtonStyles({
  iconPosition = 'none',
  disabled = false,
}: FloatingActionButtonStyleOptions) {
  return mergeStyles(
    baseStyles,
    paddingStyles,
    iconGapStyles[iconPosition],
    disabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer',
  );
}
