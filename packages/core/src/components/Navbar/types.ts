import React from 'react';

export type NavItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  badgeCount?: number;
};

export type NavbarVariant = 'desktop' | 'mobile';

export interface NavbarProps {
  variant: NavbarVariant;

  /** Content 영역 (메뉴) */
  items: NavItem[];
  activeKey?: string;
  onNavigate?: (key: string) => void;

  /** Desktop layout slots */
  top?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
