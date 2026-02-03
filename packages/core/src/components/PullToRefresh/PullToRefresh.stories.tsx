import React, { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PullToRefresh } from './PullToRefresh';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/PullToRefresh',
  component: PullToRefresh,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    threshold: {
      control: { type: 'number', min: 40, max: 100 },
      description: '새로고침이 트리거되기 위해 당겨야 하는 거리(px)',
    },
  },
} satisfies Meta<typeof PullToRefresh>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card_Demo: Story = {
  args: {
    onRefresh: async () => {},
    children: null,
  },
  render: (args) => {
    const [text, setText] = useState(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem deserunt reprehenderit ducimus sunt. Quod laudantium excepturi tempora fuga repellendus accusantium nam maiores? Quas debitis, neque ullam eligendi minus sit?',
    );

    const handleRefresh = useCallback(async () => {
      fn()('새로고침 시작...');

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setText((prev) =>
        prev.startsWith('Updated')
          ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem deserunt reprehenderit ducimus sunt.'
          : 'Updated! ' + prev,
      );

      fn()('새로고침 완료!');
    }, []);

    return (
      <div className="relative flex h-[500px] w-[360px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
        <div className="z-20 shrink-0 border-b border-gray-100 bg-white py-4 text-center font-bold text-gray-800 shadow-sm">
          Pull To Refresh
        </div>

        <PullToRefresh {...args} onRefresh={handleRefresh} className="bg-white">
          <div className="p-6 text-sm leading-relaxed text-gray-700 select-none">
            {text}
            <div className="mt-4 text-center text-xs text-gray-400">
              (개발자 도구 F12를 켜고
              <br />
              모바일 모드에서 당겨보세요)
            </div>
          </div>
        </PullToRefresh>
      </div>
    );
  },
};
