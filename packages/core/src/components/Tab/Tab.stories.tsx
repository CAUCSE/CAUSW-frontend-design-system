import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';
import { useState } from 'react';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const CombinedTabs: Story = {
  render: () => {
    const [mainTab, setMainTab] = useState('all');
    const [subTab, setSubTab] = useState('total');

    return (
      <div className="flex w-100 flex-col gap-6 bg-gray-50 p-4">
        {/* 상단 Underline Tab */}
        <Tab variant="underline" value={mainTab} onValueChange={setMainTab}>
          <Tab.Item value="all">전체 경조사</Tab.Item>
          <Tab.Item value="my">내 경조사</Tab.Item>
        </Tab>

        {/* 하단 Chip Tab - 조건부 렌더링 가능 */}
        <Tab variant="chip" value={subTab} onValueChange={setSubTab}>
          {mainTab === 'all' ? (
            <>
              <Tab.Item value="total">전체</Tab.Item>
              <Tab.Item value="wedding">결혼</Tab.Item>
              <Tab.Item value="funeral">장례</Tab.Item>
            </>
          ) : (
            <>
              <Tab.Item value="done">등록 완료</Tab.Item>
              <Tab.Item value="waiting">등록 대기중</Tab.Item>
            </>
          )}
        </Tab>
      </div>
    );
  },
};
