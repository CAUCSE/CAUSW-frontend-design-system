import { tv, type VariantProps } from 'tailwind-variants';

export const textInput = tv({
  slots: {
    root: 'flex items-center gap-2 self-stretch transition-all duration-200 ease-in-out',
    input:
      'w-full bg-transparent outline-none placeholder:text-gray-400 caret-gray-600',
    leftIcon: 'flex-shrink-0 text-gray-400',
    rightIcon: 'flex-shrink-0 text-gray-400',
  },
  variants: {
    variant: {
      default: {
        root: 'rounded-md bg-white p-4 focus-within:ring-2 focus-within:ring-gray-600',
      },
      underline: {
        root: 'border-b border-gray-400 bg-transparent px-0 py-2 focus-within:border-gray-600',
      },
    },
    error: {
      true: {},
      false: {},
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed opacity-50',
        input: 'cursor-not-allowed',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      error: true,
      class: {
        root: 'ring-2 ring-red-400 focus-within:ring-red-400',
      },
    },
    {
      variant: 'underline',
      error: true,
      class: {
        root: 'border-red-400 focus-within:border-red-400',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    error: false,
    disabled: false,
  },
});

export type TextInputVariants = VariantProps<typeof textInput>;
