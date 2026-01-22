import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
  DialogSizeKeys,
  dialogSizeStyles,
  dialog,
  DialogVariants,
  type DialogSizeOptions,
} from './Dialog.styles';
import { splitVariantProps } from '../../utils';
import { ComponentProps } from 'react';
import { Primitive, PrimitiveProps } from '../Primitive';

const DialogRoot = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = ({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Overlay>) => {
  const { overlay } = dialog();

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
  const { content } = dialog({ fullscreen: sizeProps.fullscreen });

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

const DialogTitle = ({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Title>) => {
  return <DialogPrimitive.Title {...props} />;
};
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = ({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Description>) => {
  return <DialogPrimitive.Description {...props} />;
};
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const DialogFooter = ({
  className,
  ...props
}: ComponentProps<'div'> & PrimitiveProps) => {
  return <Primitive.div {...props} />;
};
DialogFooter.displayName = 'DialogFooter';

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
  Close: DialogClose,
});
