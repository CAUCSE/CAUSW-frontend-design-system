import { mergeStyles } from '../../utils';

export type SelectSize = 'sm' | 'md';

const triggerBaseStyles =
  'flex items-center justify-between gap-2 rounded-md bg-white p-4 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1';

const triggerStateStyles =
  'focus:ring-2 focus:ring-gray-600 data-[state=open]:ring-2 data-[state=open]:ring-gray-600';

const errorStyles =
  'ring-2 ring-red-400 focus:ring-red-400 data-[state=open]:ring-red-400';

const contentStyles =
  'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2';

const itemStyles =
  'relative flex w-full cursor-default select-none items-center justify-between gap-2 border-b border-gray-100 py-3 px-6 text-gray-500 outline-none typo-body-sm last:border-0 focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:font-semibold data-[state=checked]:text-gray-700';

export const styles = {
  trigger: (error?: boolean, className?: string) =>
    mergeStyles(
      triggerBaseStyles,
      error ? errorStyles : triggerStateStyles,
      className,
    ),
  content: (className?: string) => mergeStyles(contentStyles, className),
  item: (className?: string) => mergeStyles(itemStyles, className),
  label: (className?: string) =>
    mergeStyles('py-1.5 px-6 text-gray-700 typo-body-sm-point', className),
  separator: (className?: string) =>
    mergeStyles('-mx-1 my-1 h-px bg-gray-100', className),
  scrollButton: (className?: string) =>
    mergeStyles(
      'flex cursor-default items-center justify-center py-1',
      className,
    ),
  viewport: (position: 'popper' | 'item-aligned', className?: string) =>
    mergeStyles(
      'py-1',
      position === 'popper' &&
        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
      className,
    ),
};
