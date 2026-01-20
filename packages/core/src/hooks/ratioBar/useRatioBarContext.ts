import { createContext, useContext } from 'react';

export type RatioBarSelectionMode = 'single' | 'multiple';

export interface RatioBarContextValue {
  value: string | string[];
  mode: RatioBarSelectionMode;
  disabled?: boolean;
  onSelect: (itemValue: string) => void;
  isSelected: (itemValue: string) => boolean;
  // count 기반 자동 비율 계산
  counts: Map<string, number>;
  registerCount: (itemValue: string, count: number) => void;
  unregisterCount: (itemValue: string) => void;
  totalCount: number;
  getRatio: (itemValue: string) => number;
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
