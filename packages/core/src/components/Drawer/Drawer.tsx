import * as DialogPrimitive from '@radix-ui/react-dialog';
import { drawer, DrawerVariants } from './Drawer.styles';

const DrawerRoot = DialogPrimitive.Root;
const DrawerTrigger = DialogPrimitive.Trigger;
const DrawerClose = DialogPrimitive.Close;
const DrawerPortal = DialogPrimitive.Portal;
const DrawerTitle = DialogPrimitive.Title;
const DrawerDescription = DialogPrimitive.Description;

type DrawerOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay>;

const DrawerOverlay = ({ className, ...props }: DrawerOverlayProps) => {
  const { overlay } = drawer();
  return (
    <DialogPrimitive.Overlay className={overlay({ className })} {...props} />
  );
};

type DrawerContentProps = React.ComponentProps<typeof DialogPrimitive.Content> &
  DrawerVariants;

const DrawerContent = ({
  position,
  className,
  children,
  ...props
}: DrawerContentProps) => {
  const { content } = drawer({ position });
  return (
    <DialogPrimitive.Content className={content({ className })} {...props}>
      {children}
    </DialogPrimitive.Content>
  );
};

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
