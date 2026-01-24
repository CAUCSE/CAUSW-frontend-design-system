import { tv } from 'tailwind-variants';

export const bottomNavigationStyles = tv({
  slots: {
    root: 'fixed right-0 bottom-0 left-0 z-50 flex h-15 items-center justify-between border-t border-gray-200 bg-white px-6 pb-safe',
    item: 'group flex flex-1 flex-col items-center justify-center gap-1 text-xs transition-colors',
    icon: 'text-2xl transition-colors',
    label: 'font-medium',
  },
  variants: {
    active: {
      true: {
        item: 'text-gray-700',
        icon: 'text-gray-700',
        label: 'font-semibold',
      },
      false: {
        item: 'text-gray-300 hover:text-gray-500',
        icon: 'text-gray-300 group-hover:text-gray-500',
        label: 'font-medium',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
