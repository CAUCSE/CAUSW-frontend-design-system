import { tv, type VariantProps } from 'tailwind-variants';

export const spacer = tv({
  base: 'flex-none',
  variants: {
    size: {
      1: 'w-1 h-1',
      2: 'w-2 h-2',
      4: 'w-4 h-4',
      6: 'w-6 h-6',
      8: 'w-8 h-8',
      10: 'w-10 h-10',
      12: 'w-12 h-12',
      16: 'w-16 h-16',
      20: 'w-20 h-20',
      24: 'w-24 h-24',
      auto: 'flex-1',
    },
  },
  defaultVariants: {
    size: 'auto',
  },
});

export type SpacerVariants = VariantProps<typeof spacer>;
