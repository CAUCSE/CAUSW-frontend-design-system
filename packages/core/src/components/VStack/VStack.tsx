import React, { type ElementType } from 'react';
import { Stack, type StackProps } from '../Stack';

export type VStackProps<E extends ElementType = 'div'> = Omit<
  StackProps<E>,
  'direction'
>;

export const VStack = <E extends ElementType = 'div'>({
  ...props
}: VStackProps<E>) => {
  return <Stack<E> direction="vertical" {...(props as StackProps<E>)} />;
};

VStack.displayName = 'VStack';
