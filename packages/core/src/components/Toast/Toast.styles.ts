import clsx from 'clsx';
import { mergeStyles } from '../../utils';
import { TextColor } from '../Text';

export type ToastVariant = 'default';

const containerStyles: Record<ToastVariant, string> = {
  default: 'w-[20rem] rounded-md bg-gray-700 px-4 py-3',
};

export const colorStyles: Record<ToastVariant, TextColor> = {
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
   * - data-[swipe=move]: 사용자가 드래그 중일 때
   * - data-[swipe=cancel]: 드래그하다가 놓았는데 닫히지 않고 복귀할 때
   * - data-[swipe=end]: 드래그해서 완전히 닫을 때
   */
  const baseStyles = clsx(
    'group pointer-events-auto relative flex items-center justify-center overflow-hidden text-center transition-all',
    'data-[state=open]:animate-toast-slide-in',
    'data-[state=closed]:animate-toast-hide',
    'data-[swipe=end]:animate-toast-swipe-out',
    'data-[swipe=move]:translate-y-[var(--radix-toast-swipe-move-y)] data-[swipe=move]:transition-none',
    'data-[swipe=cancel]:translate-y-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out]',
  );
  const containerClass = containerStyles[variant];

  return mergeStyles([baseStyles, containerClass, className]);
}
