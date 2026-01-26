import * as React from 'react';
import { Primitive, PrimitiveProps } from '../Primitive';
import { tabs, TabVariants } from './Tab.styles';

interface TabContextValue extends TabVariants {
  value: string;
  setValue: (v: string) => void;
  baseId: string;
  listRef: React.RefObject<HTMLDivElement>;
  scrollAlign: ScrollLogicalPosition; // 'start' | 'center' | 'end' | 'nearest'
}

const TabContext = React.createContext<TabContextValue | null>(null);

const useTabContext = () => {
  const ctx = React.useContext(TabContext);
  if (!ctx) throw new Error('Tab.* must be used within Tab.Root');
  return ctx;
};

export interface TabRootProps extends TabVariants {
  scrollAlign?: ScrollLogicalPosition;
  defaultValue?: string;
  value?: string;
  onValueChange?: (v: string) => void;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const TabRoot = ({
  variant,
  scrollAlign = 'center',
  defaultValue = '',
  value: valueProp,
  onValueChange,
  id,
  className,
  children,
}: TabRootProps) => {
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue);
  const isControlled = valueProp !== undefined;
  const value = (isControlled ? valueProp : uncontrolled) ?? '';

  const setValue = (v: string) => {
    if (!isControlled) setUncontrolled(v);
    onValueChange?.(v);
  };

  const reactId = React.useId();
  const baseId = id ?? `tab-${reactId}`;

  const listRef = React.useRef<HTMLDivElement>(null);

  return (
    <TabContext.Provider
      value={{
        variant,
        value,
        setValue,
        baseId,
        listRef,
        scrollAlign,
      }}
    >
      <div className={className}>{children}</div>
    </TabContext.Provider>
  );
};
TabRoot.displayName = 'Tab.Root';

export type TabListProps = React.ComponentPropsWithoutRef<'div'> & {
  asChild?: boolean;
};

const TabList = ({ className, ...props }: TabListProps) => {
  const { variant, listRef } = useTabContext();
  const { list } = tabs({ variant });

  return (
    <div
      ref={listRef}
      role="tablist"
      className={list({ className })}
      {...props}
    />
  );
};
TabList.displayName = 'Tab.List';

export interface TabTabItemProps
  extends React.ComponentPropsWithoutRef<'button'>, PrimitiveProps {
  value: string;
}
const TabItem = ({
  value,
  asChild,
  className,
  onClick,
  ...props
}: TabTabItemProps) => {
  const {
    variant,
    value: activeValue,
    setValue,
    baseId,
    listRef,
    scrollAlign,
  } = useTabContext();

  const active = activeValue === value;
  const { item } = tabs({ variant });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setValue(value);

    const list = listRef.current;
    if (list && list.scrollWidth > list.clientWidth + 1) {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: scrollAlign ?? 'center',
      });
    }

    onClick?.(e);
  };
  return (
    <Primitive.button
      asChild={asChild}
      role="tab"
      aria-selected={active}
      id={`${baseId}-TabItem-${value}`}
      aria-controls={`${baseId}-content-${value}`}
      className={item({ className })}
      onClick={handleClick}
      {...props}
    />
  );
};
TabItem.displayName = 'Tab.Item';

export type TabContentProps = React.ComponentPropsWithoutRef<'div'> & {
  value: string;
  forceMount?: boolean;
  asChild?: boolean;
};

const TabContent = ({
  value,
  forceMount = false,
  asChild,
  className,
  children,
  ...props
}: TabContentProps) => {
  const { value: activeValue, baseId } = useTabContext();
  const active = activeValue === value;

  if (!forceMount && !active) return null;

  return (
    <Primitive.div
      asChild={asChild}
      role="tabpanel"
      id={`${baseId}-content-${value}`}
      aria-labelledby={`${baseId}-TabItem-${value}`}
      hidden={!active}
      className={className}
      {...props}
    >
      {children}
    </Primitive.div>
  );
};
TabContent.displayName = 'Tab.Content';

export const Tab = Object.assign(TabRoot, {
  Root: TabRoot,
  List: TabList,
  TabItem: TabItem,
  Content: TabContent,
});
