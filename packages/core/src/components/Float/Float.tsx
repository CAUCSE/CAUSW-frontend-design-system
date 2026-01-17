import React, { type ElementType } from 'react';
import {
  floatStyles,
  type FloatStylesOptions,
  floatPositionStyles,
} from './Float.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type FloatBaseProps = FloatStylesOptions;

export type FloatProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  FloatBaseProps
>;

export const Float = <E extends ElementType = 'div'>({
  as,
  position,
  zIndex,
  top,
  bottom,
  left,
  right,
  className = '',
  style,
  children,
  ...props
}: FloatProps<E> & {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
}) => {
  const Component = as || 'div';

  const classes = floatStyles({ position, zIndex });
  const positionStyles = floatPositionStyles({ top, bottom, left, right });

  return React.createElement(
    Component,
    {
      className: mergeStyles(classes, className),
      style: { ...positionStyles, ...style },
      ...props,
    },
    children,
  );
};

Float.displayName = 'Float';
