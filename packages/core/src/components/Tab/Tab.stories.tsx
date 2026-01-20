import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Tab } from './Tab';
import { Text } from '../Text';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
};

export default meta;
type Story = StoryObj<typeof Tab>;

const ContentBox = (props: React.PropsWithChildren) => (
  <div className="flex h-35 items-center justify-center rounded-lg border border-gray-200 bg-white">
    {props.children}
  </div>
);

/** 1) Underline만: 탭 전환 + 각 탭별 Panel */
export const UnderlineOnly: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Tab.Root variant="underline" defaultValue="1">
        <Tab.List>
          <Tab.Trigger value="1">라벨1</Tab.Trigger>
          <Tab.Trigger value="2">라벨2</Tab.Trigger>
          <Tab.Trigger value="3">라벨3</Tab.Trigger>
        </Tab.List>

        <Tab.Content value="1">
          <ContentBox>
            <Text typography="body-16-regular">Underline Content 1</Text>
          </ContentBox>
        </Tab.Content>
        <Tab.Content value="2">
          <ContentBox>
            <Text typography="body-16-regular">Underline Content 2</Text>
          </ContentBox>
        </Tab.Content>
        <Tab.Content value="3">
          <ContentBox>
            <Text typography="body-16-regular">Underline Content 3</Text>
          </ContentBox>
        </Tab.Content>
      </Tab.Root>
    </div>
  ),
};

/** 2) Chip만: 필터 탭 느낌 - Content는 “1개만” 두고 선택값 표시 (추천) */
export const ChipOnly: Story = {
  render: () => {
    const [value, setValue] = React.useState<'total' | 'wedding' | 'funeral'>(
      'total',
    );

    return (
      <div style={{ width: 360 }} className="bg-gray-50 p-4">
        <Tab.Root
          variant="chip"
          value={value}
          onValueChange={(val) =>
            setValue(val as 'total' | 'wedding' | 'funeral')
          }
        >
          <Tab.List>
            <Tab.Trigger value="total">전체</Tab.Trigger>
            <Tab.Trigger value="wedding">결혼</Tab.Trigger>
            <Tab.Trigger value="funeral">장례</Tab.Trigger>
          </Tab.List>

          {/* 필터 탭은 보통 이렇게 “단일 content”가 자연스러움 */}
          <Tab.Content value={value}>
            <ContentBox>
              <Text typography="body-16-regular">{`선택된 필터: ${value}`}</Text>
            </ContentBox>
          </Tab.Content>
        </Tab.Root>
      </div>
    );
  },
};

/** 3) 기존 Seed 스타일 예시 (Underline + Content) */
export const TabsPreview: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Tab.Root variant="underline" defaultValue="1">
        <Tab.List>
          <Tab.Trigger value="1">라벨1</Tab.Trigger>
          <Tab.Trigger value="2">라벨2</Tab.Trigger>
          <Tab.Trigger value="3">라벨3</Tab.Trigger>
        </Tab.List>

        <Tab.Content value="1">
          <ContentBox>
            <Text typography="body-16-regular">Content 1</Text>
          </ContentBox>
        </Tab.Content>
        <Tab.Content value="2">
          <ContentBox>
            <Text typography="body-16-regular">Content 2</Text>
          </ContentBox>
        </Tab.Content>
        <Tab.Content value="3">
          <ContentBox>
            <Text typography="body-16-regular">Content 3</Text>
          </ContentBox>
        </Tab.Content>
      </Tab.Root>
    </div>
  ),
};

/** 4) 기존 Combined */
export const CombinedTabs: Story = {
  render: () => {
    const [main, setMain] = React.useState<'all' | 'my'>('all');
    const [sub, setSub] = React.useState(main === 'all' ? 'total' : 'done');

    React.useEffect(() => {
      setSub(main === 'all' ? 'total' : 'done');
    }, [main]);

    return (
      <div className="flex w-90 flex-col gap-6 bg-gray-50 p-4">
        <Tab.Root
          variant="underline"
          value={main}
          onValueChange={(value) => setMain(value as 'all' | 'my')}
        >
          <Tab.List>
            <Tab.Trigger value="all">전체 경조사</Tab.Trigger>
            <Tab.Trigger value="my">내 경조사</Tab.Trigger>
          </Tab.List>
        </Tab.Root>

        <Tab.Root variant="chip" value={sub} onValueChange={setSub}>
          <Tab.List>
            {main === 'all' ? (
              <>
                <Tab.Trigger value="total">전체</Tab.Trigger>
                <Tab.Trigger value="wedding">결혼</Tab.Trigger>
                <Tab.Trigger value="funeral">장례</Tab.Trigger>
              </>
            ) : (
              <>
                <Tab.Trigger value="done">등록 완료</Tab.Trigger>
                <Tab.Trigger value="waiting">등록 대기중</Tab.Trigger>
              </>
            )}
          </Tab.List>

          {/* Combined에서는 “선택값 표시용 단일 Content”가 제일 자연스러움 */}
          <Tab.Panel value={sub}>
            <ContentBox>
              <Text typography="body-16-regular">{`선택: ${main} / ${sub}`}</Text>
            </ContentBox>
          </Tab.Panel>
        </Tab.Root>
      </div>
    );
  },
};
