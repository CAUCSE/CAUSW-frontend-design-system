import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv({
  base: 'inline-flex items-center justify-center gap-[0.375rem] whitespace-nowrap rounded-[0.5rem] transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    size: {
      sm: 'min-w-[3rem] h-[1.875rem] px-[0.5rem] typo-body-14-semibold',
      md: 'h-[2.375rem] px-[0.75rem] typo-body-14-semibold',
    },
    color: {
      white: 'bg-white text-gray-400 hover:bg-gray-100',
      gray: 'bg-gray-100 text-gray-400 hover:bg-gray-200',
      red: 'bg-red-100 text-red-400 hover:bg-red-200',
    },
    active: {
      true: '',
      false: '',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
    disabled: {
      true: 'cursor-not-allowed pointer-events-none',
      false: 'cursor-pointer',
    },
  },
  compoundVariants: [
    {
      color: 'white',
      active: true,
      class: 'bg-white text-gray-400 hover:bg-gray-200',
    },
    {
      color: 'gray',
      active: true,
      class: 'bg-gray-100 text-gray-400 hover:bg-gray-200',
    },
    {
      color: 'red',
      active: true,
      class: 'bg-red-100 text-red-400 hover:bg-red-200',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'gray',
    active: false,
    fullWidth: false,
    disabled: false,
  },
});

export type ButtonVariants = VariantProps<typeof button>;
