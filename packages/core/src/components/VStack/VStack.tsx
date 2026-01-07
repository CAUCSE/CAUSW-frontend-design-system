import React, { type ElementType } from 'react';
import { Stack, type StackProps } from '../Stack';

// ✅ StackProps에서 'direction'만 뺀 타입을 정의 (항상 vertical 이니까)
export type VStackProps<E extends ElementType = 'div'> = Omit<
  StackProps<E>,
  'direction'
>;

/**
 * VStack is a shorthand for a vertical Stack.
 * It aligns items in a column by default.
 */
export const VStack = <E extends ElementType = 'div'>({
  ...props
}: VStackProps<E>) => {
  // ✅ direction을 'vertical'로 고정해서 Stack에게 전달
  return <Stack<E> direction="vertical" {...(props as StackProps<E>)} />;
};

VStack.displayName = 'VStack';
