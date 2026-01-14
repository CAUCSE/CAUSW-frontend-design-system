import React, { type ElementType } from 'react';
import { spacerStyles, type SpacerStylesOptions } from './Spacer.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type SpacerBaseProps = SpacerStylesOptions;

export type SpacerProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  SpacerBaseProps
>;

export const Spacer = <E extends ElementType = 'div'>({
  as,
  size,
  className = '',
  ...props
}: SpacerProps<E>) => {
  const Component = as || 'div';
  const classes = spacerStyles({ size });

  return React.createElement(Component, {
    'aria-hidden': 'true',
    className: mergeStyles(classes, className),
    ...props,
  });
};

Spacer.displayName = 'Spacer';
