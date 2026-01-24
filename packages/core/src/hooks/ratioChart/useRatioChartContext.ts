import { createContext, useContext } from 'react';

export type RatioChartSelectionMode = 'single' | 'multiple';

export interface RatioChartContextValue {
  value: string | string[];
  mode: RatioChartSelectionMode;
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

export const RatioChartContext = createContext<RatioChartContextValue | null>(
  null,
);

export const useRatioChartContext = () => {
  const context = useContext(RatioChartContext);
  if (!context) {
    throw new Error(
      'RatioChart 서브 컴포넌트는 <RatioChart.Root> 내부에서 사용해야 합니다.',
    );
  }
  return context;
};
