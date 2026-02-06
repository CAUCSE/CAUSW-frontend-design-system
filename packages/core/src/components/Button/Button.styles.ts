import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv({
  base: 'inline-flex items-center justify-center gap-[0.375rem] whitespace-nowrap rounded-[0.5rem] transition-colors duration-150 cursor-pointer',
  variants: {
    size: {
      sm: 'min-w-[3rem] h-[1.875rem] px-[0.5rem] typo-body-14-semibold',
      md: 'h-[2.375rem] px-[0.75rem] typo-body-14-semibold',
    },
    color: {
      white:
        'bg-white text-gray-400 enabled:hover:bg-gray-100 enabled:active:bg-gray-100 enabled:data-[active]:bg-gray-100',
      gray: 'bg-gray-100 text-gray-400 enabled:hover:bg-gray-200 enabled:active:bg-gray-200 enabled:data-[active]:bg-gray-200',
      red: 'bg-red-100 text-red-400 enabled:hover:bg-red-200 enabled:active:bg-red-200 enabled:data-[active]:bg-red-200',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
    disabled: {
      true: 'bg-gray-100 text-gray-400 opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    disabled: false,
    color: 'gray',
    fullWidth: false,
  },
});

export type ButtonVariants = VariantProps<typeof button>;
