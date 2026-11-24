import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState, useEffect } from 'react';
import { isBefore } from 'date-fns';
import { Calendar, type CalendarEvent } from './Calendar';
import { Bell, Close, SpeakerColored } from '@causw/icons';
import { Text } from '../Text';
import { VStack } from '../VStack';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  subcomponents: { 'Calendar.Nav': Calendar.Nav },
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    today: { control: 'date' },
    events: { control: 'object' },
    size: {
      control: 'radio',
      options: ['sm', 'md', undefined],
      description:
        'undefined(Auto)일 때는 화면 크기에 따라 반응형으로 동작합니다.',
    },
    selectedStartDate: { control: 'date' },
    selectedEndDate: { control: 'date' },
  },
  args: {
    onDateClick: fn() as unknown as (date: Date) => void,
    onEventClick: fn() as unknown as (event: CalendarEvent) => void,
    onPrevMonth: fn() as unknown as (date: Date) => void,
    onNextMonth: fn() as unknown as (date: Date) => void,
    onMonthChange: fn() as unknown as (date: Date) => void,
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockEvents: CalendarEvent[] = [
  { id: 0, title: '행사', startDate: '2025-09-29', color: 'red' },
  { id: 1, title: '개천절', startDate: '2025-10-03', color: 'red' },
  { id: 2, title: '추석', startDate: '2025-10-06', color: 'red' },
  { id: 3, title: '수도권', startDate: '2025-10-07', color: 'purple' },
  { id: 4, title: '모꼬지', startDate: '2025-10-08', color: 'orange' },
  { id: 5, title: '한글날', startDate: '2025-10-09', color: 'red' },
  { id: 6, title: '크자회', startDate: '2025-10-09', color: 'skyblue' },
  {
    id: 7,
    title: '중간고사',
    startDate: '2025-10-27',
    endDate: '2025-10-29',
    color: 'blue',
  },
  { id: 8, title: '팀 회의', startDate: '2025-10-23', color: 'orange' },
  {
    id: 9,
    title: '1text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-11',
    endDate: '2025-10-23',
    color: 'gray',
  },
  {
    id: 10,
    title: '2text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-18',
    endDate: '2025-10-26',
    color: 'gray',
  },
  {
    id: 11,
    title: '3text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-21',
    endDate: '2025-10-26',
    color: 'gray',
  },
  {
    id: 12,
    title: '4text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-15',
    endDate: '2025-10-27',
    color: 'gray',
  },
  {
    id: 13,
    title: '5text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-11',
    endDate: '2025-10-22',
    color: 'gray',
  },
  {
    id: 14,
    title: '6text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-11',
    endDate: '2025-10-23',
    color: 'gray',
  },
  {
    id: 15,
    title: '7text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-11',
    endDate: '2025-11-03',
    color: 'gray',
  },
  {
    id: 16,
    title: '8text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-11-01',
    endDate: '2025-11-07',
    color: 'gray',
  },
];

export const Default_Responsive: Story = {
  args: {
    className: 'border border-gray-100',
    defaultMonth: new Date(2025, 9, 1),
    today: new Date(2025, 9, 1),
    events: mockEvents,
  },
};

export const Fixed_SM: Story = {
  args: { ...Default_Responsive.args, size: 'sm' },
};

export const Fixed_MD: Story = {
  args: { ...Default_Responsive.args, size: 'md' },
};

export const Interactive_Range_Selection: Story = {
  args: {
    ...Default_Responsive.args,
    selectedStartDate: undefined,
    selectedEndDate: undefined,
  },
  render: (args) => {
    const [startDate, setStartDate] = useState<Date | undefined>(
      args.selectedStartDate,
    );
    const [endDate, setEndDate] = useState<Date | undefined>(
      args.selectedEndDate,
    );

    useEffect(() => {
      setStartDate(args.selectedStartDate);
    }, [args.selectedStartDate]);

    useEffect(() => {
      setEndDate(args.selectedEndDate);
    }, [args.selectedEndDate]);

    const handleDateClick = (date: Date) => {
      if (!startDate || (startDate && endDate)) {
        setStartDate(date);
        setEndDate(undefined);
      } else {
        if (isBefore(date, startDate)) {
          setStartDate(date);
          setEndDate(startDate);
        } else {
          setEndDate(date);
        }
      }
      args.onDateClick?.(date);
    };

    return (
      <Calendar
        {...args}
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        onDateClick={handleDateClick}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          '시작일과 종료일을 클릭하면 파란색 범위가 그려지는 것을 테스트할 수 있습니다.',
      },
    },
  },
};
export const MoveMonth: Story = {
  render: (args) => {
    const handlePrev = (date: Date) => {
      console.log('스토리 레이어 - 이전 달:', date);
      args.onPrevMonth?.(date);
    };

    const handleNext = (date: Date) => {
      console.log('스토리 레이어 - 다음 달:', date);
      args.onNextMonth?.(date);
    };

    return (
      <Calendar {...args} onPrevMonth={handlePrev} onNextMonth={handleNext} />
    );
  },
  args: {
    className: 'border border-gray-100',
    defaultMonth: new Date(2025, 9, 1),
    today: new Date(2025, 9, 1),
    events: mockEvents,
  },
};

export const WithHeaderAction: Story = {
  args: {
    ...Default_Responsive.args,
    size: 'sm',
    headerAction: (
      <button onClick={fn} className="relative cursor-pointer hover:opacity-70">
        <Bell color="gray-400" size={20} />
        <span className="absolute -top-0.5 -right-0.5 size-1.25 rounded-full bg-red-400" />
      </button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'headerAction으로 헤더 오른쪽에 버튼을 넣는 예시입니다. 헤더 flex의 마지막 요소로 오른쪽 끝에 배치됩니다.',
      },
    },
  },
};
export const WithBanner: Story = {
  args: {
    ...Default_Responsive.args,
  },
  render: (args) => {
    const [bannerVisible, setBannerVisible] = useState(true);
    return (
      <Calendar
        {...args}
        banner={
          bannerVisible ? (
            <div className="relative flex items-center rounded-lg bg-gray-100 px-4 py-3">
              <SpeakerColored size={26} className="mr-5 shrink-0" />
              <VStack gap="none">
                <Text typography="subtitle-16-bold" textColor="gray-700">
                  새 알림
                </Text>
                <Text typography="body-14-medium" textColor="gray-400">
                  2학기 학사일정이 업데이트되었습니다.
                </Text>
              </VStack>
              <button
                type="button"
                onClick={() => setBannerVisible(false)}
                aria-label="배너 닫기"
                className="absolute top-3 right-4 shrink-0 cursor-pointer hover:opacity-70"
              >
                <Close size={20} color="gray-400" />
              </button>
            </div>
          ) : undefined
        }
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'banner로 헤더와 달력 그리드 사이에 영역을 넣는 예시입니다. 공지 배너, 안내문 등 서비스에서 필요한 내용을 자유롭게 넣을 수 있습니다.',
      },
    },
  },
};

export const WithStickyHeader: Story = {
  args: {
    ...Default_Responsive.args,
    className: 'border-none',
  },
  render: (args) => {
    const [month, setMonth] = useState(args.defaultMonth ?? new Date());

    return (
      // 홈화면 스크롤 컨테이너
      <div className="h-140 overflow-y-auto rounded-lg border border-gray-100">
        {/* 이 컨테이너가 sticky의 containing block이 되므로,
            캘린더를 지나 아래 섹션까지 스크롤해도 헤더가 상단에 남는다. */}
        <div className="mx-auto max-w-300">
          <div className="z-sticky sticky top-0 bg-white md:static">
            <Calendar.Nav
              month={month}
              onMonthChange={setMonth}
              headerAction={
                <div className="md:hidden">
                  <button
                    onClick={fn()}
                    className="relative cursor-pointer hover:opacity-70"
                  >
                    <Bell color="gray-400" size={20} />
                    <span className="absolute -top-0.5 -right-0.5 size-1.25 rounded-full bg-red-400" />
                  </button>
                </div>
              }
            />
          </div>

          <Calendar
            {...args}
            hideHeader
            month={month}
            onMonthChange={setMonth}
          />

          <div className="m-4 h-45 rounded-lg bg-gray-50" />
        </div>
      </div>
    );
  },
  parameters: {
    viewport: {
      options: {
        mobile: {
          name: 'Mobile (375px)',
          styles: { width: '375px', height: '720px' },
          type: 'mobile',
        },
      },
    },
    docs: {
      description: {
        story:
          '홈화면처럼 캘린더 아래에 다른 컴포넌트가 이어지고, 월 표시 헤더가 상단에 계속 고정되어야 하는 경우입니다. Calendar에 `hideHeader`를 주고 `Calendar.Nav`를 홈화면 컨테이너의 직계 자식으로 올린 뒤 sticky를 걸면, 캘린더 영역을 지나 아래 섹션까지 스크롤해도 헤더가 남습니다. 월 상태는 `month`/`onMonthChange`로 Nav와 Calendar가 공유합니다. `md:static`이 걸려 있어 **768px 미만에서만 고정**되며, 그 이상에서는 일반 헤더처럼 함께 스크롤됩니다 — 확인을 위해 모바일 뷰포트로 열립니다.',
      },
    },
  },
  globals: { viewport: { value: 'mobile' } },
};
