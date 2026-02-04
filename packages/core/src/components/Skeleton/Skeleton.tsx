import * as React from 'react';
import { skeleton, type SkeletonVariants } from './Skeleton.styles';
import { convertPxToRem, mergeStyles } from '../../utils';

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
}: SkeletonSizeOptions) => {
  return {
    width: typeof width === 'number' ? convertPxToRem(width) : width,
    height: typeof height === 'number' ? convertPxToRem(height) : height,
    minWidth: minWidth ? convertPxToRem(minWidth) : undefined,
    maxWidth: maxWidth ? convertPxToRem(maxWidth) : undefined,
    minHeight: minHeight ? convertPxToRem(minHeight) : undefined,
    maxHeight: maxHeight ? convertPxToRem(maxHeight) : undefined,
  };
};

export interface SkeletonProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    SkeletonVariants,
    SkeletonSizeOptions {}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      radius,
      tone,
      width = '100%',
      height = '1rem',
      style,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-busy="true"
        className={mergeStyles(skeleton({ radius, tone }), className)}
        style={{
          ...skeletonSizeStyles({ width, height, ...props }),
          ...style,
        }}
      />
    );
  },
);

Skeleton.displayName = 'Skeleton';
