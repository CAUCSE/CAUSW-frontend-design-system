import { DesktopNav } from './variants/DesktopNav';
import { MobileNav } from './variants/MobileNav';
import { NavbarProps } from './types';

/**
 * Design System Navbar
 * - Desktop: Top / Content / Footer layout
 * - Mobile: Bottom navigation (full width)
 */
export function Navbar({
  variant,
  items,
  activeKey,
  onNavigate,
  top,
  footer,
  children,
}: NavbarProps) {
  if (variant === 'mobile') {
    return (
      <MobileNav items={items} activeKey={activeKey} onNavigate={onNavigate} />
    );
  }

  return (
    <DesktopNav
      items={items}
      activeKey={activeKey}
      onNavigate={onNavigate}
      top={top}
      footer={footer}
    >
      {children}
    </DesktopNav>
  );
}
