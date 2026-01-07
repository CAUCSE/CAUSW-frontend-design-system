import React, { type ElementType } from 'react';
import { boxStyles, type BoxStylesOptions } from './Box.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

// ✅ ESLint fix: Use type alias instead of empty interface extension
export type BoxBaseProps = BoxStylesOptions;

export type BoxProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  BoxBaseProps
>;

/**
 * Box is a fundamental layout component that handles padding, margin, display, and background styles.
 * It supports polymorphic rendering via the `as` prop.
 */
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
