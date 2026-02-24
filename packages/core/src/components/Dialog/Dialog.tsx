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
export type DialogProps = ComponentProps<typeof DialogRoot>;

const DialogTrigger = DialogPrimitive.Trigger;
export type DialogTriggerProps = ComponentProps<typeof DialogTrigger>;

const DialogPortal = DialogPrimitive.Portal;
export type DialogPortalProps = ComponentProps<typeof DialogPortal>;

const DialogClose = DialogPrimitive.Close;
export type DialogCloseProps = ComponentProps<typeof DialogClose>;

export type DialogOverlayProps = ComponentProps<typeof DialogPrimitive.Overlay>;

const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => {
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

export type DialogTitleProps = ComponentProps<typeof DialogPrimitive.Title>;

const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return <DialogPrimitive.Title className={className} {...props} />;
};
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export type DialogDescriptionProps = ComponentProps<
  typeof DialogPrimitive.Description
>;

const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => {
  return <DialogPrimitive.Description className={className} {...props} />;
};
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export type DialogFooterProps = ComponentProps<'div'> & PrimitiveProps;

const DialogFooter = ({ className, ...props }: DialogFooterProps) => {
  return <Primitive.div className={className} {...props} />;
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
