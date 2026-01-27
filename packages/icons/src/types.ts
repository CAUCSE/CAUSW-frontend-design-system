import type { SVGProps } from 'react';
import { colors } from '@causw/tokens';

//기본 아이콘 크기 (24px)
export const DEFAULT_SIZE = 24;

// Mono 아이콘 기본 색상
export const MONO_COLORS = {
  inactive: colors.gray[300],
  active: colors.gray[600],
} as const;

// 아이콘에서 사용 가능한 토큰 색상
export const ICON_TOKEN_COLORS = {
  'gray-50': colors.gray[50],
  'gray-100': colors.gray[100],
  'gray-200': colors.gray[200],
  'gray-300': colors.gray[300],
  'gray-400': colors.gray[400],
  'gray-500': colors.gray[500],
  'gray-600': colors.gray[600],
  'gray-700': colors.gray[700],
  'gray-800': colors.gray[800],
  'gray-900': colors.gray[900],
  'blue-100': colors.blue[100],
  'blue-200': colors.blue[200],
  'blue-500': colors.blue[500],
  'blue-700': colors.blue[700],
  'red-100': colors.red[100],
  'red-200': colors.red[200],
  'red-400': colors.red[400],
  'red-500': colors.red[500],
  'green-400': colors.green[400],
  white: colors.white.main,
  black: colors.black.main,
} as const;

export type IconTokenColor = keyof typeof ICON_TOKEN_COLORS;

// Mono 아이콘
export interface MonoIconProps extends Omit<
  SVGProps<SVGSVGElement>,
  'width' | 'height'
> {
  size?: number | string;
  active?: boolean;
  color?: IconTokenColor;
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
