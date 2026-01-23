'use client';

import * as React from 'react';

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

const bottomNavigationRoot =
  'fixed right-0 bottom-0 left-0 flex h-15 items-center justify-between ' +
  'border-t border-gray-200 bg-white';

const bottomNavigationItem = (active: boolean) =>
  [
    'flex flex-col items-center justify-center flex-1',
    'text-xs transition-colors',
    active ? 'text-gray-700 font-semibold' : 'text-gray-300',
  ].join(' ');

const bottomNavigationIcon = (active: boolean) =>
  active ? 'text-gray-700' : 'text-gray-300';

export function BottomNavigation({ children }: BottomNavigationProps) {
  return <nav className={bottomNavigationRoot}>{children}</nav>;
}

BottomNavigation.Item = function BottomNavigationItem({
  asChild = false,
  active = false,
  icon,
  onClick,
  children,
}: BottomNavigationItemProps) {
  if (asChild) {
    return <div className={bottomNavigationItem(active)}>{children}</div>;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={bottomNavigationItem(active)}
    >
      <div className={bottomNavigationIcon(active)}>
        {icon ?? <div className="h-6 w-6 rounded-full bg-current" />}
      </div>
      <span className="mt-1">{children}</span>
    </button>
  );
};
