import clsx from 'clsx';
import { mergeStyles } from '../../utils';
import { TextVariants } from '../Text';

export type ToastVariant = 'default';

const containerStyles: Record<ToastVariant, string> = {
  default:
    'w-[20rem] md:w-[26.25rem] lg:w-[20rem] max-w-[calc(100vw-2rem)] rounded-md bg-gray-700 px-4 py-3',
};

export const colorStyles: Record<ToastVariant, TextVariants['textColor']> = {
  default: 'white',
};

export interface ToastStylesOptions {
  variant: ToastVariant;
  className?: string;
}

export function getToastStyles({
  variant,
  className,
}: ToastStylesOptions): string {
  /**
   * Radix UI Toast Animation States
   * - data-[state=open]: Toast가 나타날 때
   * - data-[state=closed]: Toast가 사라질 때
   */
  const baseStyles = clsx(
    'group pointer-events-auto relative flex items-center justify-center overflow-hidden text-center transition-all',
    'data-[state=open]:animate-toast-slide-in',
    'data-[state=closed]:animate-toast-hide',
  );
  const containerClass = containerStyles[variant];

  return mergeStyles([baseStyles, containerClass, className]);
}
