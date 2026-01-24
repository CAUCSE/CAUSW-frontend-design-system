import { tv, type VariantProps } from 'tailwind-variants';

export const toast = tv({
  slots: {
    root: [
      'group pointer-events-auto relative flex items-center justify-center overflow-hidden text-center transition-all',
      'data-[state=open]:animate-toast-slide-in',
      'data-[state=closed]:animate-toast-hide',
      'w-[20rem] md:w-[26.25rem] lg:w-[20rem] max-w-[calc(100vw-2rem)] rounded-md px-4 py-3',
    ],
    viewport: [
      'fixed bottom-20.5 left-1/2 z-[100] flex max-h-screen w-full -translate-x-1/2 flex-col-reverse items-center xl:bottom-14',
    ],
  },
  variants: {
    variant: {
      default: {
        root: 'bg-gray-700',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type ToastVariants = VariantProps<typeof toast>;
