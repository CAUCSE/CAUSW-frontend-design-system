import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Tab } from './Tab';
import { Text } from '../Text';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
탭(Tab) 컴포넌트입니다.

- underline / chip variant 지원
- controlled / uncontrolled 패턴 지원
- 가로 스크롤 가능 + 선택된 항목으로 스크롤 자동 이동
- active / inactive 스타일 커스터마이즈 가능
        `,
      },
    },
  },
  argTypes: {
    variant: {
      description: '탭 스타일 variant',
      control: 'radio',
      options: ['underline', 'chip'],
    },
    defaultValue: {
      description: 'uncontrolled 상태의 초기 값',
      control: 'text',
    },
    value: {
      description: 'controlled 상태의 현재 값',
      control: 'text',
    },
    onValueChange: {
      description: '탭 변경 시 호출',
      action: 'valueChanged',
    },
    activeClassName: {
      control: 'text',
    },
    inactiveClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

const ContentBox = (props: React.PropsWithChildren) => (
  <div className="flex h-35 items-center justify-center rounded-lg border border-gray-200 bg-white">
    {props.children}
  </div>
);

export const Underline: Story = {
  render: () => (
    <div>
      <Tab.Root variant="underline" defaultValue="3">
        <Tab.List>
          <Tab.TabItem value="1">라벨1</Tab.TabItem>
          <Tab.TabItem value="2">라벨2</Tab.TabItem>
          <Tab.TabItem value="3">라벨3</Tab.TabItem>
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

export const Chip: Story = {
  render: () => {
    const OPTIONS = [
      { value: 'total', label: '전체' },
      { value: 'wedding', label: '결혼' },
      { value: 'funeral', label: '장례' },
    ] as const;

    type TabValue = (typeof OPTIONS)[number]['value'];

    const [value, setValue] = React.useState<TabValue>('total');

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
            {OPTIONS.map((opt) => (
              <Tab.TabItem key={opt.value} value={opt.value}>
                {opt.label}
              </Tab.TabItem>
            ))}
          </Tab.List>

          <Tab.Content value={value}>
            <ContentBox>
              <Text>{`선택된 필터: ${value}`}</Text>
            </ContentBox>
          </Tab.Content>
        </Tab.Root>
      </div>
    );
  },
};

export const CombinedTabs: Story = {
  render: () => {
    const [main, setMain] = React.useState<'all' | 'my'>('all');
    const [sub, setSub] = React.useState(main === 'all' ? 'total' : 'done');

    React.useEffect(() => {
      setSub(main === 'all' ? 'total' : 'done');
    }, [main]);

    return (
      <div className="flex w-full flex-col gap-5 p-8">
        <Tab.Root
          variant="underline"
          value={main}
          onValueChange={(value) => setMain(value as 'all' | 'my')}
        >
          <Tab.List>
            <Tab.TabItem value="all">전체 경조사</Tab.TabItem>
            <Tab.TabItem value="my">내 경조사</Tab.TabItem>
          </Tab.List>
        </Tab.Root>

        <Tab.Root variant="chip" value={sub} onValueChange={setSub}>
          <Tab.List>
            {main === 'all' ? (
              <>
                <Tab.TabItem value="total">전체</Tab.TabItem>
                <Tab.TabItem value="wedding">결혼</Tab.TabItem>
                <Tab.TabItem value="funeral">장례</Tab.TabItem>
              </>
            ) : (
              <>
                <Tab.TabItem value="done">등록 완료</Tab.TabItem>
                <Tab.TabItem value="waiting">등록 대기중</Tab.TabItem>
              </>
            )}
          </Tab.List>

          {/* Combined에서는 “선택값 표시용 단일 Content”가 제일 자연스러움 */}
          <Tab.Content value={sub}>
            <ContentBox>
              <Text typography="body-16-regular">{`선택: ${main} / ${sub}`}</Text>
            </ContentBox>
          </Tab.Content>
        </Tab.Root>
      </div>
    );
  },
};
export const Colored: Story = {
  render: () => {
    const [main, setMain] = React.useState<'all' | 'my'>('all');
    const [sub, setSub] = React.useState(main === 'all' ? 'total' : 'done');

    React.useEffect(() => {
      setSub(main === 'all' ? 'total' : 'done');
    }, [main]);

    return (
      <div className="flex flex-col gap-6 bg-gray-50 p-4">
        <Tab.Root
          variant="underline"
          value={main}
          onValueChange={(value) => setMain(value as 'all' | 'my')}
          activeClassName="text-red-600 border-blue-600"
          inactiveClassName="text-pink-300"
        >
          <Tab.List>
            <Tab.TabItem value="all">전체 경조사</Tab.TabItem>
            <Tab.TabItem value="my">내 경조사</Tab.TabItem>
          </Tab.List>
        </Tab.Root>

        <Tab.Root
          variant="chip"
          value={sub}
          onValueChange={setSub}
          activeClassName="text-red-800 bg-yellow-200"
          inactiveClassName="text-pink-300"
        >
          <Tab.List>
            {main === 'all' ? (
              <>
                <Tab.TabItem value="total">전체</Tab.TabItem>
                <Tab.TabItem value="wedding">결혼</Tab.TabItem>
                <Tab.TabItem value="funeral">장례</Tab.TabItem>
              </>
            ) : (
              <>
                <Tab.TabItem value="done">등록 완료</Tab.TabItem>
                <Tab.TabItem value="waiting">등록 대기중</Tab.TabItem>
              </>
            )}
          </Tab.List>

          {/* Combined에서는 “선택값 표시용 단일 Content”가 제일 자연스러움 */}
          <Tab.Content value={sub}>
            <ContentBox>
              <Text typography="body-16-regular">{`선택: ${main} / ${sub}`}</Text>
            </ContentBox>
          </Tab.Content>
        </Tab.Root>
      </div>
    );
  },
};
export const Multiple: Story = {
  render: () => {
    const [main, setMain] = React.useState<'all' | 'my'>('all');
    const [sub, setSub] = React.useState(main === 'all' ? 'total' : 'done');

    React.useEffect(() => {
      setSub(main === 'all' ? 'total' : 'done');
    }, [main]);

    return (
      <div className="flex w-full flex-col gap-6 bg-gray-50 p-4">
        <Tab.Root
          variant="underline"
          value={main}
          onValueChange={(value) => setMain(value as 'all' | 'my')}
        >
          <Tab.List>
            <Tab.TabItem value="all">전체 경조사</Tab.TabItem>
            <Tab.TabItem value="my-1">내 경조사</Tab.TabItem>
            <Tab.TabItem value="all-1">전체 경조사1</Tab.TabItem>
            <Tab.TabItem value="my-2">내 경조사1</Tab.TabItem>
            <Tab.TabItem value="all-3">전체 경조사2</Tab.TabItem>
            <Tab.TabItem value="my-4">내 경조사2</Tab.TabItem>
          </Tab.List>
        </Tab.Root>

        <Tab.Root variant="chip" value={sub} onValueChange={setSub}>
          <Tab.List>
            {main === 'all' ? (
              <>
                <Tab.TabItem value="total">전체</Tab.TabItem>
                <Tab.TabItem value="wedding">결혼</Tab.TabItem>
                <Tab.TabItem value="funeral">장례</Tab.TabItem>
                <Tab.TabItem value="total-1">전체1</Tab.TabItem>
                <Tab.TabItem value="wedding-1">결혼1</Tab.TabItem>
                <Tab.TabItem value="funeral-1">장례1</Tab.TabItem>
                <Tab.TabItem value="total-2">전체2</Tab.TabItem>
                <Tab.TabItem value="wedding-2">결혼2</Tab.TabItem>
                <Tab.TabItem value="funeral-2">장례2</Tab.TabItem>
              </>
            ) : (
              <>
                <Tab.TabItem value="done">등록 완료</Tab.TabItem>
                <Tab.TabItem value="waiting">등록 대기중</Tab.TabItem>
                <Tab.TabItem value="total">전체</Tab.TabItem>
                <Tab.TabItem value="wedding">결혼</Tab.TabItem>
                <Tab.TabItem value="funeral">장례</Tab.TabItem>
              </>
            )}
          </Tab.List>

          <Tab.Content value={sub}>
            <ContentBox>
              <Text typography="body-16-regular">{`선택: ${main} / ${sub}`}</Text>
            </ContentBox>
          </Tab.Content>
        </Tab.Root>
      </div>
    );
  },
};
