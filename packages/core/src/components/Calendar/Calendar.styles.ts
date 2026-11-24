import { tv, type VariantProps } from 'tailwind-variants';

export const calendar = tv({
  slots: {
    wrapper: [
      'bg-white border-none flex flex-col items-center gap-2',
      'w-full min-w-[312px] md:min-w-[664px] max-w-[1200px]',
    ],
    layoutContainer: 'w-full',
    header:
      'relative w-full flex items-center justify-start md:justify-center bg-white px-[20px] py-[8px] md:mx-auto md:px-0 md:py-[16px]',
    headerActions:
      'ml-auto flex items-center md:absolute md:inset-y-0 md:right-[20px] md:ml-0',
    bannerArea: 'mx-4 mb-2',

    navGroup:
      'flex items-center gap-[6px] md:gap-[14px] -translate-x-[10px] md:translate-x-0',
    navButton:
      'flex items-center justify-center bg-white rounded-[8px] hover:bg-gray-50 hover:text-gray-700 cursor-pointer w-[26px] h-[26px] md:h-[29px]',
    navIcon: 'w-[6px] h-[10px]',

    caption:
      'text-gray-700 text-[18px] md:text-[22px] font-bold leading-[1.6] tracking-[-0.02em] select-none whitespace-nowrap',
    gridHeader: 'w-full mb-0 px-2 gap-x-0 border-b border-gray-100',
    weekday:
      'h-[40px] flex items-center justify-center text-gray-400 text-[14px] font-normal leading-[1.6] tracking-[-0.02em] select-none',
    gridBody: 'w-full px-2 gap-0 border-b border-gray-100',

    cell: 'relative group gap-0.5 pb-5 min-h-[80px] md:min-h-[120px] cursor-pointer rounded-lg transition-colors',
    cellSemiTransparent: 'opacity-30',

    dayNumber:
      'w-6 h-6 m-[3px] flex items-center justify-center rounded-sm text-[14px] font-normal leading-[1.6] tracking-[-0.02em] z-10 select-none transition-colors',

    eventList: ['w-full flex flex-col gap-1'],
    eventItemHeight: 'min-h-[20px] h-auto flex-shrink-0 cursor-pointer',
  },

  variants: {
    size: {
      sm: {
        wrapper: '!w-[312px] !max-w-none !min-w-0',
        header:
          '!px-[20px] !py-[8px] md:!px-[20px] md:!py-[8px] !justify-start md:!justify-start',
        navGroup:
          '!gap-[6px] md:!gap-[6px] !-translate-x-[10px] md:!-translate-x-[10px]',
        navButton: '!w-[26px] !h-[26px]',
        cell: '!min-h-[80px]',
        eventItemHeight: '!min-h-[20px]',
        caption: '!text-[18px] md:!text-[18px] tracking-[-0.02rem]',
      },
      md: {
        wrapper: '!w-[664px] !max-w-none !min-w-0',
        header:
          '!mx-auto !px-0 !py-[16px] md:!mx-auto md:!px-0 md:!py-[16px] !justify-center md:!justify-center',
        navGroup:
          '!gap-[14px] md:!gap-[14px] !-translate-x-0 md:!-translate-x-0',
        navButton: '!w-[26px] !h-[29px]',
        cell: '!min-h-[120px]',
        eventItemHeight: '!min-h-[24px]',
        caption: '!text-[22px] md:!text-[22px] tracking-[-0.03rem]',
      },
    },
    selectionState: {
      none: { dayNumber: 'text-gray-500' },
      today: { dayNumber: 'bg-gray-700 text-white font-semibold shadow-sm' },
      weekend: { dayNumber: 'text-red-400' },
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
      'absolute top-0 left-0 w-full h-full flex items-center justify-center text-[11px] md:text-[14px] font-medium tracking-[-0.02em] leading-tight select-none pointer-events-none z-10 whitespace-nowrap text-gray-700 !bg-transparent',
    textSpan:
      'block w-[95%] mx-auto overflow-hidden whitespace-nowrap text-clip pl-1 text-start',
  },
  variants: {
    size: {
      sm: { textLayer: '!text-[11px] md:!text-[11px]' },
      md: { textLayer: '!text-[14px] md:!text-[14px]' },
    },
    color: {
      gray: { bgBar: 'bg-gray-100' },
      blue: { bgBar: 'bg-blue-100' },
      orange: { bgBar: 'bg-orange-100' },
      red: { bgBar: 'bg-red-100' },
      skyblue: { bgBar: 'bg-skyblue-100' },
      purple: { bgBar: 'bg-purple-100' },
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
