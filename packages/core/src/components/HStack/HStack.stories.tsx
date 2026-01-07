import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { HStack } from './HStack';
import { Box } from '../Box';

const meta = {
  title: 'Components/HStack',
  component: HStack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The spacing between items.',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Align items vertically (align-items).',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between'],
      description: 'Justify content horizontally (justify-content).',
    },
    as: {
      control: 'text',
      description: 'The HTML element to render.',
    },
  },
} satisfies Meta<typeof HStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: 'sm',
    children: (
      <>
        <Box padding="sm" background="subtle">
          Item 1
        </Box>
        <Box padding="sm" background="subtle">
          Item 2
        </Box>
        <Box padding="sm" background="subtle">
          Item 3
        </Box>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const item1 = canvas.getByText('Item 1');
    await expect(item1).toBeInTheDocument();
    const stack = item1.parentElement;
    // HStack은 기본적으로 horizontal(row)이어야 함
    await expect(stack).toHaveClass('flex-row');
  },
};

export const WithGap: Story = {
  args: {
    gap: 'lg',
    children: (
      <>
        <Box padding="md" background="subtle" radius="md">
          Item 1
        </Box>
        <Box padding="md" background="subtle" radius="md">
          Item 2
        </Box>
        <Box padding="md" background="subtle" radius="md">
          Item 3
        </Box>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const stack = canvas.getByText('Item 1').parentElement;
    await expect(stack).toHaveClass('gap-6');
    await expect(stack).toHaveClass('flex-row');
  },
};

export const LayoutExample: Story = {
  args: {
    gap: 'md',
    align: 'center',
    // 시각적 확인을 위해 높이와 배경 추가
    className:
      'w-[500px] h-[200px] bg-slate-50 border border-slate-300 p-4 rounded-xl',
  },
  render: (args) => (
    <HStack {...args}>
      <Box
        padding="md"
        radius="md"
        background="subtle"
        className="flex h-[100px] flex-1 items-center justify-center border border-gray-200"
      >
        Left
      </Box>
      <Box
        padding="md"
        radius="md"
        background="default"
        className="flex h-[80px] flex-1 items-center justify-center border border-gray-200"
      >
        Center (Shorter)
      </Box>
      <Box
        padding="md"
        radius="md"
        background="subtle"
        className="flex h-[100px] flex-1 items-center justify-center border border-gray-200"
      >
        Right
      </Box>
    </HStack>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const left = canvas.getByText('Left');
    await expect(left).toBeInTheDocument();

    // 부모 요소가 flex-row 인지 확인
    const stack = left.parentElement;
    await expect(stack).toHaveClass('flex-row');
    await expect(stack).toHaveClass('items-center');
  },
};
