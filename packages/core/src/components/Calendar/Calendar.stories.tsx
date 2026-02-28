import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState, useEffect } from 'react';
import { isBefore } from 'date-fns';
import { Calendar, type CalendarEvent } from './Calendar';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    today: { control: 'date' },
    events: { control: 'object' },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', undefined],
      description:
        'undefined(Auto)일 때는 화면 크기에 따라 반응형으로 동작합니다.',
    },
    selectedStartDate: { control: 'date' },
    selectedEndDate: { control: 'date' },
  },
  args: {
    onDateClick: fn() as unknown as (date: Date) => void,
    onEventClick: fn() as unknown as (event: CalendarEvent) => void,
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockEvents: CalendarEvent[] = [
  { id: 1, title: '개천절', startDate: '2025-10-03', type: 'holiday' },
  { id: 2, title: '추석', startDate: '2025-10-06', type: 'holiday' },
  { id: 3, title: '수도권', startDate: '2025-10-07', type: 'event' },
  { id: 4, title: '모꼬지', startDate: '2025-10-08', type: 'event' },
  { id: 5, title: '한글날', startDate: '2025-10-09', type: 'holiday' },
  { id: 6, title: '크자회', startDate: '2025-10-09', type: 'event' },
  {
    id: 7,
    title: '중간고사',
    startDate: '2025-10-27',
    endDate: '2025-10-29',
    type: 'event',
  },
  { id: 8, title: '팀 회의', startDate: '2025-10-23', type: 'event' },
  {
    id: 9,
    title: '1text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-11',
    endDate: '2025-10-23',
    type: 'event',
  },
  {
    id: 10,
    title: '2text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-18',
    endDate: '2025-10-26',
    type: 'event',
  },
  {
    id: 11,
    title: '3text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-21',
    endDate: '2025-10-26',
    type: 'event',
  },
  {
    id: 12,
    title: '4text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-15',
    endDate: '2025-10-27',
    type: 'event',
  },
  {
    id: 13,
    title: '5text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-11',
    endDate: '2025-10-22',
    type: 'event',
  },
  {
    id: 14,
    title: '6text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-11',
    endDate: '2025-10-23',
    type: 'event',
  },
  {
    id: 15,
    title: '7text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-10-11',
    endDate: '2025-11-03',
    type: 'event',
  },
  {
    id: 16,
    title: '8text 긴 텍스트 테스트긴 텍스트 테스트 긴 텍스트 테스트',
    startDate: '2025-11-01',
    endDate: '2025-11-07',
    type: 'event',
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

export const Fixed_LG: Story = {
  args: { ...Default_Responsive.args, size: 'lg' },
};

const manyEvents: CalendarEvent[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `scroll-${i}`,
  title: `스크롤 테스트 일정 ${i + 1}`,
  startDate: '2025-10-15',
  type: i % 2 === 0 ? 'event' : 'important',
}));

export const Scroll_Test: Story = {
  args: {
    ...Default_Responsive.args,
    defaultMonth: new Date(2025, 9, 1),
    events: [...mockEvents, ...manyEvents],
  },
  parameters: {
    docs: {
      description: {
        story:
          '하루에 이벤트가 4개 이상일 경우, 영역이 늘어나지 않고 스크롤이 생기는지 확인합니다.',
      },
    },
  },
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
