'use client';

import * as React from 'react';
import { bottomNavigationStyles } from './BottomNavigation.styles';

export interface BottomNavigationProps {
  children: React.ReactNode;
}

interface BottomNavigationItemProps {
  asChild?: boolean;
  active?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
}

export function BottomNavigation({ children }: BottomNavigationProps) {
  const { root } = bottomNavigationStyles();
  return <nav className={root()}>{children}</nav>;
}

BottomNavigation.Item = function BottomNavigationItem({
  asChild = false,
  active = false,
  icon,
  onClick,
  children,
}: BottomNavigationItemProps) {
  const { item, icon: iconStyle, label } = bottomNavigationStyles({ active });

  if (asChild) {
    return <div className={item()}>{children}</div>;
  }

  return (
    <button type="button" onClick={onClick} className={item()}>
      <div className={iconStyle()}>
        {icon ?? <div className="h-6 w-6 rounded-full bg-current" />}
      </div>
      <span className={label()}>{children}</span>
    </button>
  );
};
