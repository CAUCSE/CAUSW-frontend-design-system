import { tv, VariantProps } from 'tailwind-variants';

export const drawerOverlay = tv({
  base: [
    'fixed inset-0 z-50',
    'data-[state=open]:animate-overlay-show',
    'data-[state=closed]:animate-overlay-hide',
  ],
});

export const drawerContent = tv({
  base: [
    'fixed z-50 w-full',
    'data-[state=open]:animate-content-show',
    'data-[state=closed]:animate-content-hide',
  ],
  variants: {
    position: {
      bottom: 'bottom-0',
    },
  },
  defaultVariants: {
    position: 'bottom',
  },
});

export type DrawerOverlayVariants = VariantProps<typeof drawerOverlay>;
export type DrawerContentVariants = VariantProps<typeof drawerContent>;
