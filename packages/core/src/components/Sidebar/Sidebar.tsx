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

export function Sidebar({ children }: SidebarProps) {
  const { root } = sidebarStyles();
  return <nav className={root()}>{children}</nav>;
}

Sidebar.Header = function SidebarHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const { header } = sidebarStyles();
  return <div className={header()}>{children}</div>;
};

Sidebar.Content = function SidebarContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { content } = sidebarStyles();
  return <div className={content()}>{children}</div>;
};

Sidebar.Footer = function SidebarFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  const { footer } = sidebarStyles();
  return <div className={footer()}>{children}</div>;
};

Sidebar.Item = function SidebarItem({
  asChild = false,
  active = false,
  onClick,
  children,
}: SidebarItemProps) {
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
