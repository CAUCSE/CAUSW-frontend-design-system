import { tv, type VariantProps } from 'tailwind-variants';

export const skeleton = tv({
  base: [
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'animate-skeleton-pulse',
  ],

  variants: {
    radius: {
      '0': 'rounded-none',
      '8': 'rounded-[8px]',
      '16': 'rounded-[16px]',
      full: 'rounded-full',
    },

    tone: {
      neutral: 'bg-gray-200',
      magic: 'bg-purple-100',
    },
  },

  defaultVariants: {
    radius: '8',
    tone: 'neutral',
  },
});

export type SkeletonVariants = VariantProps<typeof skeleton>;
