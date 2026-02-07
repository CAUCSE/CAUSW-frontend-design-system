import { tv, type VariantProps } from 'tailwind-variants';

export const datePicker = tv({
  slots: {
    trigger:
      'flex w-full cursor-pointer items-center justify-between gap-2 rounded-md bg-gray-100 px-[1rem] py-[0.9375rem] text-left transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600',
    text: 'typo-body-16-regular',
    icon: 'flex-shrink-0',
    content: 'divide-y-0 p-0',
  },
  variants: {
    hasValue: {
      true: {
        text: 'text-gray-700',
      },
      false: {
        text: 'text-gray-400',
      },
    },
    error: {
      true: {
        trigger: 'ring-2 ring-red-400 focus:ring-red-400',
      },
      false: {},
    },
    disabled: {
      true: {
        trigger: 'cursor-not-allowed opacity-50',
      },
      false: {},
    },
  },
  defaultVariants: {
    hasValue: false,
    error: false,
    disabled: false,
  },
});

export type DatePickerVariants = VariantProps<typeof datePicker>;
