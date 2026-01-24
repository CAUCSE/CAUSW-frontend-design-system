import { tv, VariantProps } from 'tailwind-variants';

export const bottomSheet = tv({
  slots: {
    content:
      'flex w-full flex-col items-center gap-8 rounded-t-2xl bg-white px-6 py-3.5 pb-10 shadow-[0_-2px_30px_0_rgba(51,53,61,0.30)]',
    handle: 'h-1 w-11 rounded-full bg-gray-200',
    header: 'text-left',
    body: 'overflow-y-auto',
    footer: '',
  },
  variants: {
    headerAlign: {
      left: {
        header: 'text-left',
      },
      center: {
        header: 'text-center',
      },
    },
  },
  defaultVariants: {
    headerAlign: 'left',
  },
});

export type HeaderAlign = VariantProps<typeof bottomSheet>['headerAlign'];
