import type { SVGProps } from 'react';

//기본 아이콘 크기 (24px)
export const DEFAULT_SIZE = 24;

// Mono 아이콘
export interface MonoIconProps extends Omit<
  SVGProps<SVGSVGElement>,
  'width' | 'height'
> {
  title?: string;
}

// Colored 아이콘
export interface ColoredIconProps extends Omit<
  SVGProps<SVGSVGElement>,
  'width' | 'height' | 'color'
> {
  size?: number | string;
  title?: string;
}

export type MonoIconComponent = React.FC<MonoIconProps>;
export type ColoredIconComponent = React.FC<ColoredIconProps>;
