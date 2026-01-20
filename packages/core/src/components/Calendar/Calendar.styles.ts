import { tv, type VariantProps } from 'tailwind-variants';

export const calendar = tv({
  slots: {
    wrapper: [
      'bg-white rounded-[20px] shadow-sm border border-gray-100 flex flex-col items-center gap-2',
      'w-full min-w-[328px] max-w-[804px]',
      'py-4 px-2 md:py-10',
    ],

    layoutContainer: 'w-full',
    header:
      'w-full grid grid-cols-7 items-center mb-[17px] md:mb-[23px] gap-x-0',

    navContainerLeft: 'flex items-center justify-center w-full',
    navContainerRight: 'flex items-center justify-center w-full text-gray-400',

    navButton:
      'flex items-center justify-center bg-white border border-gray-200 rounded-[8px] text-gray-400 hover:bg-gray-50 hover:text-gray-700 cursor-pointer w-[26px] h-[26px] md:h-[29px]',
    navIcon: 'w-[6px] h-[10px]',

    caption:
      'text-[#364153] text-[16px] font-bold leading-[1.6] tracking-[-0.02em] select-none',

    gridHeader: 'w-full mb-0 gap-x-0',

    weekday:
      'h-[44px] flex items-center justify-center text-gray-400 text-[14px] font-normal leading-[1.6] tracking-[-0.02em] select-none',

    gridBody: 'w-full mt-[16px] md:mt-[26px] gap-y-4 gap-x-0',

    cell: 'relative group gap-1 min-h-[52px] md:min-h-[56px]',
    cellEmpty: 'min-h-[52px] md:min-h-[56px]',

    dayNumber:
      'w-7 h-7 flex items-center justify-center rounded-full text-[15px] font-semibold leading-[1.6] tracking-[-0.02em] text-[#364153] z-10 select-none',

    eventList: 'w-full flex flex-col gap-1',
    eventItemHeight: 'h-[20px] md:h-[24px]',
  },

  variants: {
    size: {
      // Mobile (328px)
      sm: {
        wrapper: '!w-[328px] !max-w-none !min-w-0 !py-4 !px-2',
        layoutContainer: '!w-[312px]',
        header: '!mb-[17px]',
        gridBody: '!mt-[16px]',
        navButton: '!w-[26px] !h-[26px]',
        cell: '!min-h-[52px]',
        cellEmpty: '!min-h-[52px]',
        eventItemHeight: '!h-[20px]',

        navContainerLeft: '!justify-center !translate-x-0',
        navContainerRight: '!justify-center !translate-x-0',
      },

      //Tablet (412px)
      md: {
        wrapper: '!w-[412px] !max-w-none !min-w-0 !py-10 !px-2',
        layoutContainer: '!w-[396px]',

        navContainerLeft: 'justify-end translate-x-[25%]',
        navContainerRight: 'justify-start -translate-x-[25%]',

        header: '!mb-[23px]',
        gridBody: '!mt-[26px]',
        navButton: '!w-[26px] !h-[29px]',
        cell: '!min-h-[56px]',
        cellEmpty: '!min-h-[56px]',
        eventItemHeight: '!h-[24px]',
      },

      //Desktop (804px)
      lg: {
        wrapper: '!w-[804px] !max-w-none !min-w-0 !py-10 !px-2',
        layoutContainer: '!w-[788px]',

        navContainerLeft: '!justify-center !translate-x-0',
        navContainerRight: '!justify-center !translate-x-0',

        header: '!mb-[23px]',
        gridBody: '!mt-[26px]',
        navButton: '!w-[26px] !h-[29px]',
        cell: '!min-h-[56px]',
        cellEmpty: '!min-h-[56px]',
        eventItemHeight: '!h-[24px]',
      },
    },

    isToday: {
      true: {
        dayNumber: 'bg-gray-800 !text-white shadow-sm',
      },
    },
  },
});

export type CalendarVariants = VariantProps<typeof calendar>;

export const eventBarStyles = {
  textWrapper: `
    absolute top-0 left-0 h-full
    flex items-center justify-center
    text-[11px] font-medium tracking-[-0.02em] leading-none
    truncate cursor-pointer select-none
    z-10
  `,
  variants: {
    holiday: 'bg-red-100 text-red-400',
    event: 'bg-gray-100 text-gray-600',
    important: 'bg-blue-100 text-blue-600',
  },
} as const;
