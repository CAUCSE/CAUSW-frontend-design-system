import { mergeStyles } from '../../utils';

export type FABIconPosition = 'left' | 'right' | 'none';

const baseStyles =
  'inline-flex items-center justify-center ' +
  'bg-gray-100 border border-gray-200 ' +
  'text-gray-500 typo-body-sm-point ' +
  'h-[46px] rounded-[99px] ' +
  'select-none whitespace-nowrap ' +
  'transition-colors';

const paddingStyles = 'px-4 py-[10px]';

const iconGapStyles: Record<FABIconPosition, string> = {
  left: 'gap-[4px]',
  right: 'gap-[10px]',
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
