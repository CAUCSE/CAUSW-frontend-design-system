import { tv, type VariantProps } from 'tailwind-variants';

export const tabs = tv({
  slots: {
    list: 'flex items-center flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar [-webkit-overflow-scrolling:touch]',
    item: 'cursor-pointer transition-colors select-none flex-shrink-0',
  },
  variants: {
    variant: {
      underline: {
        list: 'border-b border-gray-200',
        item: [
          'flex-1 min-w-fit px-3 py-3 text-center border-b-2 typo-subtitle-16-bold',
          'aria-selected:border-gray-700 aria-selected:text-gray-700',
          'aria-[selected=false]:border-transparent aria-[selected=false]:text-gray-300',
        ].join(' '),
      },
      chip: {
        list: 'gap-2',
        item: [
          'px-3 py-2 rounded-[0.5rem] typo-body-14-medium',
          'aria-selected:bg-gray-700 aria-selected:text-white',
          'aria-[selected=false]:bg-white aria-[selected=false]:text-gray-600',
        ].join(' '),
      },
    },
  },
  defaultVariants: {
    variant: 'underline',
  },
});

export type TabVariants = VariantProps<typeof tabs>;
