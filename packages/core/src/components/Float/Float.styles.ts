import { mergeStyles } from '../../utils';

export type FloatPosition = 'absolute' | 'fixed' | 'sticky' | 'relative';
export type FloatZIndex =
  | 'sticky'
  | 'dropdown'
  | 'bottomsheet'
  | 'modal'
  | 'toast';

const baseStyles = 'w-fit h-fit';

const positionClasses: Record<FloatPosition, string> = {
  absolute: 'absolute',
  fixed: 'fixed',
  sticky: 'sticky',
  relative: 'relative',
};

const zIndexClasses: Record<FloatZIndex, string> = {
  sticky: 'z-sticky',
  dropdown: 'z-dropdown',
  bottomsheet: 'z-bottomsheet',
  modal: 'z-modal',
  toast: 'z-toast',
};

export interface FloatStylesOptions {
  position?: FloatPosition;
  zIndex?: FloatZIndex;
}

export function floatStyles({
  position = 'absolute',
  zIndex = 'sticky',
}: FloatStylesOptions): string {
  return mergeStyles(
    baseStyles,
    positionClasses[position],
    zIndexClasses[zIndex],
  );
}

const convertPxToRem = (value?: number | string) => {
  if (typeof value === 'number') {
    return `${value / 16}rem`;
  }
  return value;
};

export function floatPositionStyles({
  top,
  bottom,
  left,
  right,
}: {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
}) {
  return {
    top: convertPxToRem(top),
    bottom: convertPxToRem(bottom),
    left: convertPxToRem(left),
    right: convertPxToRem(right),
  };
}
