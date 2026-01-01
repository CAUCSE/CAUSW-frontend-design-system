import React from 'react';
import { textStyles } from './Text.styles';
import type {
  TextVariant,
  TextSize,
  FixedSize,
  TextColor,
} from './Text.styles';
import { mergeStyles } from '../../utils';

export type { TextVariant, TextSize, FixedSize, TextColor };

type BaseTextProps = React.HTMLAttributes<HTMLElement> & {
  point?: boolean;
  color?: TextColor;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label';
  children: React.ReactNode;
};

type ResponsiveTextProps = {
  variant?: Exclude<TextVariant, 'fixed'>;
  size?: TextSize;
  fixedSize?: never;
};

type FixedTextProps = {
  variant: 'fixed';
  size?: never;
  fixedSize: FixedSize;
};

export type TextProps = BaseTextProps & (ResponsiveTextProps | FixedTextProps);

export const Text = ({
  variant = 'body',
  size = 'sm',
  fixedSize,
  point = false,
  color = 'gray-700',
  as: Component = 'span',
  children,
  className = '',
  ...props
}: TextProps) => {
  const classes = textStyles({
    variant,
    size: size as TextSize,
    fixedSize,
    point,
    color,
  });

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
