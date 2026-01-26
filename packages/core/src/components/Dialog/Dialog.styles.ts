import { tv, type VariantProps } from 'tailwind-variants';
import { convertPxToRem } from '../../utils';

export const dialog = tv({
  slots: {
    overlay:
      'fixed inset-0 z-modal bg-black/50 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
    content:
      'fixed left-[50%] top-[50%] z-modal grid w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-white p-6 shadow-lg rounded-lg data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out',
    close:
      'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500',
  },
  variants: {
    fullscreen: {
      true: {
        content:
          'inset-0 top-0 left-0 w-full h-full max-w-none translate-x-0 translate-y-0 rounded-none sm:rounded-none data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-out-to-bottom-0',
      },
    },
  },
});

export interface DialogSizeOptions {
  maxWidth?: number;
  minWidth?: number;
  width?: number;
  minHeight?: number;
  maxHeight?: number;
}

export const DialogSizeKeys = [
  'maxWidth',
  'minWidth',
  'width',
  'minHeight',
  'maxHeight',
  'fullscreen',
] as const;

export const dialogSizeStyles = ({ ...props }: DialogSizeOptions) => {
  return {
    width: props.width ? convertPxToRem(props.width) : undefined,
    maxWidth: props.maxWidth ? convertPxToRem(props.maxWidth) : undefined,
    minWidth: props.minWidth ? convertPxToRem(props.minWidth) : undefined,
    maxHeight: props.maxHeight ? convertPxToRem(props.maxHeight) : undefined,
    minHeight: props.minHeight ? convertPxToRem(props.minHeight) : undefined,
  };
};
export type DialogVariants = VariantProps<typeof dialog>;
