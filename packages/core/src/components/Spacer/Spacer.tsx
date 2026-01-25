import React, { type ElementType } from 'react';
import { spacer, type SpacerVariants } from './Spacer.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type SpacerProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  SpacerVariants
>;

export const Spacer = <E extends ElementType = 'div'>({
  as,
  size,
  className = '',
  ...props
}: SpacerProps<E>) => {
  const Component = as || 'div';
  const classes = spacer({ size });

  return React.createElement(Component, {
    'aria-hidden': 'true',
    className: mergeStyles(classes, className),
    ...props,
  });
};

Spacer.displayName = 'Spacer';
