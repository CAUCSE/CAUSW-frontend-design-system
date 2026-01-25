import { tv, type VariantProps } from 'tailwind-variants';

export const toast = tv({
  base: [
    'group pointer-events-auto relative flex items-center justify-center overflow-hidden text-center transition-all',
    'data-[state=open]:animate-toast-slide-in',
    'data-[state=closed]:animate-toast-hide',
  ],
  variants: {
    variant: {
      default:
        'w-[20rem] md:w-[26.25rem] max-w-[calc(100vw-2rem)] rounded-md bg-gray-700 px-4 py-3',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type ToastVariants = VariantProps<typeof toast>;
