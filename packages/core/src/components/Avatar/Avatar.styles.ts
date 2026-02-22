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
      '36': { root: 'h-9 w-9 rounded-md' },
      '40': { root: 'h-10 w-10 rounded-md' },
      '44': { root: 'h-11 w-11 rounded-md' },
      '64': { root: 'h-16 w-16 rounded-lg' },
      '80': { root: 'h-20 w-20 rounded-lg' },
      '88': { root: 'h-22 w-22 rounded-xl' },
      '120': { root: 'h-30 w-30 rounded-2xl' },
    },
  },
  defaultVariants: {
    size: '44',
  },
});

export type AvatarVariants = VariantProps<typeof avatar>;
