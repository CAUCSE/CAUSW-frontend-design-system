import * as React from 'react';
import { mergeStyles } from '../../utils';
import { Primitive } from '../Primitive';
import { chipStyles, type ChipSize, type ChipColor } from './Chip.styles';

export interface ChipProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: ChipSize;
  color?: ChipColor;
  disabled?: boolean;
  asChild?: boolean;
}

export const Chip = ({
  size = 'md',
  color = 'white',
  disabled = false,
  asChild,
  children,
  onClick,
  className,
  ...props
}: ChipProps) => {
  const isClickable = !!onClick && !disabled;

  const classes = mergeStyles(
    chipStyles({ size, color, disabled }),
    'gap-2',
    isClickable ? 'cursor-pointer' : 'cursor-default',
    className,
  );

  return (
    <Primitive.div
      asChild={asChild}
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
