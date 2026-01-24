import { ComponentProps } from 'react';
import { floatingActionButtonStyles } from './FloatingActionButton.styles';
import { mergeStyles } from '../../utils';
import { Primitive, PrimitiveProps } from '../Primitive';

export interface FloatingActionButtonProps
  extends ComponentProps<'button'>, PrimitiveProps {}

export function FloatingActionButton({
  disabled = false,
  children,
  className,
  ...props
}: FloatingActionButtonProps) {
  return (
    <Primitive.button
      disabled={disabled}
      className={mergeStyles(
        floatingActionButtonStyles({ disabled }),
        className,
      )}
      {...props}
    >
      {children}
    </Primitive.button>
  );
}
