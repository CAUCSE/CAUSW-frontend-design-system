import { tv } from 'tailwind-variants';

export const field = tv({
  slots: {
    root: 'flex flex-col gap-2',
    label: 'px-1',
    description: '',
    error: '',
  },
});
