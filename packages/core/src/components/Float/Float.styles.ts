import { tv, type VariantProps } from 'tailwind-variants';
import { convertPxToRem } from '../../utils';

export const float = tv({
  base: 'w-fit h-fit',
  variants: {
    floatType: {
      absolute: 'absolute',
      fixed: 'fixed',
      sticky: 'sticky',
      relative: 'relative',
    },
    zIndex: {
      sticky: 'z-sticky',
      dropdown: 'z-dropdown',
      bottomsheet: 'z-bottomsheet',
      modal: 'z-modal',
      toast: 'z-toast',
    },
  },
  defaultVariants: {
    floatType: 'absolute',
    zIndex: 'sticky',
  },
});

export type FloatVariants = VariantProps<typeof float>;

export interface FloatPosition {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface FloatStylesOptions extends FloatPosition, FloatVariants {}

export function floatPositionStyles({ ...props }: FloatPosition) {
  return {
    top: convertPxToRem(props.top),
    bottom: convertPxToRem(props.bottom),
    left: convertPxToRem(props.left),
    right: convertPxToRem(props.right),
  };
}
