import React from 'react';
import { textStyles } from './Text.styles';
import type { Typography, TextColor, TextAlign } from './Text.styles';
import { mergeStyles } from '../../utils';
import type { PolymorphicProps } from '../../utils/polymorphic';

export type { Typography, TextColor, TextAlign };

/** Text element types that can be used with as prop */
export type TextElement =
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'label'
  | 'a';

/** Base text styling props - reusable for other components */
export interface TextStyleProps {
  /** Typography preset - format: {variant}-{size}[-point] */
  typography?: Typography;
  /** Text color */
  textColor?: TextColor;
  /** Text alignment */
  align?: TextAlign;
}

/** Full Text component props with polymorphic support */
export type TextProps<E extends TextElement = 'span'> = PolymorphicProps<
  E,
  TextStyleProps
>;

export const Text = <E extends TextElement = 'span'>({
  typography = 'body-sm',
  textColor = 'gray-700',
  align,
  as,
  children,
  className = '',
  ...props
}: TextProps<E>) => {
  const Component = as || 'span';
  const classes = textStyles({ typography, textColor, align });

  return React.createElement(
    Component,
    {
      className: mergeStyles(classes, className),
      ...props,
    },
    children,
  );
};

Text.displayName = 'Text';
