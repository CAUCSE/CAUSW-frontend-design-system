'use client';

import { ComponentProps } from 'react';
import { sidebarStyles, SidebarVariants } from './Sidebar.styles';
import { Primitive, PrimitiveProps } from '../Primitive';

// Root
export interface SidebarProps extends ComponentProps<'nav'>, PrimitiveProps {
  children: React.ReactNode;
}
const SidebarRoot = ({ children, ...props }: SidebarProps) => {
  const { root } = sidebarStyles();
  return (
    <Primitive.nav className={root()} {...props}>
      {children}
    </Primitive.nav>
  );
};

// Header
export interface SidebarHeaderProps
  extends ComponentProps<'div'>, PrimitiveProps {
  children: React.ReactNode;
}
const SidebarHeader = ({ children, ...props }: SidebarHeaderProps) => {
  const { header } = sidebarStyles();
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
  const { content } = sidebarStyles();
  return (
    <Primitive.div className={content()} {...props}>
      {children}
    </Primitive.div>
  );
};

// Item
interface SidebarItemProps
  extends ComponentProps<'button'>, PrimitiveProps, SidebarVariants {}
const SidebarItem = ({
  selected = false,
  onClick,
  children,
  ...props
}: SidebarItemProps) => {
  const { item } = sidebarStyles({ selected });

  return (
    <Primitive.button
      type="button"
      onClick={onClick}
      className={item()}
      {...props}
    >
      {children}
    </Primitive.button>
  );
};

// Footer
interface SidebarFooterProps extends ComponentProps<'div'>, PrimitiveProps {
  children: React.ReactNode;
}
const SidebarFooter = ({ children, ...props }: SidebarFooterProps) => {
  const { footer } = sidebarStyles();
  return (
    <Primitive.div className={footer()} {...props}>
      {children}
    </Primitive.div>
  );
};

export const sidebarBadgeClassName = sidebarStyles().badge();

export const Sidebar = Object.assign(SidebarRoot, {
  Header: SidebarHeader,
  Content: SidebarContent,
  Item: SidebarItem,
  Footer: SidebarFooter,
});
