import React, { useMemo, useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  addDays,
  getDay,
  getDaysInMonth,
  isSameDay,
  differenceInDays,
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

const CELL_GAP_PX = 4;

export type CalendarEvent = {
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
  size,
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
  } = calendar({ size });

  const [currentMonth, setCurrentMonth] = useState(defaultMonth);
  const monthStart = startOfMonth(currentMonth);
  const totalDays = getDaysInMonth(currentMonth);
  const startDayIndex = getDay(monthStart);
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
        {/* 1. 헤더 */}
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

        {/* 2. 요일 헤더 */}
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

        {/* 3. 날짜 그리드 */}
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
            const dayIndex = getDay(currentDate);
            const isTodayDate = isSameDay(currentDate, today);
            const daysEvents = eventsByDate.get(dateKey) || [];

            return (
              <Flex
                key={day}
                direction="column"
                align="center"
                justify="start"
                className={cell()}
              >
                <span
                  className={calendar({ isToday: isTodayDate }).dayNumber()}
                >
                  {day}
                </span>

                <Flex className={eventList()}>
                  {daysEvents.map((ev, idx) => {
                    const { start, end } = getEventRange(ev);
                    const startDateKey = formatDateStr(start);
                    const endDateKey = formatDateStr(end);
                    const isStart = dateKey === startDateKey;
                    const isEnd = dateKey === endDateKey;
                    const isSingleDay = startDateKey === endDateKey;
                    const isSunday = dayIndex === 0;

                    const daysLeftInWeek = 7 - dayIndex;
                    const daysLeftInEvent =
                      differenceInDays(end, currentDate) + 1;
                    const span = Math.min(daysLeftInWeek, daysLeftInEvent);
                    const shouldRenderText = isSingleDay || isStart || isSunday;

                    return (
                      <div
                        key={`${ev.title}-${ev.startDate}-${idx}`}
                        className={mergeStyles([
                          'relative',
                          eventItemHeight(),
                          eventBarStyles.variants[ev.type],
                          isSingleDay ? 'mx-[2px] rounded-[4px]' : '',
                          !isSingleDay && isStart
                            ? 'ml-[2px] rounded-l-[4px] rounded-r-none'
                            : '',
                          !isSingleDay && isEnd
                            ? 'mr-[2px] rounded-l-none rounded-r-[4px]'
                            : '',
                          !isSingleDay && !isStart && !isEnd
                            ? 'mx-0 rounded-none'
                            : '',
                        ])}
                      >
                        {shouldRenderText && (
                          <div
                            className={eventBarStyles.textWrapper}
                            style={{
                              width:
                                span > 1
                                  ? `calc(${span * 100}% + ${(span - 1) * CELL_GAP_PX}px)`
                                  : '100%',
                            }}
                          >
                            {ev.title}
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
