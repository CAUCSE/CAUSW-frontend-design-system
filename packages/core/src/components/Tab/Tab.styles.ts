import { tv, type VariantProps } from 'tailwind-variants';

export type TabVariant = 'underline' | 'chip';
export const tabList = tv({
  base: 'flex items-center flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar [-webkit-overflow-scrolling:touch]',
  variants: {
    variant: {
      underline: 'border-b border-gray-200',
      chip: 'gap-2',
    },
  },
  defaultVariants: {
    variant: 'underline',
  },
});
export type TabListVariants = VariantProps<typeof tabList>;
export const tabListKeys = tabList.variantKeys;

export const tabItem = tv({
  base: 'cursor-pointer transition-colors select-none flex-shrink-0',
  variants: {
    variant: {
      underline:
        'flex-1 min-w-fit px-3 py-3 text-center border-b-2 typo-subtitle-16-bold',
      chip: 'px-3 py-2 rounded-[0.5rem] typo-body-14-medium',
    },
    active: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'underline',
      active: true,
      class: 'border-gray-700 text-gray-700',
    },
    {
      variant: 'underline',
      active: false,
      class: 'border-transparent text-gray-300',
    },
    {
      variant: 'chip',
      active: true,
      class: 'bg-gray-700 text-white',
    },
    {
      variant: 'chip',
      active: false,
      class: 'bg-white text-gray-600',
    },
  ],
  defaultVariants: {
    variant: 'underline',
    active: false,
  },
});

export type TabItemVariants = VariantProps<typeof tabItem>;
export const tabItemKeys = tabItem.variantKeys;
