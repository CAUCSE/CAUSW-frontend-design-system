import { mergeStyles } from '../../utils';
import { borderRadius } from '@causw/tokens';

// ✅ Sync types with tokens automatically
export type BoxRadius = 'none' | keyof typeof borderRadius;
export type BoxPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg';
export type BoxDisplay =
  | 'block'
  | 'flex'
  | 'grid'
  | 'inline-block'
  | 'inline-flex'
  | 'none';
export type BoxBackground = 'default' | 'subtle' | 'inverse' | 'transparent';

// ✅ Style Mappings (Token Key -> Tailwind Class)
const paddingClasses: Record<BoxPadding, string> = {
  none: 'p-0',
  xs: 'p-1', // 4px
  sm: 'p-2', // 8px
  md: 'p-4', // 16px
  lg: 'p-6', // 24px
};

const radiusClasses: Record<BoxRadius, string> = {
  none: 'rounded-none',
  xs: 'rounded-sm',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
};

const displayClasses: Record<BoxDisplay, string> = {
  block: 'block',
  flex: 'flex',
  grid: 'grid',
  'inline-block': 'inline-block',
  'inline-flex': 'inline-flex',
  none: 'hidden',
};

const backgroundClasses: Record<BoxBackground, string> = {
  default: '',
  subtle: 'bg-gray-50',
  inverse: 'bg-gray-900 text-white',
  transparent: 'bg-transparent',
};

// ✅ Options Interface
export interface BoxStylesOptions {
  padding?: BoxPadding;
  radius?: BoxRadius;
  display?: BoxDisplay;
  background?: BoxBackground;
}

// ✅ Style Generator Function
export function boxStyles({
  padding = 'none',
  radius = 'none',
  display = 'block',
  background = 'default',
}: BoxStylesOptions): string {
  return mergeStyles([
    paddingClasses[padding],
    radiusClasses[radius],
    displayClasses[display],
    backgroundClasses[background],
  ]);
}
