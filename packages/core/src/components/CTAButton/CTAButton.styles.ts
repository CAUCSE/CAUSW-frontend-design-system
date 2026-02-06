import { tv, type VariantProps } from 'tailwind-variants';

export const ctaButton = tv({
  base: 'inline-flex items-center justify-center h-[3.375rem] px-[0.5rem] py-[0.875rem] rounded-[0.75rem] typo-body-15-semibold whitespace-nowrap select-none transition-colors',
  variants: {
    color: {
      blue: 'bg-blue-100 text-blue-700 enabled:hover:bg-blue-200 enabled:active:bg-blue-200 enabled:data-[active]:bg-blue-200',
      red: 'bg-red-400 text-white enabled:hover:bg-red-500 enabled:active:bg-red-500 enabled:data-[active]:bg-red-500',
      dark: 'bg-gray-700 text-white enabled:hover:text-gray-300 enabled:hover:bg-gray-800 enabled:active:bg-gray-800 enabled:data-[active]:bg-gray-800',
      light:
        'bg-gray-100 text-gray-500 enabled:hover:bg-gray-200 enabled:active:bg-gray-200 enabled:data-[active]:bg-gray-200',
      white:
        'bg-white text-gray-500 enabled:hover:bg-gray-100 enabled:active:bg-gray-100 enabled:data-[active]:bg-gray-100',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-[18rem]',
    },
    disabled: {
      true: 'bg-gray-200 text-gray-300 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    color: 'light',
    fullWidth: false,
    disabled: false,
  },
});

export type CTAButtonVariants = VariantProps<typeof ctaButton>;
