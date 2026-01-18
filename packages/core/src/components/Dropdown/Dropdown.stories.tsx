import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Dropdown } from './Dropdown';
import { CTAButton } from '../CTAButton';
import { Box } from '../Box';
import { Menu } from '@causw/icons';
import { Chip } from '../Chip';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '`Dropdown`은 메뉴, 필터, 또는 작업을 선택할 수 있는 오버레이 컴포넌트입니다.\n\n`Dropdown.Trigger`, `Dropdown.Content`, `Dropdown.Item`으로 구성되며, **React 19** 표준을 준수하여 `ref`를 prop으로 직접 전달받습니다.\n\n`Dropdown.Content` 내부에는 `divide-y` 스타일이 자동 적용되어 아이템 간 구분선이 자동으로 생성됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'The controlled open state of the dropdown menu.',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    defaultOpen: {
      control: { type: 'boolean' },
      description:
        'The open state of the dropdown menu when it is initially rendered.',
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    modal: {
      control: { type: 'boolean' },
      description: 'The modality of the dropdown menu.',
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        category: 'Behavior',
      },
    },
  },
} satisfies Meta<React.ComponentProps<typeof Dropdown>>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '기본적인 `Dropdown` 사용 예시입니다. `Trigger`를 클릭하면 메뉴가 열리며, `Dropdown.Item`을 사용하여 메뉴 항목을 구성할 수 있습니다.\n\n`color="red"` prop을 사용하여 위험한 작업(삭제 등)을 시각적으로 구분할 수 있습니다.',
      },
    },
  },
  render: () => (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <CTAButton color="light">Options</CTAButton>
      </Dropdown.Trigger>
      <Dropdown.Content align="end">
        <Dropdown.Item>Edit Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>

        <Dropdown.Item color="red">Delete Account</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};

export const Positions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`Dropdown.Content`의 `side`와 `align` prop을 사용하여 메뉴가 열리는 위치와 정렬을 제어할 수 있습니다.\n- `side`: `top`, `right`, `bottom`, `left` (기본값: `bottom`)\n- `align`: `start`, `center`, `end` (기본값: `center`)',
      },
    },
  },
  render: () => (
    <Box className="flex gap-4">
      <Dropdown>
        <Dropdown.Trigger asChild>
          <CTAButton color="light">Left Start</CTAButton>
        </Dropdown.Trigger>
        <Dropdown.Content align="start" side="left">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown>
        <Dropdown.Trigger asChild>
          <CTAButton color="light">Bottom End</CTAButton>
        </Dropdown.Trigger>
        <Dropdown.Content align="end" side="bottom">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </Box>
  ),
};

export const BoardMenu: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '게시판 등에서 자주 사용되는 메뉴(`...`) 스타일 예시입니다. `className`을 사용하여 아이템의 스타일을 커스텀(가운데 정렬, 폰트 굵기 등)할 수 있습니다.',
      },
    },
  },
  render: () => (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <div className="rounded-md bg-gray-100 p-2 hover:bg-gray-200">
          <Menu />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Content align="end">
        <Dropdown.Item className="justify-center px-10 py-2.5 text-base font-bold">
          수정하기
        </Dropdown.Item>

        <Dropdown.Item
          color="red"
          className="justify-center px-10 py-2.5 text-base font-bold"
        >
          삭제하기
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ),
};

export const SortFilter: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '정렬 필터 등에 활용되는 예시입니다. 상태(`useState`)를 사용하여 선택된 항목을 하이라이트(`bg-gray-50`, `font-bold`)하고, 트리거의 내용을 동적으로 변경할 수 있습니다.',
      },
    },
  },
  render: () => {
    const [sort, setSort] = React.useState<'asc' | 'desc'>('asc');
    const [open, setOpen] = React.useState(false);

    return (
      <Dropdown open={open} onOpenChange={setOpen}>
        <Dropdown.Trigger asChild>
          <Chip color="lightgray">
            <span>오름차순</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Chip>
        </Dropdown.Trigger>
        <Dropdown.Content align="start" className="w-[132px]">
          <Dropdown.Item onClick={() => setSort('asc')} className="px-6 py-2.5">
            오름차순
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => setSort('desc')}
            className="px-6 py-2.5"
          >
            내림차순
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );
  },
};
