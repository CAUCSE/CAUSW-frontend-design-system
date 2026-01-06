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
  'caption-sm': 'typo-caption-sm',
  'caption-sm-point': 'typo-caption-sm-point',
  'caption-md': 'typo-caption-md',
  'caption-md-point': 'typo-caption-md-point',

  // Body2 variants
  'body2-sm': 'typo-body2-sm',
  'body2-sm-point': 'typo-body2-sm-point',
  'body2-md': 'typo-body2-md',
  'body2-md-point': 'typo-body2-md-point',

  // Body variants
  'body-sm': 'typo-body-sm',
  'body-sm-point': 'typo-body-sm-point',
  'body-md': 'typo-body-md',
  'body-md-point': 'typo-body-md-point',

  // Subtitle variants
  'subtitle-sm': 'typo-subtitle-sm',
  'subtitle-sm-point': 'typo-subtitle-sm-point',
  'subtitle-md': 'typo-subtitle-md',
  'subtitle-md-point': 'typo-subtitle-md-point',

  // Title variants (always bold)
  'title-sm': 'typo-title-sm',
  'title-md': 'typo-title-md',

  // Head variants (always bold)
  'head-sm': 'typo-head-sm',
  'head-md': 'typo-head-md',

  // Fixed size variants
  'fixed-12': 'typo-fixed-12',
  'fixed-14': 'typo-fixed-14',
  'fixed-15': 'typo-fixed-15',
  'fixed-16': 'typo-fixed-16',
  'fixed-18': 'typo-fixed-18',
  'fixed-20': 'typo-fixed-20',
  'fixed-24': 'typo-fixed-24',
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
