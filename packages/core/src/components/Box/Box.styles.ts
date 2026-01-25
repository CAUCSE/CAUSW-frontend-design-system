import { tv, type VariantProps } from 'tailwind-variants';

export const box = tv({
  variants: {
    padding: {
      none: 'p-0',
      xs: 'p-1',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
    },
    radius: {
      none: 'rounded-none',
      xs: 'rounded-sm',
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    },
    display: {
      block: 'block',
      flex: 'flex',
      grid: 'grid',
      'inline-block': 'inline-block',
      'inline-flex': 'inline-flex',
      none: 'hidden',
    },
    background: {
      default: '',
      subtle: 'bg-gray-50',
      inverse: 'bg-gray-900 text-white',
      transparent: 'bg-transparent',
    },
  },
  defaultVariants: {
    padding: 'none',
    radius: 'none',
    display: 'block',
    background: 'default',
  },
});

export type BoxVariants = VariantProps<typeof box>;
