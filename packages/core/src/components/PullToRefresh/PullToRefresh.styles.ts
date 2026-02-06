import { tv, type VariantProps } from 'tailwind-variants';

export const pullToRefresh = tv({
  slots: {
    wrapper:
      'relative w-full h-full overflow-y-auto overscroll-y-none touch-pan-y',
    loaderContainer:
      'absolute top-0 left-0 w-full flex justify-center items-center pointer-events-none z-10',
    content:
      'relative w-full transition-transform duration-200 ease-out will-change-transform',
  },
});

export type PullToRefreshVariants = VariantProps<typeof pullToRefresh>;
