import { text } from './Text.styles';
import type { TextVariants } from './Text.styles';
import type { PolymorphicProps } from '../../utils/polymorphic';
import { createElement } from 'react';

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

export type TextProps<E extends TextElement> = PolymorphicProps<
  E,
  TextVariants
>;

export const Text = <E extends TextElement = 'span'>({
  children,
  typography = 'body-16-regular',
  textColor = 'gray-700',
  align,
  as,
  className,
  ...props
}: TextProps<E>) => {
  const Component = as || 'span';
  const styles = text({
    typography,
    align,
    textColor,
    className,
  });

  return createElement(
    Component,
    {
      className: styles,
      ...props,
    },
    children,
  );
};

Text.displayName = 'Text';
