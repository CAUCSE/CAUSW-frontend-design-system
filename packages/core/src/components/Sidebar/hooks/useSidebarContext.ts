import { createContext, useContext } from 'react';

// Root Context
export type SidebarValue = string | number;

export interface SidebarContextValue {
  selected?: SidebarValue;
  onSelectChange?: (value: SidebarValue) => void;
}

export const SidebarContext = createContext<SidebarContextValue | null>(null);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('Sidebar compound components must be used within Sidebar');
  }
  return context;
};

// Item Context
export interface SidebarItemContextValue {
  selected: boolean;
}

export const SidebarItemContext = createContext<SidebarItemContextValue | null>(
  null,
);

export const useSidebarItemContext = () => {
  const context = useContext(SidebarItemContext);
  if (!context) {
    throw new Error(
      'Sidebar Item compound components must be used within Sidebar.Item',
    );
  }
  return context;
};
