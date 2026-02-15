import React, { useState } from 'react';
import { Drawer } from 'vaul';
import { Text } from '../Text';
import { BottomSheetContext, useBottomSheet } from '../../hooks';
import { bottomSheet, HeaderAlign } from './BottomSheet.styles';

interface BottomSheetRootProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  headerAlign?: HeaderAlign;
}

const BottomSheetRoot = ({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  headerAlign = 'left',
}: BottomSheetRootProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  return (
    <BottomSheetContext.Provider
      value={{
        headerAlign,
        isOpen,
        onOpen: () => handleOpenChange(true),
        onClose: () => handleOpenChange(false),
      }}
    >
      <Drawer.Root open={isOpen} onOpenChange={handleOpenChange}>
        {children}
      </Drawer.Root>
    </BottomSheetContext.Provider>
  );
};

const BottomSheetTrigger = Drawer.Trigger;

const BottomSheetHandle = () => {
  const { handle } = bottomSheet();
  return <div className={handle()} />;
};

const BottomSheetContent = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Drawer.Content>) => {
  const { content, overlay } = bottomSheet();

  return (
    <Drawer.Portal>
      <Drawer.Overlay className={overlay()} />

      <Drawer.Content className={content({ className })} {...props}>
        <BottomSheetHandle />
        <div className="w-full">{children}</div>
      </Drawer.Content>
    </Drawer.Portal>
  );
};

const BottomSheetHeader = ({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) => {
  const { headerAlign } = useBottomSheet();
  const { header } = bottomSheet({ headerAlign });

  return (
    <div className={header({ className })}>
      {title && (
        <Drawer.Title asChild>
          <Text as="h2" typography="subtitle-18-bold">
            {title}
          </Text>
        </Drawer.Title>
      )}
    </div>
  );
};

const BottomSheetBody = ({
  className,
  children,
  maxHeight,
}: {
  children: React.ReactNode;
  className?: string;
  maxHeight?: string | number;
}) => {
  const { body } = bottomSheet();
  return (
    <div className={body({ className })} style={{ maxHeight }}>
      {children}
    </div>
  );
};

const BottomSheetFooter = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { footer } = bottomSheet();
  return <div className={footer({ className })}>{children}</div>;
};

export const BottomSheet = Object.assign(BottomSheetRoot, {
  Trigger: BottomSheetTrigger,
  Content: BottomSheetContent,
  Header: BottomSheetHeader,
  Body: BottomSheetBody,
  Footer: BottomSheetFooter,
});

BottomSheetRoot.displayName = 'BottomSheet';
BottomSheetTrigger.displayName = 'BottomSheet.Trigger';
BottomSheetContent.displayName = 'BottomSheet.Content';
BottomSheetHeader.displayName = 'BottomSheet.Header';
BottomSheetBody.displayName = 'BottomSheet.Body';
BottomSheetFooter.displayName = 'BottomSheet.Footer';
