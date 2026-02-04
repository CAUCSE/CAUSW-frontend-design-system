import * as React from 'react';
import {
  skeleton,
  skeletonSizeStyles,
  type SkeletonVariants,
  type SkeletonSizeOptions,
} from './Skeleton.styles';
import { mergeStyles } from '../../utils';

export interface SkeletonProps
  extends React.ComponentProps<'div'>, SkeletonVariants, SkeletonSizeOptions {}

export const Skeleton = ({
  radius,
  tone,
  width = '100%',
  height = '1rem',
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  style,
  className,
  ...rest
}: SkeletonProps) => {
  return (
    <div
      role="status"
      aria-busy="true"
      className={mergeStyles(skeleton({ radius, tone }), className)}
      style={{
        ...skeletonSizeStyles({
          width,
          height,
          minWidth,
          maxWidth,
          minHeight,
          maxHeight,
        }),
        ...style,
      }}
      {...rest}
    />
  );
};

Skeleton.displayName = 'Skeleton';
