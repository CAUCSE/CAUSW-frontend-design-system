import { tv, VariantProps } from 'tailwind-variants';

export const bottomSheet = tv({
  slots: {
    overlay: ['fixed inset-0 z-bottomsheet', 'bg-black/50'], //피그마에 지정된 색상이 없어서 임의로 설정함
    content: [
      'fixed bottom-[max(1rem,var(--safe-area-inset-bottom,env(safe-area-inset-bottom,0px)))] left-4 right-4 z-bottomsheet flex flex-col items-center gap-6',
      'rounded-2xl bg-white px-4 py-4',
      'after:hidden',
    ],
    handle: '', //기존 handle 스타일 'h-1 w-11 rounded-full bg-gray-200',
    header: 'text-left',
    body: 'overflow-y-auto w-full',
    footer: 'w-full',
  },
  variants: {
    headerAlign: {
      left: { header: 'text-left' },
      center: { header: 'text-center' },
    },
  },
  defaultVariants: {
    headerAlign: 'left',
  },
});

export type HeaderAlign = VariantProps<typeof bottomSheet>['headerAlign'];
