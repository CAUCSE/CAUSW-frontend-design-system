import { tv, VariantProps } from 'tailwind-variants';

export const checkbox = tv({
  slots: {
    root: 'inline-flex cursor-pointer items-center gap-2',
    indicator:
      'flex aspect-square h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded border-2 transition-colors',
    indicatorIcon: 'h-2.5 w-2.5 transition-opacity duration-200',
    label: '',
  },
  variants: {
    checked: {
      true: {
        indicator: 'border-gray-800 bg-gray-800',
        indicatorIcon: 'text-white opacity-100',
      },
      false: {
        indicator: 'border-gray-200 bg-white',
        indicatorIcon: 'opacity-0',
      },
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed opacity-50',
        label: 'text-gray-600',
      },
    },
  },
});

export type CheckboxVariants = VariantProps<typeof checkbox>;
