import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { Toast, ToastProvider, ToastViewport } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider swipeDirection="down">
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default'],
    },
    message: { control: 'text' },
    open: { control: 'boolean' },
    duration: {
      control: { type: 'number', min: 1000, step: 1000 },
      description: '토스트가 떠있는 시간(ms)입니다.',
    },
  },
  args: {
    message: '토스트 알림이에요',
    variant: 'default',
    duration: 5000,
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const InteractiveToast = (args: React.ComponentProps<typeof Toast>) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (args.open !== undefined) setOpen(args.open);
  }, [args.open]);

  return (
    <>
      <button
        onClick={() => {
          setOpen(false);
          setTimeout(() => setOpen(true), 100);
        }}
        className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200"
      >
        Show Toast
      </button>
      <Toast {...args} open={open} onOpenChange={setOpen} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <InteractiveToast {...args} />,
};

export const Opened: Story = {
  args: {
    message: '사물함 등록이 완료되었습니다.',
    variant: 'default',
    open: true,
  },

  render: (args) => <InteractiveToast {...args} />,
};

export const FastDismiss: Story = {
  args: {
    message: '1.5초 뒤에 자동으로 사라집니다.',
    duration: 1500,
    open: true,
  },
  render: (args) => <InteractiveToast {...args} />,
};
