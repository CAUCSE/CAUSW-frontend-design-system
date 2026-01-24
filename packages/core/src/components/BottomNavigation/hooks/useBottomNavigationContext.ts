import { createContext, useContext } from 'react';

export interface BottomNavigationContextValue {
  selected?: string;
  onSelectChange?: (value: string) => void;
}

export const BottomNavigationContext =
  createContext<BottomNavigationContextValue | null>(null);

export const useBottomNavigationContext = () => {
  const context = useContext(BottomNavigationContext);
  if (!context) {
    throw new Error(
      'BottomNavigation compound components must be used within BottomNavigation',
    );
  }
  return context;
};

// Item Context (for styling children)
export interface BottomNavigationItemContextValue {
  selected: boolean;
}

export const BottomNavigationItemContext =
  createContext<BottomNavigationItemContextValue | null>(null);

export const useBottomNavigationItemContext = () => {
  const context = useContext(BottomNavigationItemContext);
  if (!context) {
    throw new Error(
      'BottomNavigation Item compound components must be used within BottomNavigation.Item',
    );
  }
  return context;
};
