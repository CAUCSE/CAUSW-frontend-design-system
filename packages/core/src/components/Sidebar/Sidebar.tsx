'use client';

import * as React from 'react';

export interface SidebarProps {
  children: React.ReactNode;
}

interface SidebarItemProps {
  asChild?: boolean;
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const sidebarItem = (active: boolean) =>
  [
    'w-full flex items-center gap-2 px-2 py-2 rounded-sm',
    'text-md transition-colors',
    active
      ? 'bg-gray-100 text-gray-700 font-bold'
      : 'text-gray-500 hover:bg-gray-50',
  ].join(' ');

const sidebarBadge =
  'ml-auto px-2 py-0.5 text-sm rounded-sm bg-red-100 text-red-400';

export function Sidebar({ children }: SidebarProps) {
  return <nav className="flex h-screen w-65 flex-col bg-white">{children}</nav>;
}

Sidebar.Header = function SidebarHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-4.5 py-8">{children}</div>;
};

Sidebar.Content = function SidebarContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-1 overflow-y-auto px-4.5 py-2">{children}</div>;
};

Sidebar.Footer = function SidebarFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="border-t border-gray-100 px-4 py-4">{children}</div>;
};

Sidebar.Item = function SidebarItem({
  asChild = false,
  active = false,
  onClick,
  children,
}: SidebarItemProps) {
  if (asChild) {
    return <div className={sidebarItem(active)}>{children}</div>;
  }

  return (
    <button type="button" onClick={onClick} className={sidebarItem(active)}>
      {children}
    </button>
  );
};

export const sidebarBadgeClassName = sidebarBadge;
