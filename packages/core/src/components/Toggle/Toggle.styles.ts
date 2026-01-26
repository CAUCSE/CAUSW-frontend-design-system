import { tv, type VariantProps } from 'tailwind-variants';

export const toggle = tv({
  slots: {
    root: 'inline-flex w-full cursor-pointer items-center gap-2',
    switch:
      'relative inline-flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out h-7 w-12', // 48px x 28px
    switchThumb:
      'pointer-events-none inline-block rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out h-5 w-5', // 20px
    label: '',
  },
  variants: {
    checked: {
      true: {
        switch: 'bg-gray-600',
        switchThumb: 'translate-x-5',
      },
      false: {
        switch: 'bg-gray-200',
        switchThumb: 'translate-x-0',
      },
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed opacity-50',
        label: 'text-gray-400',
      },
    },
  },
});

export type ToggleVariants = VariantProps<typeof toggle>;
