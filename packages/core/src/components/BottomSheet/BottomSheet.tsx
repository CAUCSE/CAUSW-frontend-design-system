import React, { useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
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
      <DialogPrimitive.Root open={isOpen} onOpenChange={handleOpenChange}>
        {children}
      </DialogPrimitive.Root>
    </BottomSheetContext.Provider>
  );
};

const BottomSheetTrigger = DialogPrimitive.Trigger;

const BottomSheetHandle = () => {
  const { handle } = bottomSheet();
  return <div className={handle()} />;
};

const BottomSheetContent = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => {
  const { content, overlay } = bottomSheet();

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={overlay()} />

      <DialogPrimitive.Content className={content({ className })} {...props}>
        <BottomSheetHandle />
        <div className="w-full">{children}</div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
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
        <DialogPrimitive.Title asChild>
          <Text as="h2" typography="subtitle-18-bold">
            {title}
          </Text>
        </DialogPrimitive.Title>
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
