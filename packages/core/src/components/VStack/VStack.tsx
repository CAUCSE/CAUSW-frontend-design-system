import React, { type ElementType } from 'react';
import { Stack, type StackProps } from '../Stack';

export type VStackProps<E extends ElementType = 'div'> = StackProps<E> & {
  direction?: never;
};

export const VStack = <E extends ElementType = 'div'>({
  ...props
}: VStackProps<E>) => {
  return <Stack {...props} direction="vertical" />;
};

VStack.displayName = 'VStack';
