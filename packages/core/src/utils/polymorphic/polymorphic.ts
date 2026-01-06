import React from 'react';

/**
 * Polymorphic component props (includes ref)
 *
 * @example
 * ```tsx
 * type ButtonProps<E extends React.ElementType = 'button'> =
 *   PolymorphicProps<E, { variant?: 'primary' | 'secondary' }>;
 * ```
 */
export type PolymorphicProps<
  E extends React.ElementType = 'div',
  Props = object,
> = Props & { as?: E } & Omit<React.ComponentProps<E>, keyof Props | 'as'>;

/**
 * Polymorphic component props without ref
 */
export type PolymorphicPropsWithoutRef<
  E extends React.ElementType = 'div',
  Props = object,
> = Props & { as?: E } & Omit<
    React.ComponentPropsWithoutRef<E>,
    keyof Props | 'as'
  >;
