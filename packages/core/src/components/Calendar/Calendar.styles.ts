import { tv, type VariantProps } from 'tailwind-variants';

const SPACING = {
  HEADER_MB_SM: 'mb-[17px]',
  HEADER_MB_MD: 'mb-[23px]',
  GRID_MT_SM: 'mt-[16px]',
  GRID_MT_MD: 'mt-[26px]',
} as const;

export const calendar = tv({
  slots: {
    wrapper: [
      'bg-white rounded-[20px] border border-gray-100 flex flex-col items-center gap-2',
      'w-full min-w-[328px] max-w-[804px]',
      'py-4 px-2 md:py-10',
    ],
    layoutContainer: 'w-full',
    header: `w-full grid grid-cols-7 items-center gap-x-0 ${SPACING.HEADER_MB_SM} md:${SPACING.HEADER_MB_MD}`,

    navContainerLeft: 'flex items-center justify-center w-full',
    navContainerRight: 'flex items-center justify-center w-full text-gray-400',
    navButton:
      'flex items-center justify-center bg-white border border-gray-200 rounded-[8px] hover:bg-gray-50 hover:text-gray-700 cursor-pointer w-[26px] h-[26px] md:h-[29px]',
    navIcon: 'w-[6px] h-[10px] text-gray-400',

    caption:
      'text-[#364153] text-[16px] font-bold leading-[1.6] tracking-[-0.02em] select-none',
    gridHeader: 'w-full mb-0 gap-x-0',
    weekday:
      'h-[44px] flex items-center justify-center text-gray-400 text-[14px] font-normal leading-[1.6] tracking-[-0.02em] select-none',
    gridBody: `w-full gap-y-4 gap-x-0 ${SPACING.GRID_MT_SM} md:${SPACING.GRID_MT_MD}`,

    cell: 'relative group gap-1 min-h-[52px] md:min-h-[56px] cursor-pointer rounded-lg transition-colors',
    cellEmpty: 'min-h-[52px] md:min-h-[56px]',

    dayNumber:
      'w-7 h-7 flex items-center justify-center rounded-full text-[15px] font-semibold leading-[1.6] tracking-[-0.02em] z-10 select-none transition-colors',

    eventList: [
      'w-full flex flex-col gap-1',
      'max-h-[88px] overflow-y-auto',
      '[&::-webkit-scrollbar]:hidden',
      '[-ms-overflow-style:none]',
      '[scrollbar-width:none]',
    ],
    eventItemHeight: 'min-h-[20px] h-auto flex-shrink-0 cursor-pointer',
  },

  variants: {
    size: {
      sm: {
        wrapper: '!w-[328px] !max-w-none !min-w-0 !py-4 !px-2',
        layoutContainer: '!w-[312px]',
        header: `!${SPACING.HEADER_MB_SM}`,
        gridBody: `!${SPACING.GRID_MT_SM}`,
        navButton: '!w-[26px] !h-[26px]',
        cell: '!min-h-[52px]',
        cellEmpty: '!min-h-[52px]',
        eventItemHeight: '!min-h-[20px]',
        navContainerLeft: '!justify-center !translate-x-0',
        navContainerRight: '!justify-center !translate-x-0',
      },
      md: {
        wrapper: '!w-[412px] !max-w-none !min-w-0 !py-10 !px-2',
        layoutContainer: '!w-[396px]',
        navContainerLeft: 'justify-end translate-x-[50%] z-20',
        navContainerRight: 'justify-start -translate-x-[50%] z-20',
        header: `!${SPACING.HEADER_MB_MD}`,
        gridBody: `!${SPACING.GRID_MT_MD}`,
        navButton: '!w-[26px] !h-[29px]',
        cell: '!min-h-[56px]',
        cellEmpty: '!min-h-[56px]',
        eventItemHeight: '!min-h-[24px]',
      },
      lg: {
        wrapper: '!w-[804px] !max-w-none !min-w-0 !py-10 !px-2',
        layoutContainer: '!w-[788px]',
        navContainerLeft: '!justify-center !translate-x-0',
        navContainerRight: '!justify-center !translate-x-0',
        header: `!${SPACING.HEADER_MB_MD}`,
        gridBody: `!${SPACING.GRID_MT_MD}`,
        navButton: '!w-[26px] !h-[29px]',
        cell: '!min-h-[56px]',
        cellEmpty: '!min-h-[56px]',
        eventItemHeight: '!min-h-[24px]',
      },
    },
    selectionState: {
      none: { dayNumber: 'text-[#364153]' },
      today: { dayNumber: 'bg-gray-800 text-white shadow-sm' },
      selected: { dayNumber: 'bg-blue-600 text-white shadow-sm' },
      range: { dayNumber: 'bg-blue-100 text-blue-600 rounded-none w-full' },
      rangeStart: {
        dayNumber: 'bg-blue-600 text-white shadow-sm rounded-r-none pl-1',
        cell: 'bg-blue-50/50 rounded-r-none',
      },
      rangeEnd: {
        dayNumber: 'bg-blue-600 text-white shadow-sm rounded-l-none pr-1',
        cell: 'bg-blue-50/50 rounded-l-none',
      },
    },
    hoverEffect: {
      true: { cell: 'hover:bg-gray-50' },
      false: {},
    },
  },

  defaultVariants: {
    selectionState: 'none',
    hoverEffect: false,
  },
});

export type CalendarVariants = VariantProps<typeof calendar>;

export const eventBarStyles = tv({
  slots: {
    wrapper: 'relative w-full',
    bgBar: 'absolute inset-0',
    textLayer:
      'absolute top-0 left-0 w-full h-full flex items-center justify-center text-[11px] font-medium tracking-[-0.02em] leading-tight select-none pointer-events-none z-10 whitespace-nowrap !bg-transparent',
    textSpan: 'block w-[95%] mx-auto truncate px-2   text-center',
  },
  variants: {
    type: {
      holiday: { bgBar: 'bg-red-100', textLayer: 'text-red-400' },
      event: { bgBar: 'bg-gray-100', textLayer: 'text-gray-600' },
      important: { bgBar: 'bg-blue-100', textLayer: 'text-blue-600' },
    },
    position: {
      single: { bgBar: 'mx-[2px] rounded-[4px]' },
      start: { bgBar: 'mr-0 ml-[2px] rounded-l-[4px] rounded-r-none' },
      end: { bgBar: 'mr-[2px] ml-0 rounded-l-none rounded-r-[4px]' },
      middle: { bgBar: 'mx-0 rounded-none' },
    },
  },
});
export type EventBarStylesVariants = VariantProps<typeof eventBarStyles>;
