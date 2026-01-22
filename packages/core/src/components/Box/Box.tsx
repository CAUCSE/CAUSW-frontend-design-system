import React, { type ElementType } from 'react';
import { box, type BoxVariants } from './Box.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type BoxProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  BoxVariants
>;

export const Box = <E extends ElementType = 'div'>({
  as,
  padding,
  radius,
  display,
  background,
  className = '',
  children,
  ...props
}: BoxProps<E>) => {
  const Component = as || 'div';

  const classes = box({ padding, radius, display, background });

  return React.createElement(
    Component,
    {
      className: mergeStyles(classes, className),
      ...props,
    },
    children,
  );
};

Box.displayName = 'Box';
