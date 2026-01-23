import { ComponentProps } from 'react';
import { Dialog } from '../Dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { modal, ModalVariants } from './Modal.styles';

export type ModalOverlayProps = ComponentProps<typeof DialogPrimitive.Overlay>;
const ModalOverlay = ({ className, ...props }: ModalOverlayProps) => {
  const { overlay } = modal();
  return (
    <DialogPrimitive.Overlay className={overlay({ className })} {...props} />
  );
};
ModalOverlay.displayName = 'ModalOverlay';

export type ModalContentProps = ComponentProps<typeof DialogPrimitive.Content>;
const ModalContent = ({ className, children, ...props }: ModalContentProps) => {
  const { content } = modal();
  return (
    <DialogPrimitive.Portal>
      <ModalOverlay />
      <DialogPrimitive.Content className={content({ className })} {...props}>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};
ModalContent.displayName = 'ModalContent';

export interface ModalTitleProps
  extends
    ComponentProps<typeof DialogPrimitive.Title>,
    Pick<ModalVariants, 'textAlign'> {}
const ModalTitle = ({ className, textAlign, ...props }: ModalTitleProps) => {
  const { title } = modal();
  return (
    <DialogPrimitive.Title
      className={title({ className, textAlign })}
      {...props}
    />
  );
};
ModalTitle.displayName = 'ModalTitle';

export interface ModalDescriptionProps
  extends
    ComponentProps<typeof DialogPrimitive.Description>,
    Pick<ModalVariants, 'textAlign'> {}
const ModalDescription = ({
  className,
  textAlign,
  ...props
}: ModalDescriptionProps) => {
  const { description } = modal();
  return (
    <DialogPrimitive.Description
      className={description({ className, textAlign })}
      {...props}
    />
  );
};
ModalDescription.displayName = 'ModalDescription';

export type ModalFooterProps = ComponentProps<'div'>;
const ModalFooter = ({ className, children, ...props }: ModalFooterProps) => {
  const { footer } = modal();
  return (
    <div className={footer({ className })} {...props}>
      {children}
    </div>
  );
};
ModalFooter.displayName = 'ModalFooter';

export interface ModalActionProps
  extends ComponentProps<'button'>, Pick<ModalVariants, 'variant'> {}
const ModalAction = ({ className, variant, ...props }: ModalActionProps) => {
  const { actionButton } = modal();
  const classes = actionButton({ className, variant });
  return <button className={classes} {...props} />;
};
ModalAction.displayName = 'ModalAction';

const ModalRoot = (props: ComponentProps<typeof Dialog>) => (
  <Dialog {...props} />
);
ModalRoot.displayName = 'Modal';

export const Modal = Object.assign(ModalRoot, {
  Trigger: Dialog.Trigger,
  Content: ModalContent,
  Title: ModalTitle,
  Description: ModalDescription,
  Footer: ModalFooter,
  Close: Dialog.Close,
  ActionButton: ModalAction,
});
