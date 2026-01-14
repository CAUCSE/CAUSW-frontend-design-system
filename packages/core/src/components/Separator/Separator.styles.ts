import { mergeStyles } from '../../utils';

export type SeparatorOrientation = 'horizontal' | 'vertical';

const orientationClasses: Record<SeparatorOrientation, string> = {
  horizontal: 'h-px w-full my-2',
  vertical: 'h-full w-px mx-2 self-stretch',
};

const colorClasses = 'bg-gray-200';

export interface SeparatorStylesOptions {
  orientation?: SeparatorOrientation;
}

export function separatorStyles({
  orientation = 'horizontal',
}: SeparatorStylesOptions): string {
  return mergeStyles([colorClasses, orientationClasses[orientation]]);
}
