import { tv, type VariantProps } from 'tailwind-variants';

export const ratioChartEditor = tv({
  slots: {
    root: 'flex flex-col gap-[1.25rem] pb-[0.5rem] min-w-[20rem]', // 에디터 컨테이너
    fields: 'flex flex-col gap-[0.75rem]', // 입력 필드들 컨테이너
    input:
      'flex items-center gap-[1rem] h-[3.5rem] px-[1rem] rounded-[0.75rem] border border-gray-200 bg-white', // 개별 입력 필드
    textInput:
      'flex-1 h-full bg-transparent outline-none typo-fixed-16 text-gray-800 placeholder:text-gray-400', // 입력 필드 내 텍스트
    removeButton:
      'flex-shrink-0 p-[0.25rem] rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors', // 삭제 버튼 (X 아이콘)
    addButton:
      'flex items-center gap-[0.5rem] h-[3.5rem] px-[1rem] rounded-[0.75rem] border border-dashed border-gray-200 bg-white cursor-pointer hover:bg-gray-50 transition-colors', // 항목 추가 버튼
    addButtonText: 'typo-fixed-16 text-gray-400', // 추가 버튼 텍스트
    footer: 'flex items-center justify-between', // 푸터
    deleteButton:
      'typo-fixed-16 text-red-400 cursor-pointer hover:text-red-500 transition-colors', // 삭제 텍스트 버튼
  },
  variants: {
    disabled: {
      true: {
        root: 'opacity-50 pointer-events-none',
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export type RatioChartEditorVariants = VariantProps<typeof ratioChartEditor>;
export const ratioChartEditorKeys = ratioChartEditor.variantKeys;
