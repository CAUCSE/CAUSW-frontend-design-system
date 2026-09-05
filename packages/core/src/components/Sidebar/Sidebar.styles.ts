import { tv, type VariantProps } from 'tailwind-variants';

export const sidebar = tv({
  slots: {
    root: 'flex h-screen w-16 shrink-0 flex-col items-start gap-8 border-r border-gray-200 bg-white px-3 pt-[120px]',
    header: 'w-full',
    content: 'flex flex-1 flex-col items-start gap-8 overflow-y-auto',
    footer: 'w-full',
    item: 'group flex h-11 w-10 flex-col items-center justify-center gap-1 rounded-md text-center transition-colors',
    badge: 'ml-auto px-2 py-0.5 text-sm rounded-sm bg-red-100 text-red-400',
    icon: 'h-5 w-5',
    text: 'whitespace-nowrap',
  },
  variants: {
    selected: {
      true: {
        text: 'typo-caption-12-semibold text-gray-600',
        icon: 'fill-gray-600',
      },
      false: {
        item: 'hover:bg-gray-50 active:bg-gray-50',
        text: 'typo-caption-12-medium text-gray-400 group-hover:text-gray-700 group-active:text-gray-700',
        icon: 'fill-gray-300 group-hover:fill-gray-600 group-active:fill-gray-600',
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export type SidebarVariants = VariantProps<typeof sidebar>;
