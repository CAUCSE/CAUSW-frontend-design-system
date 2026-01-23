import { tv, type VariantProps } from 'tailwind-variants';

export const floatingActionButton = tv({
  base: 'inline-flex items-center justify-center bg-gray-100 border border-gray-200 text-gray-500 typo-subtitle-16-bold h-[2.875rem] px-[1rem] py-[0.625rem] rounded-[6.1875rem] select-none whitespace-nowrap transition-colors enabled:hover:bg-gray-200 enabled:hover:border-gray-300 enabled:active:bg-gray-200 enabled:active:border-gray-300 enabled:data-[active]:bg-gray-200 enabled:data-[active]:border-gray-300',
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export type FloatingActionButtonVariants = VariantProps<
  typeof floatingActionButton
>;
