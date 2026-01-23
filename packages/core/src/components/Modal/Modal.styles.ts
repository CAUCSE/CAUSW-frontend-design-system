import { tv, VariantProps } from 'tailwind-variants';

export const modal = tv({
  slots: {
    overlay:
      'fixed inset-0 z-modal bg-black/50 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
    content:
      'fixed left-[50%] top-[50%] z-modal flex w-[19.5rem] md:w-[26.25rem] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-[1rem] bg-white pb-[0.75rem] pt-[1.875rem] shadow-lg data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out focus:outline-none',
    title: 'w-full typo-subtitle-18-bold text-gray-800',
    description: 'w-full mt-2 typo-body-16-regular text-gray-500',
    footer: 'mt-6 flex w-full items-start px-10',
    actionButton:
      'flex flex-1 items-center justify-center py-3 px-10 rounded-md typo-subtitle-16-semibold transition-colors focus:outline-none',
  },
  variants: {
    variant: {
      primary: {
        actionButton: 'text-blue-700 hover:bg-blue-50 active:bg-blue-100',
      },
      destructive: {
        actionButton: 'text-red-400 hover:bg-red-50 active:bg-red-100',
      },
      cancel: {
        actionButton: 'text-gray-400 hover:bg-gray-50 active:bg-gray-100',
      },
    },
    textAlign: {
      center: {
        title: 'text-center px-10',
        description: 'text-center px-10',
      },
      left: {
        title: 'text-left px-8',
        description: 'text-left px-8',
      },
      right: {
        title: 'text-right',
        description: 'text-right',
      },
    },
  },
  compoundVariants: [
    {
      textAlign: 'left',
      title: 'flex',
    },
    {
      textAlign: 'right',
      title: 'flex',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    textAlign: 'center',
  },
});

export type ModalVariants = VariantProps<typeof modal>;
