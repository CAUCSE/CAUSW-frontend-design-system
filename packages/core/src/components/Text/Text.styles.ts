import { mergeStyles } from '../../utils';

// Typography preset type - format: {variant}-{size}[-point]
export type Typography =
  | 'caption-sm'
  | 'caption-sm-point'
  | 'caption-md'
  | 'caption-md-point'
  | 'body2-sm'
  | 'body2-sm-point'
  | 'body2-md'
  | 'body2-md-point'
  | 'body-sm'
  | 'body-sm-point'
  | 'body-md'
  | 'body-md-point'
  | 'subtitle-sm'
  | 'subtitle-sm-point'
  | 'subtitle-md'
  | 'subtitle-md-point'
  | 'title-sm'
  | 'title-md'
  | 'head-sm'
  | 'head-md'
  | 'fixed-12'
  | 'fixed-14'
  | 'fixed-15'
  | 'fixed-16'
  | 'fixed-18'
  | 'fixed-20'
  | 'fixed-24';

export type TextColor =
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'blue-50'
  | 'blue-500'
  | 'blue-700'
  | 'red-100'
  | 'red-400'
  | 'white'
  | 'black';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

const colorClasses: Record<TextColor, string> = {
  'gray-50': 'text-gray-50',
  'gray-100': 'text-gray-100',
  'gray-200': 'text-gray-200',
  'gray-300': 'text-gray-300',
  'gray-400': 'text-gray-400',
  'gray-500': 'text-gray-500',
  'gray-600': 'text-gray-600',
  'gray-700': 'text-gray-700',
  'gray-800': 'text-gray-800',
  'gray-900': 'text-gray-900',
  'blue-50': 'text-blue-50',
  'blue-500': 'text-blue-500',
  'blue-700': 'text-blue-700',
  'red-100': 'text-red-100',
  'red-400': 'text-red-400',
  white: 'text-white-main',
  black: 'text-black-main',
};

const alignClasses: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

// Typography preset styles mapping
const typographyStyles: Record<Typography, string> = {
  // Caption variants
  'caption-sm': 'text-2xs leading-normal font-regular',
  'caption-sm-point': 'text-2xs leading-normal font-semibold',
  'caption-md': 'text-xs leading-normal font-medium',
  'caption-md-point': 'text-xs leading-normal font-semibold',

  // Body2 variants
  'body2-sm': 'text-xs leading-normal font-regular',
  'body2-sm-point': 'text-xs leading-normal font-semibold',
  'body2-md': 'text-base leading-normal font-medium',
  'body2-md-point': 'text-base leading-normal font-semibold',

  // Body variants
  'body-sm': 'text-base leading-tight font-regular',
  'body-sm-point': 'text-base leading-normal font-bold',
  'body-md': 'text-lg leading-normal font-medium',
  'body-md-point': 'text-lg leading-normal font-bold',

  // Subtitle variants
  'subtitle-sm': 'text-lg leading-normal font-medium',
  'subtitle-sm-point': 'text-lg leading-normal font-bold',
  'subtitle-md': 'text-xl leading-normal font-medium',
  'subtitle-md-point': 'text-xl leading-normal font-bold',

  // Title variants (always bold)
  'title-sm': 'text-2xl leading-normal font-bold',
  'title-md': 'text-5xl leading-normal font-bold',

  // Head variants (always bold)
  'head-sm': 'text-4xl leading-normal font-bold',
  'head-md': 'text-6xl leading-normal font-bold',

  // Fixed size variants
  'fixed-12': 'text-2xs leading-normal font-medium',
  'fixed-14': 'text-xs leading-normal font-medium',
  'fixed-15': 'text-sm leading-normal font-semibold',
  'fixed-16': 'text-base leading-normal font-medium',
  'fixed-18': 'text-lg leading-normal font-medium',
  'fixed-20': 'text-xl leading-normal font-semibold',
  'fixed-24': 'text-3xl leading-normal font-bold',
};

export interface TextStylesOptions {
  typography: Typography;
  textColor: TextColor;
  align?: TextAlign;
}

export function textStyles({
  typography,
  textColor,
  align,
}: TextStylesOptions): string {
  const baseStyles = 'font-sans';
  const colorClass = colorClasses[textColor];
  const typographyClass = typographyStyles[typography];
  const alignClass = align ? alignClasses[align] : '';

  return mergeStyles([baseStyles, colorClass, typographyClass, alignClass]);
}
