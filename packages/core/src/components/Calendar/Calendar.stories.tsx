import type { Meta, StoryObj } from '@storybook/react';
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
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockEvents: CalendarEvent[] = [
  { title: '개천절', startDate: '2025-10-03', type: 'holiday' },
  { title: '추석', startDate: '2025-10-06', type: 'holiday' },
  { title: '수도권', startDate: '2025-10-07', type: 'event' },
  { title: '모꼬지', startDate: '2025-10-08', type: 'event' },
  { title: '한글날', startDate: '2025-10-09', type: 'holiday' },
  { title: '크자회', startDate: '2025-10-09', type: 'event' },
  {
    title: '중간고사',
    startDate: '2025-10-16',
    endDate: '2025-10-18',
    type: 'event',
  },
  { title: '팀 회의', startDate: '2025-10-25', type: 'event' },
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
