import { tv, type VariantProps } from 'tailwind-variants';
import { convertPxToRem } from '../../utils';

export const skeleton = tv({
  base: ['relative', 'overflow-hidden', 'animate-skeleton-pulse'],

  variants: {
    radius: {
      '0': 'rounded-none',
      '8': 'rounded-[8px]',
      '16': 'rounded-[16px]',
      full: 'rounded-full',
    },

    tone: {
      neutral: 'bg-gray-200',
      magic: 'bg-purple-100',
    },
  },

  defaultVariants: {
    radius: '8',
    tone: 'neutral',
  },
});

export type SkeletonVariants = VariantProps<typeof skeleton>;

export interface SkeletonSizeOptions {
  width?: number | string;
  height?: number | string;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}

export const skeletonSizeStyles = ({
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
}: SkeletonSizeOptions) => ({
  width: typeof width === 'number' ? convertPxToRem(width) : width,
  height: typeof height === 'number' ? convertPxToRem(height) : height,
  minWidth: minWidth ? convertPxToRem(minWidth) : undefined,
  maxWidth: maxWidth ? convertPxToRem(maxWidth) : undefined,
  minHeight: minHeight ? convertPxToRem(minHeight) : undefined,
  maxHeight: maxHeight ? convertPxToRem(maxHeight) : undefined,
});
