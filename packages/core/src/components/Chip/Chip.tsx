import * as React from 'react';
import { mergeStyles } from '../../utils';
import { Primitive, PrimitiveProps } from '../Primitive';
import { chip, ChipVariants } from './Chip.styles';

export interface ChipProps
  extends
    Omit<React.ComponentPropsWithoutRef<'div'>, 'color'>,
    PrimitiveProps,
    ChipVariants {}

export const Chip = ({
  size = 'md',
  color = 'white',
  disabled = false,
  children,
  onClick,
  className,
  ...props
}: ChipProps) => {
  const isClickable = !!onClick && !disabled;

  const classes = mergeStyles(
    chip({ size, color, disabled }),
    isClickable ? 'cursor-pointer' : 'cursor-default',
    className,
  );

  return (
    <Primitive.div
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable && !disabled ? 0 : undefined}
      className={classes}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </Primitive.div>
  );
};

Chip.displayName = 'Chip';
