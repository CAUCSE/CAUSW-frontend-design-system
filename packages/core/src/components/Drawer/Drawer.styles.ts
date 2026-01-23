import { tv, type VariantProps } from 'tailwind-variants';

export const drawer = tv({
  slots: {
    overlay: [
      'fixed inset-0 z-50',
      'data-[state=open]:animate-overlay-show',
      'data-[state=closed]:animate-overlay-hide',
    ],
    content: [
      'fixed z-50 w-full',
      'data-[state=open]:animate-content-show',
      'data-[state=closed]:animate-content-hide',
    ],
  },
  variants: {
    position: {
      bottom: {
        content: 'bottom-0',
      },
    },
  },
  defaultVariants: {
    position: 'bottom',
  },
});

export type DrawerVariants = VariantProps<typeof drawer>;
