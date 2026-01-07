import { mergeStyles } from '../../utils';

export type SeparatorOrientation = 'horizontal' | 'vertical';
export type SeparatorSize = 'sm' | 'md' | 'lg';

const orientationClasses: Record<SeparatorOrientation, string> = {
  horizontal: 'h-px w-full my-2',
  vertical: 'h-full w-px mx-2 self-stretch',
};

const colorClasses = 'bg-gray-200'; // 기본 색상 (필요시 props로 분리 가능)

export interface SeparatorStylesOptions {
  orientation?: SeparatorOrientation;
  className?: string;
}

export function separatorStyles({
  orientation = 'horizontal',
}: SeparatorStylesOptions): string {
  return mergeStyles([colorClasses, orientationClasses[orientation]]);
}
