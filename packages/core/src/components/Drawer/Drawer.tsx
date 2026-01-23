import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
  drawerContent,
  DrawerContentVariants,
  drawerOverlay,
  DrawerOverlayVariants,
} from './Drawer.styles';

const DrawerRoot = DialogPrimitive.Root;
const DrawerTrigger = DialogPrimitive.Trigger;
const DrawerClose = DialogPrimitive.Close;
const DrawerPortal = DialogPrimitive.Portal;
const DrawerTitle = DialogPrimitive.Title;
const DrawerDescription = DialogPrimitive.Description;

type DrawerOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay> &
  DrawerOverlayVariants;

const DrawerOverlay = ({ className, ...props }: DrawerOverlayProps) => (
  <DialogPrimitive.Overlay
    className={drawerOverlay({ className })}
    {...props}
  />
);

type DrawerContentProps = React.ComponentProps<typeof DialogPrimitive.Content> &
  DrawerContentVariants;

const DrawerContent = ({
  position,
  className,
  children,
  ...props
}: DrawerContentProps) => (
  <DialogPrimitive.Content
    className={drawerContent({ position, className })}
    {...props}
  >
    {children}
  </DialogPrimitive.Content>
);

export const Drawer = Object.assign(DrawerRoot, {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Close: DrawerClose,
  Portal: DrawerPortal,
  Overlay: DrawerOverlay,
  Content: DrawerContent,
  Title: DrawerTitle,
  Description: DrawerDescription,
});
