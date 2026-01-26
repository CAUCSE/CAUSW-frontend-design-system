import { ComponentProps } from 'react';
import {
  floatingActionButton,
  FloatingActionButtonVariants,
} from './FloatingActionButton.styles';
import { mergeStyles } from '../../utils';
import { Primitive, PrimitiveProps } from '../Primitive';

export interface FloatingActionButtonProps
  extends
    ComponentProps<'button'>,
    FloatingActionButtonVariants,
    PrimitiveProps {}

export function FloatingActionButton({
  disabled = false,
  children,
  className,
  ...props
}: FloatingActionButtonProps) {
  return (
    <Primitive.button
      disabled={disabled}
      className={mergeStyles(floatingActionButton({ disabled }), className)}
      {...props}
    >
      {children}
    </Primitive.button>
  );
}
