import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { dropdownStyles, type DropdownVariants } from './Dropdown.styles';

const DropdownMenuRoot = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ref,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) => {
  const { content } = dropdownStyles();
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

const DropdownMenuItem = ({
  className,
  color,
  ref,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> &
  DropdownVariants) => {
  const { item } = dropdownStyles({ color });
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
