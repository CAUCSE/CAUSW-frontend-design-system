import { mergeStyles } from '../../utils';

// 에디터 컨테이너
const editorRootBaseStyles =
  'flex flex-col gap-[1.25rem] pb-[0.5rem] min-w-[20rem]';

export interface RatioChartEditorRootStyleOptions {
  disabled?: boolean;
}

export function ratioChartEditorRootStyles({
  disabled,
}: RatioChartEditorRootStyleOptions = {}) {
  return mergeStyles(
    editorRootBaseStyles,
    disabled && 'opacity-50 pointer-events-none',
  );
}

// 입력 필드들 컨테이너
export function ratioChartEditorFieldsStyles() {
  return 'flex flex-col gap-[0.75rem]';
}

// 개별 입력 필드
const inputBaseStyles =
  'flex items-center gap-[1rem] h-[3.5rem] px-[1rem] rounded-[0.75rem] border border-gray-200 bg-white';

export function ratioChartEditorInputStyles() {
  return inputBaseStyles;
}

// 입력 필드 내 텍스트
export function ratioChartEditorTextInputStyles() {
  return mergeStyles(
    'flex-1 h-full bg-transparent outline-none',
    'typo-fixed-16 text-gray-800 placeholder:text-gray-400',
  );
}

// 삭제 버튼 (X 아이콘)
export function ratioChartEditorRemoveButtonStyles() {
  return mergeStyles(
    'flex-shrink-0 p-[0.25rem] rounded-full',
    'text-gray-400 hover:text-gray-600 hover:bg-gray-100',
    'cursor-pointer transition-colors',
  );
}

// 항목 추가 버튼
const addButtonBaseStyles =
  'flex items-center gap-[0.5rem] h-[3.5rem] px-[1rem] rounded-[0.75rem] border border-dashed border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors';

export function ratioChartEditorAddButtonStyles() {
  return addButtonBaseStyles;
}

// 추가 버튼 텍스트
export function ratioChartEditorAddButtonTextStyles() {
  return 'typo-fixed-16 text-gray-400';
}

// 푸터 (체크박스 + 삭제 버튼)
export function ratioChartEditorFooterStyles() {
  return 'flex items-center justify-between';
}

// 삭제 텍스트 버튼
export function ratioChartEditorDeleteButtonStyles() {
  return mergeStyles(
    'typo-fixed-16 text-red-400 cursor-pointer',
    'hover:text-red-500 transition-colors',
  );
}
