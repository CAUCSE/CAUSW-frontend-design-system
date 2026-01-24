import { tv, VariantProps } from 'tailwind-variants';

export const sidebar = tv({
  slots: {
    root: 'flex h-screen w-65 flex-col bg-white border-r border-gray-100',
    header: 'px-2.5 py-8',
    content: 'flex-1 overflow-y-auto px-2.5 py-2',
    footer: 'border-t border-gray-100 px-4 py-4',
    item: 'group w-full flex items-center gap-2 px-4.5 py-2 rounded-sm text-md transition-colors',
    badge: 'ml-auto px-2 py-0.5 text-sm rounded-sm bg-red-100 text-red-400',
    icon: 'w-4.5 h-4.5',
    text: 'text-md',
  },
  variants: {
    selected: {
      true: {
        item: 'bg-gray-100',
        text: 'text-gray-700 typo-subtitle-16-bold',
        icon: 'fill-gray-600',
      },
      false: {
        item: 'hover:bg-gray-50 active:bg-gray-50',
        text: 'typo-body-16-medium text-gray-500 group-hover:text-gray-700 group-active:text-gray-700',
        icon: 'fill-gray-300 group-hover:fill-gray-600 group-active:fill-gray-600',
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export type SidebarVariants = VariantProps<typeof sidebar>;
