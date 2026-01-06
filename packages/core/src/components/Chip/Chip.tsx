import * as React from 'react';
import { mergeStyles } from '../../utils';
import { Primitive } from '../Primitive';
import {
  chipStyles,
  chipIconStyles,
  type ChipSize,
  type ChipColor,
  type ChipVariant,
} from './Chip.styles';

export interface ChipProps extends React.ComponentPropsWithoutRef<'button'> {
  size?: ChipSize;
  variant?: ChipVariant;
  color?: ChipColor;
  disabled?: boolean;
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRemove?: () => void;
}

const ChevronDownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.35545 5.37734L-0.000195503 1.07532L1.08852 0L4.89981 3.76437L8.71109 0L9.7998 1.07532L5.44416 5.37734C5.29978 5.51991 5.10397 5.6 4.89981 5.6C4.69564 5.6 4.49983 5.51991 4.35545 5.37734Z"
      fill="currentColor"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M7.0001 8.04344L3.34839 11.6952C3.21176 11.8318 3.03787 11.9001 2.82671 11.9001C2.61556 11.9001 2.44167 11.8318 2.30504 11.6952C2.16841 11.5585 2.1001 11.3846 2.1001 11.1735C2.1001 10.9623 2.16841 10.7884 2.30504 10.6518L5.95675 7.0001L2.30504 3.34839C2.16841 3.21176 2.1001 3.03787 2.1001 2.82671C2.1001 2.61556 2.16841 2.44167 2.30504 2.30504C2.44167 2.16841 2.61556 2.1001 2.82671 2.1001C3.03787 2.1001 3.21176 2.16841 3.34839 2.30504L7.0001 5.95675L10.6518 2.30504C10.7884 2.16841 10.9623 2.1001 11.1735 2.1001C11.3846 2.1001 11.5585 2.16841 11.6952 2.30504C11.8318 2.44167 11.9001 2.61556 11.9001 2.82671C11.9001 3.03787 11.8318 3.21176 11.6952 3.34839L8.04344 7.0001L11.6952 10.6518C11.8318 10.7884 11.9001 10.9623 11.9001 11.1735C11.9001 11.3846 11.8318 11.5585 11.6952 11.6952C11.5585 11.8318 11.3846 11.9001 11.1735 11.9001C10.9623 11.9001 10.7884 11.8318 10.6518 11.6952L7.0001 8.04344Z"
      fill="currentColor"
    />
  </svg>
);

export const Chip = ({
  size = 'md',
  variant = 'default',
  color = 'white',
  disabled = false,
  asChild,
  className,
  leftIcon,
  rightIcon,
  onRemove,
  children,
  type,
  ...props
}: ChipProps) => {
  const classes = chipStyles({ size, color, disabled });

  const presetRightIcon =
    variant === 'dropdown' ? (
      <ChevronDownIcon />
    ) : variant === 'closable' ? (
      <CloseIcon />
    ) : null;

  const finalRightIcon = rightIcon ?? presetRightIcon;

  const innerGap = 'gap-2';

  return (
    <Primitive.button
      asChild={asChild}
      type={type ?? 'button'}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      className={mergeStyles(classes, className)}
      {...props}
    >
      <span className={mergeStyles('inline-flex items-center', innerGap)}>
        {leftIcon && (
          <span className={chipIconStyles(disabled)}>{leftIcon}</span>
        )}

        <span>{children}</span>

        {finalRightIcon &&
          (variant === 'closable' ? (
            <button
              type="button"
              className={chipIconStyles(disabled)}
              disabled={disabled}
              aria-label="remove"
              onClick={(e) => {
                e.stopPropagation();
                onRemove?.();
              }}
            >
              {finalRightIcon}
            </button>
          ) : (
            <span className={chipIconStyles(disabled)}>{finalRightIcon}</span>
          ))}
      </span>
    </Primitive.button>
  );
};

Chip.displayName = 'Chip';
