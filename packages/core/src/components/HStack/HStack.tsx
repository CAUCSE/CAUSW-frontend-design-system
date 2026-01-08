import React, { type ElementType } from 'react';
import { Stack, type StackProps } from '../Stack';

export type HStackProps<E extends ElementType = 'div'> = Omit<
  StackProps<E>,
  'direction'
>;

export const HStack = <E extends ElementType = 'div'>({
  ...props
}: HStackProps<E>) => {
  return <Stack<E> direction="horizontal" {...(props as StackProps<E>)} />;
};

HStack.displayName = 'HStack';
