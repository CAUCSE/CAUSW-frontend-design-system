import { useMemo, useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  addDays,
  subDays,
  getDay,
  isSameDay,
  isWithinInterval,
  differenceInCalendarDays,
  isSameMonth,
} from 'date-fns';
import { ko } from 'date-fns/locale';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { Grid } from '../Grid';
import { ChevronLeft, ChevronRight } from '@causw/icons';

import {
  calendar,
  eventBarStyles,
  type EventBarStylesVariants,
  type CalendarVariants,
} from './Calendar.styles';
import { mergeStyles } from '../../utils';

export type CalendarEvent = {
  id: string | number;
  title: string;
  startDate: string;
  endDate?: string;
  color: NonNullable<EventBarStylesVariants['color']>;
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
  onPrevMonth?: (date: Date) => void;
  onNextMonth?: (date: Date) => void;
  enableHover?: boolean;
  /** 월을 외부에서 제어할 때 사용. 넘기면 controlled로 동작한다. */
  month?: Date;
  /** controlled/uncontrolled 모두에서 월이 바뀔 때 호출 */
  onMonthChange?: (date: Date) => void;
  /** 내부 헤더를 숨긴다. Calendar.Nav를 밖으로 끌어올려 쓸 때 사용 */
  hideHeader?: boolean;
  headerAction?: React.ReactNode;
  banner?: React.ReactNode;
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

export interface CalendarNavProps extends Pick<CalendarVariants, 'size'> {
  month: Date;
  onMonthChange: (date: Date) => void;
  headerAction?: React.ReactNode;
  className?: string;
}

/**
 * 월 표시 + 이전/다음 네비게이션
 *
 * Calendar 내부에서 쓰이지만, 모바일 홈화면처럼 헤더를 캘린더 밖으로 끌어올려
 * sticky 고정해야 할 때 단독으로 사용할 수 있다.
 * 이 경우 Calendar에 `hideHeader`와 `month`/`onMonthChange`를 함께 넘긴다.
 */
const CalendarNav = ({
  month,
  onMonthChange,
  headerAction,
  size,
  className,
}: CalendarNavProps) => {
  const { header, headerActions, navGroup, navButton, navIcon, caption } =
    calendar({ size });

  return (
    <Box className={header({ className })}>
      <Flex className={navGroup()}>
        <button
          onClick={() => onMonthChange(subMonths(month, 1))}
          className={navButton()}
          type="button"
          aria-label="이전 달"
        >
          <ChevronLeft color="gray-400" className={navIcon()} />
        </button>
        <span className={caption()}>
          {format(month, 'yyyy년 M월', { locale: ko })}
        </span>
        <button
          onClick={() => onMonthChange(addMonths(month, 1))}
          className={navButton()}
          type="button"
          aria-label="다음 달"
        >
          <ChevronRight color="gray-400" className={navIcon()} />
        </button>
      </Flex>
      {headerAction && <Box className={headerActions()}>{headerAction}</Box>}
    </Box>
  );
};
CalendarNav.displayName = 'Calendar.Nav';

const CalendarRoot = ({
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
  onPrevMonth,
  onNextMonth,
  enableHover = false,
  month,
  onMonthChange,
  hideHeader = false,
  headerAction,
  banner,
}: CalendarProps) => {
  const {
    wrapper,
    layoutContainer,
    bannerArea,
    gridHeader,
    weekday,
    gridBody,
    cell,
    cellSemiTransparent,
    eventList,
    eventItemHeight,
  } = calendar({ size, hoverEffect: enableHover });

  const [uncontrolledMonth, setUncontrolledMonth] = useState(defaultMonth);
  const isMonthControlled = month !== undefined;
  const currentMonth = isMonthControlled ? month : uncontrolledMonth;

  const monthStart = useMemo(() => startOfMonth(currentMonth), [currentMonth]);
  const monthEnd = useMemo(() => endOfMonth(currentMonth), [currentMonth]);

  const gridStart = useMemo(
    () => subDays(monthStart, getDay(monthStart)),
    [monthStart],
  );
  const gridEnd = useMemo(
    () => addDays(monthEnd, 6 - getDay(monthEnd)),
    [monthEnd],
  );

  const visibleDays = useMemo(() => {
    const days: Date[] = [];
    for (let d = gridStart; d <= gridEnd; d = addDays(d, 1)) days.push(d);
    return days;
  }, [gridStart, gridEnd]);

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  const handleMonthChange = (next: Date) => {
    if (!isMonthControlled) setUncontrolledMonth(next);
    onMonthChange?.(next);
    if (next < currentMonth) onPrevMonth?.(next);
    else onNextMonth?.(next);
  };
  const eventsByDate = useMemo(() => {
    const map = new Map<string, (CalendarEvent | null)[]>();

    const weeks: { start: Date; end: Date }[] = [];
    let curr = gridStart;
    while (curr <= gridEnd) {
      weeks.push({ start: curr, end: addDays(curr, 6) });
      curr = addDays(curr, 7);
    }

    for (const week of weeks) {
      const { start: wStart, end: wEnd } = week;

      const weeklyEvents = events.filter((event) => {
        const { start, end } = getEventRange(event);
        return start <= wEnd && end >= wStart;
      });

      weeklyEvents.sort((a, b) => {
        const aRange = getEventRange(a);
        const bRange = getEventRange(b);

        const aSegStart = aRange.start < wStart ? wStart : aRange.start;
        const bSegStart = bRange.start < wStart ? wStart : bRange.start;
        const startDiff = aSegStart.getTime() - bSegStart.getTime();
        if (startDiff !== 0) return startDiff;

        const aIsSingle = aRange.start.getTime() === aRange.end.getTime();
        const bIsSingle = bRange.start.getTime() === bRange.end.getTime();
        if (aIsSingle && !bIsSingle) return -1;
        if (!aIsSingle && bIsSingle) return 1;

        const aDur = differenceInCalendarDays(aRange.end, aRange.start);
        const bDur = differenceInCalendarDays(bRange.end, bRange.start);
        if (aDur !== bDur) return bDur - aDur;

        return a.id.toString().localeCompare(b.id.toString());
      });

      for (const event of weeklyEvents) {
        const { start, end } = getEventRange(event);
        const segStart = start < wStart ? wStart : start;
        const segEnd = end > wEnd ? wEnd : end;

        let slot = 0;
        let found = false;
        while (!found) {
          let isFree = true;
          let tempD = new Date(segStart);
          while (tempD <= segEnd) {
            const dateKey = formatDateStr(tempD);
            const dailySlots = map.get(dateKey) || [];
            if (dailySlots[slot]) {
              isFree = false;
              break;
            }
            tempD = addDays(tempD, 1);
          }
          if (isFree) found = true;
          else slot++;
        }

        let assignD = new Date(segStart);
        while (assignD <= segEnd) {
          const dateKey = formatDateStr(assignD);
          const dailySlots = map.get(dateKey) || [];
          while (dailySlots.length <= slot) dailySlots.push(null);
          dailySlots[slot] = event;
          map.set(dateKey, dailySlots);
          assignD = addDays(assignD, 1);
        }
      }
    }
    return map;
  }, [monthStart, monthEnd, events]);
  return (
    <Box className={wrapper({ className })}>
      <Box className={layoutContainer()}>
        {!hideHeader && (
          <CalendarNav
            month={currentMonth}
            onMonthChange={handleMonthChange}
            headerAction={headerAction}
            size={size}
          />
        )}

        {banner && <Box className={bannerArea()}>{banner}</Box>}

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
          {visibleDays.map((currentDate) => {
            const day = currentDate.getDate();
            const dateKey = formatDateStr(currentDate);
            const isCurrentDateInMonth = isSameMonth(currentDate, currentMonth);

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
              | 'weekend'
              | 'selected'
              | 'range'
              | 'rangeStart'
              | 'rangeEnd' = 'none';
            if (isStart) selectionState = 'selected';
            else if (isEnd) selectionState = 'selected';
            else if (isBetween) selectionState = 'range';
            else if (isToday) selectionState = 'today';
            else if (getDay(currentDate) % 6 === 0) selectionState = 'weekend';

            return (
              <Flex
                key={dateKey}
                direction="column"
                align="center"
                justify="start"
                className={mergeStyles(
                  cell(),
                  !isCurrentDateInMonth && cellSemiTransparent(),
                )}
                onClick={() => onDateClick?.(currentDate)}
              >
                <span className={calendar({ selectionState }).dayNumber()}>
                  {day}
                </span>
                <Flex className={eventList()}>
                  {daysEvents.map((ev, idx) => {
                    if (!ev) {
                      return (
                        <div
                          key={`empty-${idx}`}
                          className={eventItemHeight()}
                        />
                      );
                    }

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

                    const startDateKey = formatDateStr(start);
                    const endDateKey = formatDateStr(end);
                    const isStartEvent = dateKey === startDateKey;
                    const isEndEvent = dateKey === endDateKey;
                    const isSingleDay = startDateKey === endDateKey;

                    const blockPosition: 'single' | 'start' | 'end' | 'middle' =
                      isSingleDay
                        ? 'single'
                        : isStartEvent
                          ? 'start'
                          : isEndEvent
                            ? 'end'
                            : 'middle';
                    const {
                      wrapper: eventWrapper,
                      bgBar,
                      textLayer,
                      textSpan,
                    } = eventBarStyles({
                      size,
                      color: ev.color,
                      position: blockPosition,
                    });

                    return (
                      <div
                        key={`${ev.id}-${idx}`}
                        className={mergeStyles(
                          eventWrapper(),
                          eventItemHeight(),
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          onEventClick?.(ev);
                        }}
                      >
                        <div className={bgBar()} />
                        {indexInSegment === 0 && (
                          <div
                            className={textLayer()}
                            style={{
                              width: `calc(${segmentDuration} * 100%)`,
                              left: 0,
                            }}
                          >
                            <span className={textSpan()}>{ev.title}</span>
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
CalendarRoot.displayName = 'Calendar';

export const Calendar = Object.assign(CalendarRoot, {
  Nav: CalendarNav,
});
