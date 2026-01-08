import { mergeStyles } from '../../utils';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type FlexJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

const directionClasses: Record<FlexDirection, string> = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  column: 'flex-col',
  'column-reverse': 'flex-col-reverse',
};

const gapClasses: Record<FlexGap, string> = {
  none: 'gap-0',
  xs: 'gap-1', // 4px
  sm: 'gap-2', // 8px
  md: 'gap-4', // 16px
  lg: 'gap-6', // 24px
  xl: 'gap-8', // 32px
};

const alignClasses: Record<FlexAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyClasses: Record<FlexJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const wrapClasses: Record<FlexWrap, string> = {
  nowrap: 'flex-nowrap',
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
};

export interface FlexStylesOptions {
  direction?: FlexDirection;
  gap?: FlexGap;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: FlexWrap;
}

export function flexStyles({
  direction = 'row',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = 'nowrap',
}: FlexStylesOptions): string {
  return mergeStyles([
    'flex', // Base style
    directionClasses[direction],
    gapClasses[gap],
    alignClasses[align],
    justifyClasses[justify],
    wrapClasses[wrap],
  ]);
}
