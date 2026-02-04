import React, { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PullToRefresh } from './PullToRefresh';
import { Tab } from '../Tab/Tab'; // Tab 컴포넌트 경로를 확인해주세요.
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

/**
 * 1. 기본 카드 데모
 */
export const Card_Demo: Story = {
  // 에러 해결: 필수 props인 onRefresh와 children을 args에 정의
  args: {
    onRefresh: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    children: null,
  },
  render: (args) => {
    const [text, setText] = useState(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem deserunt reprehenderit ducimus sunt. Quod laudantium excepturi tempora fuga repellendus accusantium nam maiores? Quas debitis, neque ullam eligendi minus sit?',
    );

    const handleRefresh = useCallback(async () => {
      fn()('새로고침 시작...');
      await args.onRefresh?.();

      setText((prev) =>
        prev.startsWith('Updated')
          ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem deserunt reprehenderit ducimus sunt.'
          : 'Updated! ' + prev,
      );
      fn()('새로고침 완료!');
    }, [args]);

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

/**
 * 2. 탭 결합 데모 (리뷰어 요청 반영)
 */
export const With_Tabs_Demo: Story = {
  // 에러 해결: render 함수를 사용할 때도 필수 args 정의가 필요합니다.
  args: {
    onRefresh: async () => {},
    children: null,
  },
  render: (args) => {
    const [feeds, setFeeds] = useState<{ [key: string]: string[] }>({
      home: [
        '🏠 홈 피드: 새로운 소식을 확인하세요.',
        '오늘의 추천 컨텐츠입니다.',
      ],
      trending: ['🔥 인기 급상승: 지금 가장 핫한 주제', '실시간 검색어 순위'],
    });

    const handleRefresh = useCallback(async (tabId: string) => {
      fn()(`${tabId} 탭 데이터를 불러오는 중...`);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFeeds((prev) => ({
        ...prev,
        [tabId]: [
          `✨ [${tabId.toUpperCase()}] 새로고침 완료 (${new Date().toLocaleTimeString()})`,
          ...prev[tabId],
        ],
      }));

      fn()(`${tabId} 탭 업데이트 성공`);
    }, []);

    return (
      <div className="relative flex h-[600px] w-[375px] flex-col overflow-hidden rounded-[40px] border-[8px] border-gray-900 bg-gray-50 shadow-2xl">
        <div className="h-6 w-full bg-white" />

        <Tab.Root defaultValue="home" className="flex h-full flex-col">
          <div className="shrink-0 bg-white shadow-sm">
            <div className="py-4 text-center font-bold text-gray-900">
              모바일 피드
            </div>
            <Tab.List className="flex border-b border-gray-100 px-4">
              <Tab.TabItem
                value="home"
                className="flex-1 py-3 text-sm font-bold transition-all aria-selected:border-b-2 aria-selected:border-blue-500 aria-selected:text-blue-600"
              >
                추천
              </Tab.TabItem>
              <Tab.TabItem
                value="trending"
                className="flex-1 py-3 text-sm font-bold transition-all aria-selected:border-b-2 aria-selected:border-blue-500 aria-selected:text-blue-600"
              >
                트렌딩
              </Tab.TabItem>
            </Tab.List>
          </div>

          <div className="flex-1 overflow-hidden">
            <Tab.Content value="home" className="h-full" forceMount>
              <PullToRefresh
                {...args}
                onRefresh={() => handleRefresh('home')}
                className="h-full bg-gray-50"
              >
                <div className="flex flex-col gap-4 p-4">
                  {feeds.home.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                    >
                      <p className="text-sm text-gray-800">{item}</p>
                      <div className="mt-3 h-2 w-20 rounded bg-gray-100" />
                    </div>
                  ))}
                </div>
              </PullToRefresh>
            </Tab.Content>

            <Tab.Content value="trending" className="h-full" forceMount>
              <PullToRefresh
                {...args}
                onRefresh={() => handleRefresh('trending')}
                className="h-full bg-gray-50"
              >
                <div className="flex flex-col gap-4 p-4">
                  {feeds.trending.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                    >
                      <p className="text-sm text-gray-800">{item}</p>
                      <div className="mt-3 h-2 w-32 rounded bg-gray-100" />
                    </div>
                  ))}
                </div>
              </PullToRefresh>
            </Tab.Content>
          </div>
        </Tab.Root>

        <div className="flex h-8 w-full items-center justify-center bg-white">
          <div className="h-1 w-32 rounded-full bg-gray-200" />
        </div>
      </div>
    );
  },
};
