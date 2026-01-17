import { mergeStyles } from '../../utils';

export type FloatType = 'absolute' | 'fixed' | 'sticky' | 'relative';
export type FloatZIndex =
  | 'sticky'
  | 'dropdown'
  | 'bottomsheet'
  | 'modal'
  | 'toast';

export interface FloatPosition {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface FloatStylesOptions extends FloatPosition {
  floatType?: FloatType;
  zIndex?: FloatZIndex;
}

export function floatStyles({
  floatType = 'absolute',
  zIndex = 'sticky',
}: FloatStylesOptions): string {
  return mergeStyles(
    baseStyles,
    positionClasses[floatType],
    zIndexClasses[zIndex],
  );
}

const baseStyles = 'w-fit h-fit';

const positionClasses: Record<FloatType, string> = {
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

const convertPxToRem = (value?: number) => {
  if (!value) return;
  return `${value / 16}rem`;
};

export function floatPositionStyles({ ...props }: FloatPosition) {
  return {
    top: convertPxToRem(props.top),
    bottom: convertPxToRem(props.bottom),
    left: convertPxToRem(props.left),
    right: convertPxToRem(props.right),
  };
}
