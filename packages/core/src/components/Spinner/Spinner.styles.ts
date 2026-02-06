import { tv, type VariantProps } from 'tailwind-variants';

export const spinner = tv({
  base: 'animate-spin',
  variants: {
    color: {
      primary: 'text-blue-400',
      white: 'text-white',
      gray: 'text-gray-400',
      black: 'text-gray-900',
    },
    size: {
      xs: 'w-3.5 h-3.5', // 14px
      sm: 'w-4 h-4', // 16px
      md: 'w-6 h-6', // 24px
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
    },
    speed: {
      normal: '[animation-duration:1s]',
      fast: '[animation-duration:0.5s]', // 2배 빠름
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    speed: 'normal',
  },
});

export type SpinnerVariants = VariantProps<typeof spinner>;
