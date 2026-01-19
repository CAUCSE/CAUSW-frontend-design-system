import { tv, type VariantProps } from 'tailwind-variants';

export const textArea = tv({
  slots: {
    root: 'bg-white rounded-md p-4 focus-within:ring-2 focus-within:ring-gray-600',
    input:
      'w-full min-w-0 min-h-10 bg-transparent outline-none typo-body-16-regular text-gray-700 placeholder:text-gray-400 caret-gray-600',
    footer: 'mt-2',
  },
  variants: {
    disabled: {
      true: {
        root: 'cursor-not-allowed opacity-50',
        input: 'cursor-not-allowed',
      },
    },
    error: {
      true: {
        root: 'ring-2 ring-red-400 focus-within:ring-red-400',
      },
      false: {},
    },
    resize: {
      true: {
        input: 'resize-y',
      },
      false: {
        input: 'resize-none',
      },
    },
  },
  defaultVariants: {
    disabled: false,
    error: false,
    resize: true,
  },
});

export type TextAreaVariants = VariantProps<typeof textArea>;
