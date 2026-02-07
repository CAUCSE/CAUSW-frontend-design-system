import React, { useMemo, useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  addDays,
  subDays,
  getDay,
  getDaysInMonth,
  isSameDay,
  isWithinInterval,
  differenceInCalendarDays,
} from 'date-fns';
import { ko } from 'date-fns/locale';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { Grid } from '../Grid';
import { ChevronLeft, ChevronRight } from '@causw/icons';

import {
  calendar,
  eventBarStyles,
  type CalendarVariants,
} from './Calendar.styles';
import { mergeStyles } from '../../utils';

export type CalendarEvent = {
  id: string | number;
  title: string;
  startDate: string;
  endDate?: string;
  type: keyof typeof eventBarStyles.variants;
};

export interface CalendarProps extends CalendarVariants {
  className?: string;
  events?: CalendarEvent[];
  defaultMonth?: Date;
  today?: Date;
  showToday?: boolean;
  selectedStartDate?: Date;
  selectedEndDate?: Date;
  onDateClick?: (date: Date) => void;
  onEventClick?: (event: CalendarEvent) => void;
  enableHover?: boolean;
}

const parseDateStr = (dateStr: string) => {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const formatDateStr = (date: Date) => format(date, 'yyyy-MM-dd');

const getEventRange = (event: CalendarEvent) => {
  const start = parseDateStr(event.startDate);
  const end = event.endDate ? parseDateStr(event.endDate) : start;
  return { start, end };
};

export const Calendar = ({
  className,
  events = [],
  defaultMonth = new Date(),
  today = new Date(),
  showToday = true,
  size,
  selectedStartDate,
  selectedEndDate,
  onDateClick,
  onEventClick,
  enableHover = false,
}: CalendarProps) => {
  const {
    wrapper,
    layoutContainer,
    header,
    navContainerLeft,
    navContainerRight,
    navButton,
    navIcon,
    caption,
    gridHeader,
    weekday,
    gridBody,
    cell,
    cellEmpty,
    eventList,
    eventItemHeight,
  } = calendar({ size, hoverEffect: enableHover });

  const [currentMonth, setCurrentMonth] = useState(defaultMonth);
  const totalDays = getDaysInMonth(currentMonth);
  const startDayIndex = getDay(startOfMonth(currentMonth));
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  const handlePrevMonth = () => setCurrentMonth((prev) => subMonths(prev, 1));
  const handleNextMonth = () => setCurrentMonth((prev) => addMonths(prev, 1));

  const eventsByDate = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    const mStart = startOfMonth(currentMonth);
    const mEnd = endOfMonth(currentMonth);

    const relevantEvents = events.filter((event) => {
      const { start, end } = getEventRange(event);
      return start <= mEnd && end >= mStart;
    });

    for (const event of relevantEvents) {
      const { start, end } = getEventRange(event);
      let d = start < mStart ? mStart : start;
      const eventEndDate = end > mEnd ? mEnd : end;

      while (d <= eventEndDate) {
        const dateKey = formatDateStr(d);
        const dailyEvents = map.get(dateKey) ?? [];
        map.set(dateKey, [...dailyEvents, event]);
        d = addDays(d, 1);
      }
    }
    return map;
  }, [currentMonth, events]);

  return (
    <Box className={wrapper({ className })}>
      <Box className={layoutContainer()}>
        <Grid columns={7} className={header()}>
          <Flex className={navContainerLeft()}>
            <button
              onClick={handlePrevMonth}
              className={navButton()}
              type="button"
            >
              <ChevronLeft className={navIcon()} />
            </button>
          </Flex>
          <Box className="col-span-5 flex items-center justify-center">
            <span className={caption()}>
              {format(currentMonth, 'yyyy년 M월', { locale: ko })}
            </span>
          </Box>
          <Flex className={navContainerRight()}>
            <button
              onClick={handleNextMonth}
              className={navButton()}
              type="button"
            >
              <ChevronRight className={navIcon()} />
            </button>
          </Flex>
        </Grid>

        <Grid columns={7} className={gridHeader()}>
          {weekDays.map((day) => (
            <Flex
              key={day}
              justify="center"
              align="center"
              className={weekday()}
            >
              {day}
            </Flex>
          ))}
        </Grid>

        <Grid columns={7} className={gridBody()}>
          {Array.from({ length: startDayIndex }).map((_, i) => (
            <Box key={`empty-${i}`} className={cellEmpty()} />
          ))}

          {Array.from({ length: totalDays }).map((_, i) => {
            const day = i + 1;
            const currentDate = new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              day,
            );
            const dateKey = formatDateStr(currentDate);

            const daysEvents = eventsByDate.get(dateKey) || [];

            const isToday = showToday && isSameDay(currentDate, today);
            const isStart =
              selectedStartDate && isSameDay(currentDate, selectedStartDate);
            const isEnd =
              selectedEndDate && isSameDay(currentDate, selectedEndDate);
            const isBetween =
              selectedStartDate &&
              selectedEndDate &&
              isWithinInterval(currentDate, {
                start: selectedStartDate,
                end: selectedEndDate,
              }) &&
              !isStart &&
              !isEnd;

            let selectionState:
              | 'none'
              | 'today'
              | 'selected'
              | 'range'
              | 'rangeStart'
              | 'rangeEnd' = 'none';
            if (isStart) selectionState = 'selected';
            else if (isEnd) selectionState = 'selected';
            else if (isBetween) selectionState = 'range';
            else if (isToday) selectionState = 'today';

            return (
              <Flex
                key={day}
                direction="column"
                align="center"
                justify="start"
                className={cell()}
                onClick={() => onDateClick?.(currentDate)}
              >
                <span className={calendar({ selectionState }).dayNumber()}>
                  {day}
                </span>
                <Flex className={eventList()}>
                  {daysEvents.map((ev, idx) => {
                    const { start, end } = getEventRange(ev);

                    const currentDayIndex = getDay(currentDate);
                    const weekStart = subDays(currentDate, currentDayIndex);
                    const weekEnd = addDays(currentDate, 6 - currentDayIndex);

                    const segmentStart = start < weekStart ? weekStart : start;
                    const segmentEnd = end > weekEnd ? weekEnd : end;
                    const segmentDuration =
                      differenceInCalendarDays(segmentEnd, segmentStart) + 1;
                    const indexInSegment = differenceInCalendarDays(
                      currentDate,
                      segmentStart,
                    );

                    const targetIndex = Math.floor((segmentDuration - 1) / 2);
                    const isRenderCell = indexInSegment === targetIndex;

                    const startDateKey = formatDateStr(start);
                    const endDateKey = formatDateStr(end);
                    const isStartEvent = dateKey === startDateKey;
                    const isEndEvent = dateKey === endDateKey;
                    const isSingleDay = startDateKey === endDateKey;

                    return (
                      <div
                        key={`${ev.id}-${idx}`}
                        className={mergeStyles([
                          'relative w-full',
                          eventItemHeight(),
                          eventBarStyles.variants[ev.type],
                          isSingleDay
                            ? 'mx-[2px] !w-[calc(100%-4px)] rounded-[4px]'
                            : '',
                          !isSingleDay && isStartEvent
                            ? 'mr-0 ml-[2px] !w-[calc(100%-2px)] rounded-l-[4px] rounded-r-none'
                            : '',
                          !isSingleDay && isEndEvent
                            ? 'mr-[2px] ml-0 !w-[calc(100%-2px)] rounded-l-none rounded-r-[4px]'
                            : '',
                          !isSingleDay && !isStartEvent && !isEndEvent
                            ? 'mx-0 w-full rounded-none'
                            : '',
                        ])}
                        onClick={(e) => {
                          e.stopPropagation();
                          onEventClick?.(ev);
                        }}
                      >
                        {isRenderCell && (
                          <div className={eventBarStyles.textWrapper}>
                            <span className="block w-full truncate px-1 text-center">
                              {ev.title}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </Flex>
              </Flex>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
Calendar.displayName = 'Calendar';
