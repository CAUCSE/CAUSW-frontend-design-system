import { tv } from 'tailwind-variants';

export const avatar = tv({
  slots: {
    root: 'inline-flex items-center justify-center overflow-hidden bg-gray-100 text-gray-600',
    image: 'h-full w-full object-cover',
    fallback:
      'flex h-full w-full items-center justify-center select-none font-semibold',
  },
});

export interface AvatarSizeProps {
  size?: number;
}
