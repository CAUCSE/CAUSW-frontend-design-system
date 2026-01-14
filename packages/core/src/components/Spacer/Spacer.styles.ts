import { mergeStyles } from '../../utils';

export type SpacerSize = 1 | 2 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 'auto';

const sizeClasses: Record<Exclude<SpacerSize, 'auto'>, string> = {
  1: 'w-1 h-1', // 4px
  2: 'w-2 h-2', // 8px
  4: 'w-4 h-4', // 16px
  6: 'w-6 h-6', // 24px
  8: 'w-8 h-8', // 32px
  10: 'w-10 h-10', // 40px
  12: 'w-12 h-12', // 48px
  16: 'w-16 h-16', // 64px
  20: 'w-20 h-20', // 80px
  24: 'w-24 h-24', // 96px
};

export interface SpacerStylesOptions {
  size?: SpacerSize;
}

export function spacerStyles({ size = 'auto' }: SpacerStylesOptions): string {
  if (size === 'auto') {
    return 'flex-1'; // Flex 컨테이너 안에서 남은 공간을 다 채움
  }
  return mergeStyles(['flex-none', sizeClasses[size]]);
}
