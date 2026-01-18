import { mergeStyles } from '../../utils';

// Typography preset type - format: {variant}-{size}[-point]
export type Typography =
  | 'title-48-bold'
  | 'title-32-bold'
  | 'title-30-bold'
  | 'title-24-bold'
  | 'title-22-bold'
  | 'subtitle-20-bold'
  | 'subtitle-18-bold'
  | 'subtitle-16-bold'
  | 'body-18-medium'
  | 'body-16-medium'
  | 'body-16-regular'
  | 'body-15-semibold'
  | 'body-15-medium'
  | 'body-14-semibold'
  | 'body-14-medium'
  | 'body-14-regular'
  | 'caption-12-semibold'
  | 'caption-12-medium'
  | 'caption-12-regular';

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
  | 'blue-100'
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
  'blue-100': 'text-blue-100',
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
  // Title variants
  'title-48-bold': 'typo-title-48-bold',
  'title-32-bold': 'typo-title-32-bold',
  'title-30-bold': 'typo-title-30-bold',
  'title-24-bold': 'typo-title-24-bold',
  'title-22-bold': 'typo-title-22-bold',

  // Subtitle variants
  'subtitle-20-bold': 'typo-subtitle-20-bold',
  'subtitle-18-bold': 'typo-subtitle-18-bold',
  'subtitle-16-bold': 'typo-subtitle-16-bold',

  // Body variants
  'body-18-medium': 'typo-body-18-medium',
  'body-16-medium': 'typo-body-16-medium',
  'body-16-regular': 'typo-body-16-regular',
  'body-15-semibold': 'typo-body-15-semibold',
  'body-15-medium': 'typo-body-15-medium',
  'body-14-semibold': 'typo-body-14-semibold',
  'body-14-medium': 'typo-body-14-medium',
  'body-14-regular': 'typo-body-14-regular',

  // Caption variants
  'caption-12-semibold': 'typo-caption-12-semibold',
  'caption-12-medium': 'typo-caption-12-medium',
  'caption-12-regular': 'typo-caption-12-regular',
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
