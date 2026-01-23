import { navbarStyles } from '../Navbar.styles';
import { NavItem } from '../types';

interface DesktopNavProps {
  items: NavItem[];
  activeKey?: string;
  onNavigate?: (key: string) => void;

  /** layout slots */
  top?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export function DesktopNav({
  items,
  activeKey,
  onNavigate,
  top,
  footer,
  children,
}: DesktopNavProps) {
  return (
    <nav className={navbarStyles.desktop.root}>
      {/* TOP */}
      <div className={navbarStyles.desktop.top}>{top}</div>

      {/* CONTENT */}
      <div className={navbarStyles.desktop.content}>
        {children ??
          items.map((item) => {
            const active = item.key === activeKey;

            return (
              <button
                key={item.key}
                className={navbarStyles.desktop.item(active)}
                onClick={() => onNavigate?.(item.key)}
              >
                {item.icon}
                <span>{item.label}</span>

                {item.badgeCount !== undefined && (
                  <span className={navbarStyles.desktop.badge}>
                    {item.badgeCount}
                  </span>
                )}
              </button>
            );
          })}
      </div>

      {/* FOOTER */}
      <div className={navbarStyles.desktop.footer}>{footer}</div>
    </nav>
  );
}
