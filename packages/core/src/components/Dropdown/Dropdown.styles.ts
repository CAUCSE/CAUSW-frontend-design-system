import { tv, VariantProps } from 'tailwind-variants';

export const dropdown = tv({
  slots: {
    content:
      'z-dropdown min-w-[8rem] overflow-hidden rounded-[0.75rem] border border-gray-100 bg-white py-1 text-gray-800 shadow-[0px_0px_30px_0px_rgba(51,53,61,0.16)] divide-y divide-gray-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    item: 'relative flex cursor-pointer select-none items-center justify-start rounded-sm px-3 py-1.5 text-sm outline-none transition-colors focus:bg-gray-50 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  },
  variants: {
    color: {
      default: {
        item: 'text-gray-800',
      },
      red: {
        item: 'text-red-500 focus:bg-red-50 focus:text-red-600',
      },
      blue: {
        item: 'text-blue-600 focus:bg-blue-50 focus:text-blue-700',
      },
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export type DropdownVariants = VariantProps<typeof dropdown>;
