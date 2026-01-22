import { navbarStyles } from '../Navbar.styles';
import { NavItem } from '../types';

interface MobileNavProps {
  items: NavItem[];
  activeKey?: string;
  onNavigate?: (key: string) => void;
}

export function MobileNav({ items, activeKey, onNavigate }: MobileNavProps) {
  return (
    <nav className={navbarStyles.mobile.root}>
      {items.map((item) => {
        const active = item.key === activeKey;

        return (
          <button
            key={item.key}
            className={navbarStyles.mobile.item(active)}
            onClick={() => onNavigate?.(item.key)}
          >
            <div className={navbarStyles.mobile.icon(active)}>
              {item.icon ?? <div className="h-6 w-6 rounded-full bg-current" />}
            </div>

            <span className="mt-1">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
