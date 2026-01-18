import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
  DialogSizeKeys,
  dialogSizeStyles,
  dialogStyles,
  DialogVariants,
  type DialogSizeOptions,
} from './Dialog.styles';
import { splitVariantProps } from '../../utils';
import { ComponentProps } from 'react';

const DialogRoot = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = ({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Overlay>) => {
  const { overlay } = dialogStyles();

  return (
    <DialogPrimitive.Overlay className={overlay({ className })} {...props} />
  );
};
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export interface DialogContentProps
  extends
    ComponentProps<typeof DialogPrimitive.Content>,
    DialogSizeOptions,
    DialogVariants {}

const DialogContent = ({
  className,
  children,
  ...props
}: DialogContentProps) => {
  const [sizeProps, restProps] = splitVariantProps(props, DialogSizeKeys);
  const sizeStyles = dialogSizeStyles(sizeProps);
  const { content } = dialogStyles({ fullscreen: sizeProps.fullscreen });

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={content({ className })}
        style={{ ...sizeStyles, ...props.style }}
        {...restProps}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
};
DialogContent.displayName = DialogPrimitive.Content.displayName;

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Close: DialogClose,
});
