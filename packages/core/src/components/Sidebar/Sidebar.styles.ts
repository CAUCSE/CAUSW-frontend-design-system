import { tv } from 'tailwind-variants';

export const sidebarStyles = tv({
  slots: {
    root: 'flex h-screen w-65 flex-col bg-white border-r border-gray-100',
    header: 'px-4.5 py-8',
    content: 'flex-1 overflow-y-auto px-4.5 py-2',
    footer: 'border-t border-gray-100 px-4 py-4',
    item: 'group w-full flex items-center gap-2 px-2 py-2 rounded-sm text-md transition-colors',
    badge: 'ml-auto px-2 py-0.5 text-sm rounded-sm bg-red-100 text-red-400',
  },
  variants: {
    active: {
      true: {
        item: 'bg-gray-100 text-gray-700 font-bold',
      },
      false: {
        item: 'text-gray-500 hover:bg-gray-50',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
