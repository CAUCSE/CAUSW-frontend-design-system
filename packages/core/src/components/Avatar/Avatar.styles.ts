import { tv, type VariantProps } from 'tailwind-variants';

export const avatar = tv({
  slots: {
    root: 'inline-flex items-center justify-center overflow-hidden bg-gray-100 text-gray-600',
    image: 'h-full w-full object-cover',
    fallback:
      'flex h-full w-full items-center justify-center select-none font-semibold',
  },
  variants: {
    size: {
      xs: {
        root: 'h-9 w-9 rounded-md',
      },
      sm: {
        root: 'h-10 w-10 rounded-md',
      },
      md: {
        root: 'h-11 w-11 rounded-md',
      },
      lg: {
        root: 'h-15 w-15 rounded-lg',
      },
      xl: {
        root: 'h-20 w-20 rounded-2xl',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type AvatarVariants = VariantProps<typeof avatar>;
