import { tv, VariantProps } from 'tailwind-variants';

export const radio = tv({
  slots: {
    group: 'flex flex-col gap-5',
    item: 'flex cursor-pointer items-center gap-2 transition-opacity duration-150',
    indicatorWrapper: 'flex-shrink-0 transition-colors duration-150',
    indicatorIcon: 'transition-all duration-150 ease-in-out',
    label: '',
  },
  variants: {
    checked: {
      true: {
        indicatorWrapper: 'text-gray-800 hover:text-gray-800',
        indicatorIcon: 'text-gray-800',
      },
      false: {
        indicatorWrapper: 'text-gray-200 hover:text-gray-400',
        indicatorIcon: 'text-current',
      },
    },
    disabled: {
      true: {
        item: 'opacity-50 cursor-not-allowed',
      },
      false: {
        item: 'hover:opacity-80',
      },
    },
  },
});

export type RadioVariants = VariantProps<typeof radio>;
