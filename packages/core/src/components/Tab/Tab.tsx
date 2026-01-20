import * as React from 'react';
import { Primitive } from '../Primitive';
import { tabListStyles, tabItemStyles, type TabVariant } from './Tab.styles';
import { mergeStyles } from '../../utils';

type TabContextValue = {
  variant: TabVariant;
  value: string;
  setValue: (v: string) => void;
  baseId: string;
  activeClassName?: string;
  inactiveClassName?: string;
};

const TabContext = React.createContext<TabContextValue | null>(null);

const useTabContext = () => {
  const ctx = React.useContext(TabContext);
  if (!ctx) throw new Error('Tab.* must be used within Tab.Root');
  return ctx;
};

/** =========================
 * Root
 * ========================= */
export interface TabRootProps {
  variant: TabVariant;
  activeClassName?: string;
  inactiveClassName?: string;
  /** uncontrolled */
  defaultValue?: string;

  /** controlled */
  value?: string;
  onValueChange?: (v: string) => void;

  id?: string;
  className?: string;
  children: React.ReactNode;
}

const TabRoot = ({
  variant,
  defaultValue = '',
  value: valueProp,
  onValueChange,
  id,
  className,
  children,
  activeClassName,
  inactiveClassName,
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

  return (
    <TabContext.Provider
      value={{
        variant,
        value,
        setValue,
        baseId,
        activeClassName,
        inactiveClassName,
      }}
    >
      <div className={className}>{children}</div>
    </TabContext.Provider>
  );
};
TabRoot.displayName = 'Tab.Root';

/** =========================
 * List
 * ========================= */
export type TabListProps = React.ComponentPropsWithoutRef<'div'> & {
  asChild?: boolean;
};

const TabList = ({ asChild, className, ...props }: TabListProps) => {
  const { variant } = useTabContext();

  return (
    <Primitive.div
      asChild={asChild}
      role="tablist"
      className={[tabListStyles(variant), className].filter(Boolean).join(' ')}
      {...props}
    />
  );
};
TabList.displayName = 'Tab.List';

/** =========================
 * Trigger
 * ========================= */
export type TabTriggerProps = React.ComponentPropsWithoutRef<'button'> & {
  value: string;
  asChild?: boolean;
};

const TabTrigger = ({
  value,
  asChild,
  className,
  ...props
}: TabTriggerProps) => {
  const {
    variant,
    value: activeValue,
    setValue,
    baseId,
    activeClassName,
    inactiveClassName,
  } = useTabContext();

  const active = activeValue === value;
  const tone = active ? activeClassName : inactiveClassName;

  return (
    <Primitive.button
      asChild={asChild}
      role="tab"
      aria-selected={active}
      id={`${baseId}-trigger-${value}`}
      aria-controls={`${baseId}-content-${value}`}
      className={mergeStyles(
        tabItemStyles({ variant, active }),
        tone,
        className,
      )}
      onClick={() => setValue(value)}
      {...props}
    />
  );
};
TabTrigger.displayName = 'Tab.Trigger';

/** =========================
 * Content (Panel)
 * ========================= */
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
      aria-labelledby={`${baseId}-trigger-${value}`}
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
  Trigger: TabTrigger,
  Content: TabContent,
  Panel: TabContent, // vapor style alias
});
