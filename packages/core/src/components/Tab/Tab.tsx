import * as React from 'react';
import { Primitive } from '../Primitive';
import {
  tabListStyles,
  tabItemStyles,
  type TabVariant,
  type TabColor,
} from './Tab.styles';

interface TabContextProps {
  variant: TabVariant;
  activeValue: string;
  onTabChange: (value: string) => void;
  color?: TabColor;
}

const TabContext = React.createContext<TabContextProps | null>(null);

export interface TabRootProps {
  variant: TabVariant;
  value: string;
  onValueChange: (value: string) => void;
  color?: TabColor;
  children: React.ReactNode;
}

const Root = ({
  variant,
  value,
  onValueChange,
  color,
  children,
}: TabRootProps) => {
  return (
    <TabContext.Provider
      value={{ variant, activeValue: value, onTabChange: onValueChange, color }}
    >
      <div className={tabListStyles(variant)} role="tablist">
        {children}
      </div>
    </TabContext.Provider>
  );
};

export interface TabItemProps extends React.ComponentPropsWithoutRef<'button'> {
  value: string;
  asChild?: boolean;
}

const Item = ({ value, asChild, children, ...props }: TabItemProps) => {
  const context = React.useContext(TabContext);
  if (!context) throw new Error('Tab.Item must be used within Tab.Root');

  const { variant, activeValue, onTabChange, color } = context;
  const active = activeValue === value;

  return (
    <Primitive.button
      asChild={asChild}
      role="tab"
      aria-selected={active}
      onClick={() => onTabChange(value)}
      className={tabItemStyles({ variant, active, color })}
      {...props}
    >
      {children}
    </Primitive.button>
  );
};

export const Tab = Object.assign(Root, {
  Item,
});
