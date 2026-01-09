import React, { type ElementType } from 'react';
import {
  separatorStyles,
  type SeparatorStylesOptions,
} from './Separator.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type SeparatorBaseProps = SeparatorStylesOptions;

export type SeparatorProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  SeparatorBaseProps
>;

export const Separator = <E extends ElementType = 'div'>({
  as,
  orientation = 'horizontal',
  className = '',
  ...props
}: SeparatorProps<E>) => {
  const Component = as || 'div';
  const classes = separatorStyles({ orientation });

  return React.createElement(Component, {
    role: 'separator',
    'aria-orientation': orientation,
    className: mergeStyles(classes, className),
    ...props,
  });
};

Separator.displayName = 'Separator';
