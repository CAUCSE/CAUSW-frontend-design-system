import React, { type ElementType } from 'react';
import { Stack, type StackProps } from '../Stack';

// ✅ StackProps에서 'direction'만 뺀 타입을 정의 (항상 horizontal 이니까)
export type HStackProps<E extends ElementType = 'div'> = Omit<
  StackProps<E>,
  'direction'
>;

/**
 * HStack is a shorthand for a horizontal Stack.
 * It aligns items in a row by default.
 */
export const HStack = <E extends ElementType = 'div'>({
  ...props
}: HStackProps<E>) => {
  // ✅ direction을 'horizontal'로 고정해서 Stack에게 전달
  return <Stack<E> direction="horizontal" {...(props as StackProps<E>)} />;
};

HStack.displayName = 'HStack';
