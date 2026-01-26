import React, { type ElementType } from 'react';
import { grid, type GridVariants } from './Grid.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type GridProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  GridVariants
>;

export const Grid = <E extends ElementType = 'div'>({
  as,
  columns,
  rows,
  gap,
  flow,
  className = '',
  children,
  ...props
}: GridProps<E>) => {
  const Component = as || 'div';
  const classes = grid({ columns, rows, gap, flow });

  return React.createElement(
    Component,
    {
      className: mergeStyles(classes, className),
      ...props,
    },
    children,
  );
};

Grid.displayName = 'Grid';
