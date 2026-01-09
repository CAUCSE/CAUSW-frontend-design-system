import React, { type ElementType } from 'react';
import { flexStyles, type FlexStylesOptions } from './Flex.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type FlexBaseProps = FlexStylesOptions;

export type FlexProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  FlexBaseProps
>;

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
