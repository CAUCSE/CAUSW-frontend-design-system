import { mergeStyles } from '../../utils';

// 아이템들이 세로로 쌓기
const rootBaseStyles = 'flex flex-col gap-[0.75rem] pb-[0.5rem] min-w-[20rem]';

export interface RatioBarRootStyleOptions {
  disabled?: boolean;
}

export function ratioBarRootStyles({
  disabled,
}: RatioBarRootStyleOptions = {}) {
  return mergeStyles(
    rootBaseStyles,
    disabled && 'opacity-50 cursor-not-allowed',
  );
}

// 각 아이템은 개별 바
const itemBaseStyles =
  'relative flex items-center px-[1rem] h-[3.5rem] rounded-[0.75rem] border border-gray-200 overflow-hidden transition-all duration-200';

export interface RatioBarItemStyleOptions {
  selected?: boolean;
  disabled?: boolean;
}

export function ratioBarItemStyles({
  disabled,
}: RatioBarItemStyleOptions = {}) {
  return mergeStyles(
    itemBaseStyles,
    disabled
      ? 'cursor-not-allowed'
      : 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-inset',
  );
}

export interface RatioBarItemFillStyleOptions {
  selected?: boolean;
}

// 비율에 따라 배경 채워지도록
export function ratioBarItemFillStyles({
  selected,
}: RatioBarItemFillStyleOptions = {}) {
  return mergeStyles(
    'absolute inset-y-0 left-0 rounded-l-[0.75rem] transition-all duration-300',
    selected ? 'bg-gray-900' : 'bg-gray-200',
  );
}

export interface RatioBarItemContentStyleOptions {
  selected?: boolean;
}

export function ratioBarItemContentStyles({
  selected,
}: RatioBarItemContentStyleOptions = {}) {
  return mergeStyles(
    'relative z-10 flex items-center justify-between w-full gap-[0.5rem]',
    'typo-body1-md-point',
    selected ? 'text-white font-bold' : 'text-gray-800 font-medium',
  );
}

export function ratioBarLabelStyles() {
  return 'truncate';
}

export function ratioBarRatioStyles() {
  return 'flex-shrink-0';
}

// Footer
export function ratioBarFooterStyles() {
  return 'flex items-end justify-between px-[0.25rem]';
}

export function ratioBarFooterTextStyles() {
  return 'typo-body-14 text-gray-400';
}
