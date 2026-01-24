import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { Toaster } from './Toaster';
import { toast } from './toastStore';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default'],
      description: '토스트의 스타일 변형입니다. (현재 default만 존재)',
      table: {
        type: { summary: 'string' },
      },
    },
    message: {
      type: 'string',
      control: 'text',
      description: '표시할 메시지 내용입니다.',
    },
    duration: {
      control: { type: 'number', min: 1000, step: 1000 },
      description: '토스트가 떠있는 시간(ms)입니다.',
      table: {
        defaultValue: { summary: '3000' },
      },
    },
  },
  args: {
    message: '토스트 알림이에요',
    variant: 'default',
    duration: 3000,
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '기본적인 토스트입니다. `toast()` 함수를 호출하여 메시지를 띄웁니다.',
      },
    },
  },
  render: (args) => (
    <>
      <button
        onClick={() => toast(args.message || '', { duration: args.duration })}
        className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200"
      >
        Show Toast
      </button>
      <Toaster />
    </>
  ),
};

export const Success: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '성공 상태를 알립니다. `toast.success()`를 호출하면 성공 아이콘과 함께 렌더링됩니다.',
      },
    },
  },
  render: (args) => (
    <>
      <button
        onClick={() => toast.success(args.message || '')}
        className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200"
      >
        Show Toast
      </button>
      <Toaster />
    </>
  ),
};

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '에러 발생을 알립니다. `toast.error()`를 호출하면 에러 아이콘이 표시됩니다.',
      },
    },
  },
  render: (args) => (
    <>
      <button
        onClick={() => toast.error(args.message || '')}
        className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200"
      >
        Show Toast
      </button>
      <Toaster />
    </>
  ),
};

export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '작업 진행 중임을 알립니다. `toast.loading()`를 호출하면 로딩 스피너가 포함됩니다.',
      },
    },
  },
  render: (args) => (
    <>
      <button
        onClick={() => {
          toast.loading(args.message || '');
        }}
        className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200"
      >
        Show Toast
      </button>
      <Toaster />
    </>
  ),
};
