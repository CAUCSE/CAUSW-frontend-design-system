import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
      description: '스피너의 크기를 조절합니다.',
    },
    color: {
      control: 'radio',
      options: ['primary', 'white', 'gray', 'black'],
      description: '스피너의 색상을 변경합니다.',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
};

export const All_Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">sm (16px)</span>
        <Spinner size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">md (24px)</span>
        <Spinner size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">lg (32px)</span>
        <Spinner size="lg" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">xl (48px)</span>
        <Spinner size="xl" />
      </div>
    </div>
  ),
};

export const All_Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">primary</span>
        <Spinner color="primary" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">gray</span>
        <Spinner color="gray" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400">black</span>
        <Spinner color="black" />
      </div>
      <div className="flex flex-col items-center gap-2 rounded bg-gray-800 p-2">
        <span className="text-xs text-gray-400">white</span>
        <Spinner color="white" />
      </div>
    </div>
  ),
};
