import React, { useState } from 'react';
import { mergeStyles } from '../../utils';
import { Drawer } from '../Drawer/Drawer';
import { Text } from '../Text';
import { BottomSheetContext, useBottomSheet } from '../../hooks';

export type HeaderAlign = 'left' | 'center';

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
BottomSheetTrigger.displayName = 'BottomSheetTrigger';

const BottomSheetHandle = () => {
  return <div className="h-1 w-11 rounded-full bg-gray-200" />;
};

const BottomSheetContent = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Drawer.Content>) => {
  return (
    <Drawer.Portal>
      <Drawer.Overlay />

      <Drawer.Content
        className={mergeStyles([
          'flex w-full flex-col items-center gap-8 rounded-t-2xl bg-white px-6 py-3.5 pb-10 shadow-[0_-2px_30px_0_rgba(51,53,61,0.30)]',
          className,
        ])}
        {...props}
      >
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

  return (
    <div
      className={mergeStyles([
        headerAlign === 'center' ? 'text-center' : 'text-left',
        className,
      ])}
    >
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
  return (
    <div
      className={mergeStyles(['overflow-y-auto', className])}
      style={{ maxHeight }}
    >
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
  return <div className={mergeStyles([className])}>{children}</div>;
};

export const BottomSheet = Object.assign(BottomSheetRoot, {
  Trigger: BottomSheetTrigger,
  Content: BottomSheetContent,
  Header: BottomSheetHeader,
  Body: BottomSheetBody,
  Footer: BottomSheetFooter,
});
