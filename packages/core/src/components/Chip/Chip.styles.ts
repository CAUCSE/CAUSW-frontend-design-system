import { tv, type VariantProps } from 'tailwind-variants';

export const chip = tv({
  base: 'inline-flex items-center rounded-[12px] select-none whitespace-nowrap transition-colors gap-2',
  variants: {
    color: {
      white: 'bg-white text-gray-700',
      lightgray: 'bg-[#F5F6F8] text-gray-500',
      darkgray: 'bg-[#364153] text-white',
    },
    size: {
      sm: 'px-2 py-1 typo-body-14-semibold',
      md: 'px-[0.75rem] py-[0.375rem] typo-body-15-medium',
    },
    disabled: {
      true: 'pointer-events-none',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'white',
    disabled: false,
  },
});

export type ChipVariants = VariantProps<typeof chip>;
