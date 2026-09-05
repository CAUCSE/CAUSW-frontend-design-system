import { tv, type VariantProps } from 'tailwind-variants';

export const bottomNavigation = tv({
  slots: {
    root: 'fixed bottom-[max(16px,env(safe-area-inset-bottom))] left-1/2 z-sticky flex w-[calc(100%-32px)] max-w-[360px] -translate-x-1/2 items-center justify-center gap-8 rounded-full bg-white px-4 py-1.5 shadow-[0_0_30px_0_rgba(51,53,61,0.16)]',
    item: 'group flex h-11 w-10 flex-col items-center justify-center gap-1 transition-colors',
    icon: 'w-5 h-5',
    label: 'typo-caption-11-semibold text-center whitespace-nowrap',
  },
  variants: {
    selected: {
      true: {
        icon: 'fill-gray-600',
        label: 'text-gray-600',
      },
      false: {
        icon: 'fill-gray-300 group-hover:fill-gray-500 group-active:fill-gray-500',
        label:
          'text-gray-400 group-hover:text-gray-500 group-active:text-gray-500',
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export type BottomNavigationVariants = VariantProps<typeof bottomNavigation>;
