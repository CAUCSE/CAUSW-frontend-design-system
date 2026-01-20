import { createContext, useContext } from 'react';

export type RatioBarSelectionMode = 'single' | 'multiple';

export interface RatioBarContextValue {
  value: string | string[];
  mode: RatioBarSelectionMode;
  disabled?: boolean;
  onSelect: (itemValue: string) => void;
  isSelected: (itemValue: string) => boolean;
}

export const RatioBarContext = createContext<RatioBarContextValue | null>(null);

export const useRatioBarContext = () => {
  const context = useContext(RatioBarContext);
  if (!context) {
    throw new Error(
      'RatioBar 서브 컴포넌트는 <RatioBar.Root> 내부에서 사용해야 합니다.',
    );
  }
  return context;
};
