import { tv, VariantProps } from 'tailwind-variants';

export const bottomNavigation = tv({
  slots: {
    root: 'fixed right-0 bottom-0 left-0 z-sticky flex h-15 items-center justify-between border-t border-gray-200 px-12 py-2 pb-safe',
    item: 'group flex flex-1 flex-col items-center justify-center gap-1 text-xs transition-colors',
    icon: 'w-5 h-5',
    label: 'typo-caption-12-semibold text-center',
  },
  variants: {
    selected: {
      true: {
        icon: 'fill-gray-700',
        label: 'text-gray-600',
      },
      false: {
        icon: 'fill-gray-300 group-hover:fill-gray-500 group-active:fill-gray-500',
        label:
          'text-gray-300 group-hover:text-gray-500 group-active:text-gray-500',
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export type BottomNavigationVariants = VariantProps<typeof bottomNavigation>;
