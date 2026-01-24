'use client';

import { ComponentProps, SVGProps } from 'react';
import { sidebar, SidebarVariants } from './Sidebar.styles';
import { Primitive, PrimitiveProps } from '../Primitive';

// Root
import {
  SidebarContext,
  useSidebarContext,
  SidebarItemContext,
  useSidebarItemContext,
  SidebarValue,
} from './hooks/useSidebarContext';

// Root
export interface SidebarProps extends ComponentProps<'nav'>, PrimitiveProps {
  children: React.ReactNode;
  selected?: SidebarValue;
  onSelectChange?: (value: SidebarValue) => void;
}
const SidebarRoot = ({
  children,
  selected,
  onSelectChange,
  ...props
}: SidebarProps) => {
  const { root } = sidebar();
  return (
    <SidebarContext.Provider value={{ selected, onSelectChange }}>
      <Primitive.nav className={root()} {...props}>
        {children}
      </Primitive.nav>
    </SidebarContext.Provider>
  );
};

// Header
export interface SidebarHeaderProps
  extends ComponentProps<'div'>, PrimitiveProps {
  children: React.ReactNode;
}
const SidebarHeader = ({ children, ...props }: SidebarHeaderProps) => {
  const { header } = sidebar();
  return (
    <Primitive.div className={header()} {...props}>
      {children}
    </Primitive.div>
  );
};

// Content

interface SidebarContentProps extends ComponentProps<'div'>, PrimitiveProps {
  children: React.ReactNode;
}

const SidebarContent = ({ children, ...props }: SidebarContentProps) => {
  const { content } = sidebar();
  return (
    <Primitive.div className={content()} {...props}>
      {children}
    </Primitive.div>
  );
};

// Item
interface SidebarItemProps
  extends
    ComponentProps<'button'>,
    PrimitiveProps,
    Omit<SidebarVariants, 'selected'> {
  value?: SidebarValue;
  selected?: boolean;
}
const SidebarItem = ({
  selected,
  value,
  children,
  onClick,
  ...props
}: SidebarItemProps) => {
  const rootContext = useSidebarContext();

  const isSelected =
    selected ??
    (rootContext.selected !== undefined && value !== undefined
      ? rootContext.selected === value
      : false);

  const { item } = sidebar({ selected: isSelected });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    if (
      !e.defaultPrevented &&
      rootContext.onSelectChange &&
      value !== undefined
    ) {
      rootContext.onSelectChange(value);
    }
  };

  return (
    <SidebarItemContext.Provider value={{ selected: isSelected }}>
      <Primitive.button
        type="button"
        className={item()}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Primitive.button>
    </SidebarItemContext.Provider>
  );
};

interface SidebarItemIconProps
  extends SVGProps<SVGSVGElement>, PrimitiveProps {}
const SidebarItemIcon = ({ children, ...props }: SidebarItemIconProps) => {
  const itemContext = useSidebarItemContext();
  const { icon } = sidebar({ selected: itemContext.selected });
  return (
    <Primitive.svg asChild className={icon()} {...props}>
      {children}
    </Primitive.svg>
  );
};

interface SidebarItemTextProps extends ComponentProps<'span'>, PrimitiveProps {}
const SidebarItemText = ({ children, ...props }: SidebarItemTextProps) => {
  const itemContext = useSidebarItemContext();
  const { text } = sidebar({ selected: itemContext.selected });
  return (
    <Primitive.span className={text()} {...props}>
      {children}
    </Primitive.span>
  );
};

// Footer
interface SidebarFooterProps extends ComponentProps<'div'>, PrimitiveProps {
  children: React.ReactNode;
}
const SidebarFooter = ({ children, ...props }: SidebarFooterProps) => {
  const { footer } = sidebar();
  return (
    <Primitive.div className={footer()} {...props}>
      {children}
    </Primitive.div>
  );
};

export const sidebarBadgeClassName = sidebar().badge();

export const Sidebar = Object.assign(SidebarRoot, {
  Header: SidebarHeader,
  Content: SidebarContent,
  Item: SidebarItem,
  ItemIcon: SidebarItemIcon,
  ItemText: SidebarItemText,
  Footer: SidebarFooter,
});
