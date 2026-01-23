import { tv, type VariantProps } from 'tailwind-variants';

export const ratioChart = tv({
  slots: {
    root: 'flex flex-col gap-[0.75rem] pb-[0.5rem] min-w-[20rem]', // 컨테이너
    item: 'relative flex items-center px-[1rem] h-[3.5rem] rounded-[0.75rem] border border-gray-200 overflow-hidden transition-all duration-200', // 개별 항목 버튼
    fill: 'absolute inset-y-0 left-0 rounded-l-[0.75rem] transition-all duration-300', // 비율 배경
    content:
      'absolute inset-0 z-10 flex items-center justify-between px-[1rem] gap-[0.5rem] typo-body1-md-point', // 텍스트 오버레이
    label: 'truncate', // 라벨 텍스트
    ratio: 'flex-shrink-0', // 퍼센트 텍스트
    footer: 'flex items-end justify-between px-[0.25rem]', // 푸터 컨테이너
    footerText: 'typo-body-14 text-gray-400', // 푸터 텍스트
  },
  variants: {
    disabled: {
      true: {
        root: 'opacity-50 cursor-not-allowed',
        item: 'cursor-not-allowed',
      },
      false: {
        item: 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-inset',
      },
    },
    selected: {
      true: {
        fill: 'bg-gray-900',
      },
      false: {
        fill: 'bg-gray-200',
      },
    },
    contentVariant: {
      light: {
        content: 'text-white font-bold',
      },
      dark: {
        content: 'text-gray-800 font-medium',
      },
    },
  },
  defaultVariants: {
    disabled: false,
    selected: false,
    contentVariant: 'dark',
  },
});

export type RatioChartVariants = VariantProps<typeof ratioChart>;
export const ratioChartKeys = ratioChart.variantKeys;
