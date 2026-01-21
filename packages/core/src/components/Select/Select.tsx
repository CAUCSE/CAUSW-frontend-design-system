import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ArrowDown } from '@causw/icons';
import { select, type SelectVariants } from './Select.styles';

const SelectRoot = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

// arrowIcon의 색은 props가 뚫리면 수정할 예정
const SelectTrigger = ({
  className,
  children,
  error,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> &
  Pick<SelectVariants, 'error'>) => {
  const { trigger } = select({ error });

  return (
    <SelectPrimitive.Trigger className={trigger({ className })} {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ArrowDown />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = ({
  className,
  children,
  position = 'popper',
  sideOffset = 4,
  maxHeight = '15rem', // Default max height
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & {
  maxHeight?: string | number;
} & Pick<SelectVariants, 'position'>) => {
  const { content, viewport } = select({ position });

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={content({ className })}
        position={position}
        sideOffset={sideOffset}
        {...props}
      >
        <SelectPrimitive.Viewport className={viewport()} style={{ maxHeight }}>
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) => {
  const { label } = select();
  return <SelectPrimitive.Label className={label({ className })} {...props} />;
};
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) => {
  const { item } = select();

  return (
    <SelectPrimitive.Item className={item({ className })} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className="h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 3.5L4.68421 7L11 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{' '}
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
};
SelectItem.displayName = SelectPrimitive.Item.displayName;

export const Select = Object.assign(SelectRoot, {
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
});
