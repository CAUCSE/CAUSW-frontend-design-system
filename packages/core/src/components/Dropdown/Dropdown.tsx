import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { dropdown, type DropdownVariants } from './Dropdown.styles';

const DropdownMenuRoot = DropdownMenuPrimitive.Root;
export type DropdownProps = React.ComponentProps<typeof DropdownMenuRoot>;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export type DropdownTriggerProps = React.ComponentProps<
  typeof DropdownMenuTrigger
>;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

export type DropdownContentProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Content
>;

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ref,
  ...props
}: DropdownContentProps) => {
  const { content } = dropdown();
  return (
    <DropdownMenuPortal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={content({ className })}
        {...props}
      />
    </DropdownMenuPortal>
  );
};
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

export interface DropdownItemProps
  extends
    Omit<React.ComponentProps<typeof DropdownMenuPrimitive.Item>, 'color'>,
    DropdownVariants {}

const DropdownMenuItem = ({
  className,
  color,
  ref,
  ...props
}: DropdownItemProps) => {
  const { item } = dropdown({ color });
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={item({ className })}
      {...props}
    />
  );
};
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export const Dropdown = Object.assign(DropdownMenuRoot, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
});
