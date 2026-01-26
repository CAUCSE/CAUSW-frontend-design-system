import { tv, type VariantProps } from 'tailwind-variants';

export const separator = tv({
  base: 'bg-gray-200',
  variants: {
    orientation: {
      horizontal: 'h-px w-full my-2',
      vertical: 'h-full w-px mx-2 self-stretch',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export type SeparatorVariants = VariantProps<typeof separator>;
