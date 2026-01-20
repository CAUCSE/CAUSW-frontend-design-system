import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  BottomSheetRoot,
  BottomSheetTrigger,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetBody,
  BottomSheetFooter,
} from './BottomSheet';
import { useBottomSheet } from '../../hooks';
import { Stack } from '../Stack';
import { Box } from '../Box';
import { CTAButton } from '../CTAButton';

const meta: Meta<typeof BottomSheetRoot> = {
  title: 'Components/BottomSheet',
  component: BottomSheetRoot,
  subcomponents: {
    BottomSheetTrigger,
    BottomSheetContent,
    BottomSheetHeader,
    BottomSheetBody,
    BottomSheetFooter,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    headerAlign: {
      control: 'radio',
      options: ['left', 'center'],
      description: '헤더 텍스트의 정렬 방식입니다.',
      table: {
        defaultValue: { summary: 'left' },
        type: { summary: "'left' | 'center'" },
      },
    },
    open: {
      control: 'boolean',
      description: '제어형(Controlled)으로 사용할 때의 상태입니다.',
    },
    defaultOpen: {
      control: 'boolean',
      description: '비제어형(Uncontrolled)으로 사용할 때의 초기 상태입니다.',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: '시트가 열리거나 닫힐 때 호출되는 콜백입니다.',
    },
  },
  args: {
    headerAlign: 'left',
    defaultOpen: false,
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheetRoot>;

const ExampleCloseButton = () => {
  const { onClose } = useBottomSheet();

  return (
    <CTAButton onClick={onClose} color="dark" fullWidth>
      확인
    </CTAButton>
  );
};

export const Default: Story = {
  render: (args) => (
    <BottomSheetRoot {...args}>
      <BottomSheetTrigger asChild>
        <button className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200">
          Open
        </button>
      </BottomSheetTrigger>

      <BottomSheetContent>
        <BottomSheetHeader title="제목" />
        <BottomSheetBody>Content</BottomSheetBody>
        <BottomSheetFooter>
          <ExampleCloseButton />
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheetRoot>
  ),
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: `
**제어형(Controlled) 컴포넌트** 예제입니다.

- \`open\` prop을 통해 열림/닫힘 상태를 직접 주입합니다.
- \`onOpenChange\` 콜백을 통해 상태 변경 요청을 받아 부모 컴포넌트의 state를 업데이트합니다.
- 외부 버튼이나 로직에 의해 시트를 닫아야 할 때 유용합니다.
        `,
      },
    },
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200"
        >
          Open
        </button>
        <div className="text-sm text-gray-500">
          현재 상태: {open ? '열림 (Open)' : '닫힘 (Closed)'}
        </div>

        <BottomSheetRoot {...args} open={open} onOpenChange={setOpen}>
          <BottomSheetContent>
            <BottomSheetHeader title="제어형 모드" />
            <BottomSheetBody>
              <p className="text-gray-600">
                onOpenChange 이벤트를 통해 상태를 업데이트합니다.
              </p>
            </BottomSheetBody>
            <BottomSheetFooter>
              <CTAButton onClick={() => setOpen(false)} color="dark" fullWidth>
                닫기 (상태 변경)
              </CTAButton>
            </BottomSheetFooter>
          </BottomSheetContent>
        </BottomSheetRoot>
      </div>
    );
  },
};

export const LongContent: Story = {
  parameters: {
    docs: {
      description: {
        story: `
**긴 콘텐츠와 스크롤 처리(Long Content & Scroll)** 예제입니다.

- \`BottomSheetBody\`에 \`maxHeight\` prop(예: 400px, 50vh 등)을 지정하여 영역의 높이를 제한할 수 있습니다.
- 콘텐츠가 지정된 높이를 초과할 경우 Body 영역 내부에만 스크롤이 생성됩니다.
- Header와 Footer는 고정된 상태로 유지되므로, 중요한 액션 버튼이 항상 노출되어야 할 때 유용합니다.
        `,
      },
    },
  },

  render: (args) => (
    <BottomSheetRoot {...args}>
      <BottomSheetTrigger asChild>
        <button className="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 hover:text-gray-200">
          Open
        </button>
      </BottomSheetTrigger>

      <BottomSheetContent>
        <BottomSheetHeader title="스크롤 테스트" />
        <BottomSheetBody maxHeight={300} className="my-4">
          <Stack gap="md">
            <Box
              background="subtle"
              radius="md"
              className="h-30 w-full border border-gray-200"
            />
            <Box
              background="subtle"
              radius="md"
              className="h-30 w-full border border-gray-200"
            />
            <Box
              background="subtle"
              radius="md"
              className="h-30 w-full border border-gray-200"
            />
          </Stack>
        </BottomSheetBody>
        <BottomSheetFooter>
          <ExampleCloseButton />
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheetRoot>
  ),
};
