import React, { type ElementType } from 'react';
import { flexStyles, type FlexStylesOptions } from './Flex.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

// ✅ ESLint fix: Use type alias instead of empty interface extension
export type FlexBaseProps = FlexStylesOptions;

export type FlexProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  FlexBaseProps
>;

/**
 * Flex is a layout component that provides a shorthand for Flexbox properties.
 * It is similar to Stack but offers more granular control over wrapping and direction.
 */
export const Flex = <E extends ElementType = 'div'>({
  as,
  direction,
  gap,
  align,
  justify,
  wrap,
  className = '',
  children,
  ...props
}: FlexProps<E>) => {
  const Component = as || 'div';

  const classes = flexStyles({ direction, gap, align, justify, wrap });

  return React.createElement(
    Component,
    {
      className: mergeStyles(classes, className),
      ...props,
    },
    children,
  );
};

Flex.displayName = 'Flex';
