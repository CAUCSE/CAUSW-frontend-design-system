import React, { type ElementType } from 'react';
import { separator, type SeparatorVariants } from './Separator.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type SeparatorProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  SeparatorVariants
>;

export const Separator = <E extends ElementType = 'div'>({
  as,
  orientation = 'horizontal',
  className = '',
  ...props
}: SeparatorProps<E>) => {
  const Component = as || 'div';
  const classes = separator({ orientation });

  return React.createElement(Component, {
    role: 'separator',
    'aria-orientation': orientation,
    className: mergeStyles(classes, className),
    ...props,
  });
};

Separator.displayName = 'Separator';
