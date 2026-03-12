import React, { type ElementType } from 'react';
import { Stack, type StackProps } from '../Stack';

export type HStackProps<E extends ElementType = 'div'> = StackProps<E> & {
  direction?: never;
};

export const HStack = <E extends ElementType = 'div'>({
  ...props
}: HStackProps<E>) => {
  return <Stack {...props} direction="horizontal" />;
};

HStack.displayName = 'HStack';
