import React from 'react';
import { textStyles } from './Text.styles';
import type { Typography, TextColor } from './Text.styles';
import { mergeStyles } from '../../utils';

export type { Typography, TextColor };

export type TextProps = React.HTMLAttributes<HTMLElement> & {
  /** Typography preset - format: {variant}-{size}[-point] */
  typography?: Typography;
  /** Text color */
  textColor?: TextColor;
  /** HTML element to render */
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label';
  /** Content */
  children: React.ReactNode;
};

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
