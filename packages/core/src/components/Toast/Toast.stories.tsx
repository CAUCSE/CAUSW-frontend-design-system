import type { Meta, StoryContext, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { Toast, ToastProvider, ToastViewport } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  subcomponents: { ToastProvider, ToastViewport },
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        transform: (
          _code: string,
          storyContext: StoryContext<React.ComponentProps<typeof Toast>>,
        ) => {
          const { args } = storyContext;
          return `
            const [open, setOpen] = useState(false);

            return (
              <ToastProvider>
                <Toast 
                  open={open} 
                  onOpenChange={setOpen} 
                  message="${args.message}"
                  ${args.duration ? `duration={${args.duration}}` : ''}
                />
                <ToastViewport />
              </ToastProvider>
              )`;
        },
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
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
    message: { type: 'string', control: 'text' },
    open: { type: 'boolean', control: 'boolean' },
    duration: {
      control: { type: 'number', min: 1000, step: 1000 },
      description: '토스트가 떠있는 시간(ms)입니다.',
    },
    icon: {
      control: false,
      description: '토스트 메시지 좌측에 표시할 아이콘 컴포넌트입니다.',
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

const CheckColoredIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99912 7.09456e-06C11.3127 -0.00156051 12.6137 0.256671 13.8273 0.759334C15.0403 1.2618 16.1421 1.99939 17.0695 2.92871L17.4093 3.28429C18.1806 4.13352 18.8007 5.11059 19.2407 6.17271C19.7431 7.38577 20.0013 8.68614 20 9.99912L19.9877 10.4905C19.9326 11.6362 19.6806 12.7652 19.2407 13.8273C18.7382 15.0403 17.9997 16.1412 17.0704 17.0687L17.0713 17.0695C16.1435 17.9997 15.0411 18.7379 13.8273 19.2407C12.6137 19.7433 11.3127 20.0016 9.99912 20C8.68614 20.0013 7.38577 19.7431 6.17271 19.2407C4.95893 18.7379 3.85655 17.9997 2.92871 17.0695C1.99959 16.1422 1.26172 15.0401 0.759334 13.8273C0.256671 12.6137 -0.00156051 11.3127 7.09456e-06 9.99912C-0.00132922 8.68614 0.256894 7.38577 0.759334 6.17271C1.26212 4.95893 2.00031 3.85655 2.93047 2.92871C3.85793 1.99939 4.95969 1.2618 6.17271 0.759334C7.38577 0.256894 8.68614 -0.00132934 9.99912 7.09456e-06Z"
      fill="#3ED06C"
    />
    <path
      d="M13.3513 6.53326C13.7596 6.12498 14.4221 6.12498 14.8304 6.53326C15.2386 6.94153 15.2386 7.60403 14.8304 8.0123L9.37581 13.4668C9.17975 13.6629 8.91356 13.7731 8.63628 13.7731C8.35901 13.7731 8.09282 13.6629 7.89676 13.4668L5.16949 10.7396C4.76121 10.3313 4.76121 9.6688 5.16949 9.26053C5.57776 8.85225 6.24026 8.85225 6.64854 9.26053L8.63628 11.2483L13.3513 6.53326Z"
      fill="#F5F6F8"
    />
  </svg>
);

export const WithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '**Icon Prop**을 사용하여 메시지 좌측에 아이콘을 함께 표시하는 예제입니다.',
      },
    },
  },
  args: {
    message: '토스트 알림이에요',
    icon: <CheckColoredIcon size={20} />,
    open: true,
  },
  render: (args) => <InteractiveToast {...args} />,
};
