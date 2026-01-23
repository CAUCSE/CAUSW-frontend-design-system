import React, { type ElementType } from 'react';
import {
  float,
  type FloatStylesOptions,
  floatPositionStyles,
} from './Float.styles';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type FloatProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  FloatStylesOptions
>;

export const Float = <E extends ElementType = 'div'>({
  as,
  floatType = 'absolute',
  zIndex = 'sticky',
  top,
  bottom,
  left,
  right,
  className,
  style,
  children,
  ...props
}: FloatProps<E>) => {
  const Component = as || 'div';

  const classes = float({ floatType, zIndex, className });
  const positionStyles = floatPositionStyles({ top, bottom, left, right });

  return React.createElement(
    Component,
    {
      className: classes,
      style: { ...positionStyles, ...style },
      ...props,
    },
    children,
  );
};

Float.displayName = 'Float';
