import React, { type ElementType } from 'react';
import { boxStyles, type BoxStylesOptions } from './Box.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type BoxBaseProps = BoxStylesOptions;

export type BoxProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  BoxBaseProps
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

  const classes = boxStyles({ padding, radius, display, background });

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
