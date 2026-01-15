import * as DialogPrimitive from '@radix-ui/react-dialog';
import { mergeStyles } from '../../utils';

export const DrawerRoot = DialogPrimitive.Root;
export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerClose = DialogPrimitive.Close;
export const DrawerPortal = DialogPrimitive.Portal;

export const DrawerOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay
    className={mergeStyles([
      'fixed inset-0 z-50',
      'data-[state=open]:animate-overlay-show',
      'data-[state=closed]:animate-overlay-hide',
      className,
    ])}
    {...props}
  />
);

export const DrawerContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DialogPrimitive.Content
      className={mergeStyles([
        'fixed bottom-0 z-50 w-full',
        'data-[state=open]:animate-content-show',
        'data-[state=closed]:animate-content-hide',
        className,
      ])}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DrawerPortal>
);

export const DrawerTitle = DialogPrimitive.Title;
export const DrawerDescription = DialogPrimitive.Description;
