import { tv, type VariantProps } from 'tailwind-variants';

export const ctaButton = tv({
  base: 'inline-flex items-center justify-center h-[3.375rem] p-[0.5rem] rounded-[0.75rem] typo-body-15-semibold whitespace-nowrap select-none transition-colors',
  variants: {
    color: {
      blue: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
      red: 'bg-red-400 hover:bg-red-500 text-white',
      dark: 'bg-gray-700 hover:bg-gray-800 text-white hover:text-gray-300',
      light: 'bg-gray-100 hover:bg-gray-200 text-gray-500',
      white: 'bg-white hover:bg-gray-100 text-gray-500',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-[18rem]',
    },
    disabled: {
      true: 'bg-gray-200 text-gray-300 cursor-not-allowed hover:bg-gray-200 hover:text-gray-300',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    color: 'light',
    fullWidth: false,
    disabled: false,
  },
});

export type CTAButtonVariants = VariantProps<typeof ctaButton>;
