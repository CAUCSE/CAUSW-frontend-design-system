'use client';

import * as React from 'react';
import { sidebarStyles } from './Sidebar.styles';

export interface SidebarProps {
  children: React.ReactNode;
}

interface SidebarItemProps {
  asChild?: boolean;
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const SidebarRoot = ({ children }: SidebarProps) => {
  const { root } = sidebarStyles();
  return <nav className={root()}>{children}</nav>;
};
const SidebarHeader = ({ children }: { children: React.ReactNode }) => {
  const { header } = sidebarStyles();
  return <div className={header()}>{children}</div>;
};

const SidebarContent = ({ children }: { children: React.ReactNode }) => {
  const { content } = sidebarStyles();
  return <div className={content()}>{children}</div>;
};

const SidebarFooter = ({ children }: { children: React.ReactNode }) => {
  const { footer } = sidebarStyles();
  return <div className={footer()}>{children}</div>;
};

const SidebarItem = ({
  asChild = false,
  active = false,
  onClick,
  children,
}: SidebarItemProps) => {
  const { item } = sidebarStyles({ active });

  if (asChild) {
    return <div className={item()}>{children}</div>;
  }

  return (
    <button type="button" onClick={onClick} className={item()}>
      {children}
    </button>
  );
};

export const sidebarBadgeClassName = sidebarStyles().badge();

export const Sidebar = Object.assign(SidebarRoot, {
  Header: SidebarHeader,
  Content: SidebarContent,
  Footer: SidebarFooter,
  Item: SidebarItem,
});
