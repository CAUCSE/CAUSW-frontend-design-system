import { mergeStyles } from '../../utils';

export type GridColumns =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'none';
export type GridRows = 1 | 2 | 3 | 4 | 5 | 6 | 'none';
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GridFlow = 'row' | 'col' | 'row-dense' | 'col-dense';

const columnsClasses: Record<GridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
  none: 'grid-cols-none',
};

const rowsClasses: Record<GridRows, string> = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3',
  4: 'grid-rows-4',
  5: 'grid-rows-5',
  6: 'grid-rows-6',
  none: 'grid-rows-none',
};

const gapClasses: Record<GridGap, string> = {
  none: 'gap-0',
  xs: 'gap-1', // 4px
  sm: 'gap-2', // 8px
  md: 'gap-4', // 16px
  lg: 'gap-6', // 24px
  xl: 'gap-8', // 32px
};

const flowClasses: Record<GridFlow, string> = {
  row: 'grid-flow-row',
  col: 'grid-flow-col',
  'row-dense': 'grid-flow-row-dense',
  'col-dense': 'grid-flow-col-dense',
};

export interface GridStylesOptions {
  columns?: GridColumns;
  rows?: GridRows;
  gap?: GridGap;
  flow?: GridFlow;
}

export function gridStyles({
  columns = 'none',
  rows = 'none',
  gap = 'md',
  flow = 'row',
}: GridStylesOptions): string {
  return mergeStyles([
    'grid',
    columnsClasses[columns],
    rowsClasses[rows],
    gapClasses[gap],
    flowClasses[flow],
  ]);
}
