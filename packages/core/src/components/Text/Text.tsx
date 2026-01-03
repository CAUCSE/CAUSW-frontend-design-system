import React from 'react';
import { textStyles } from './Text.styles';
import type { Typography, TextColor } from './Text.styles';
import { mergeStyles } from '../../utils';

export type { Typography, TextColor };

/** Base text styling props - reusable for other components */
export interface TextStyleProps {
  /** Typography preset - format: {variant}-{size}[-point] */
  typography?: Typography;
  /** Text color */
  textColor?: TextColor;
  /** HTML element to render */
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label';
}

/** Full Text component props */
export interface TextProps
  extends React.HTMLAttributes<HTMLElement>, TextStyleProps {}

export const Text = ({
  typography = 'body-sm',
  textColor = 'gray-700',
  as: Component = 'span',
  children,
  className = '',
  ...props
}: TextProps) => {
  const classes = textStyles({ typography, textColor });

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
