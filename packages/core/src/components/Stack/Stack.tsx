import React, { type ElementType } from 'react';
import { stack, type StackVariants } from './Stack.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type StackProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  StackVariants
>;

/**
 * Stack is a layout component that arranges its children in a horizontal or vertical line.
 * It abstracts Flexbox behaviors to easily manage spacing, alignment, and direction.
 */
export const Stack = <E extends ElementType = 'div'>({
  as,
  direction,
  gap,
  align,
  justify,
  className = '',
  children,
  ...props
}: StackProps<E>) => {
  const Component = as || 'div';

  const classes = stack({ direction, gap, align, justify });

  return React.createElement(
    Component,
    {
      className: mergeStyles(classes, className),
      ...props,
    },
    children,
  );
};

Stack.displayName = 'Stack';
