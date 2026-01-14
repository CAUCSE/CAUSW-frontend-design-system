import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { VStack } from './VStack';
import { Box } from '../Box';

const meta = {
  title: 'Components/VStack',
  component: VStack,
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
      description: 'Align items horizontally (align-items).',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between'],
      description: 'Justify content vertically (justify-content).',
    },
    as: {
      control: 'text',
      description: 'The HTML element to render.',
    },
  },
} satisfies Meta<typeof VStack>;

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
    await expect(stack).toHaveClass('flex-col');
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
    await expect(stack).toHaveClass('flex-col');
  },
};

export const LayoutExample: Story = {
  args: {
    gap: 'md',
    justify: 'between',
    className:
      'w-[300px] h-[400px] bg-slate-50 border border-slate-300 p-4 rounded-xl',
  },
  render: (args) => (
    <VStack {...args}>
      <Box
        as="header"
        padding="md"
        radius="md"
        background="subtle"
        className="border border-gray-200 font-bold"
      >
        Header
      </Box>
      <Box
        as="main"
        padding="lg"
        radius="md"
        background="default"
        className="flex flex-1 items-center justify-center border border-gray-200"
      >
        Content Area (Flex-1)
      </Box>
      <Box
        as="footer"
        padding="sm"
        radius="md"
        background="subtle"
        className="border border-gray-200 text-sm"
      >
        Footer
      </Box>
    </VStack>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByText('Header');
    const footer = canvas.getByText('Footer');
    await expect(header).toBeInTheDocument();
    await expect(footer).toBeInTheDocument();

    const stack = header.parentElement;
    await expect(stack).toHaveClass('flex-col');
    await expect(stack).toHaveClass('justify-between');
  },
};
