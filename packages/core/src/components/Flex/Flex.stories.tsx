import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Flex } from './Flex';
import { Box } from '../Box';

const meta = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render.',
    },
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'The direction of the flex items.',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The spacing between items.',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Align items along the cross axis (align-items).',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Justify content along the main axis (justify-content).',
    },
    wrap: {
      control: 'radio',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Controls whether flex items should wrap.',
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'row',
    gap: 'md',
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
    const container = item1.parentElement;
    await expect(container).toHaveClass('flex-row');
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
    const container = canvas.getByText('Item 1').parentElement;
    await expect(container).toHaveClass('gap-6');
  },
};

export const Wrapping: Story = {
  args: {
    wrap: 'wrap',
    gap: 'md',
    className: 'w-[300px] border border-dashed border-gray-300 p-2', // Constrained width to force wrap
    children: (
      <>
        <Box padding="md" background="subtle" className="w-[100px]">
          Box 1
        </Box>
        <Box padding="md" background="subtle" className="w-[100px]">
          Box 2
        </Box>
        <Box padding="md" background="subtle" className="w-[100px]">
          Box 3
        </Box>
        <Box padding="md" background="subtle" className="w-[100px]">
          Box 4
        </Box>
        <Box padding="md" background="subtle" className="w-[100px]">
          Box 5
        </Box>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const box1 = canvas.getByText('Box 1');
    const container = box1.parentElement;
    await expect(container).toHaveClass('flex-wrap');
  },
};

export const LayoutExample: Story = {
  args: {
    direction: 'column',
    gap: 'md',
    className: 'w-[300px] h-[400px]',
  },
  render: (args) => (
    <Flex {...args}>
      <Box
        as="header"
        padding="md"
        radius="md"
        background="subtle"
        className="border border-gray-200 font-bold"
      >
        Header
      </Box>
      <Flex as="main" direction="row" gap="sm" className="flex-1">
        <Box
          padding="md"
          radius="md"
          background="default"
          className="w-1/3 border border-gray-200"
        >
          Sidebar
        </Box>
        <Box
          padding="md"
          radius="md"
          background="default"
          className="flex-1 border border-gray-200"
        >
          Main Content
        </Box>
      </Flex>
      <Box
        as="footer"
        padding="sm"
        radius="md"
        background="subtle"
        className="border border-gray-200 text-sm"
      >
        Footer
      </Box>
    </Flex>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByText('Header');
    await expect(header).toBeInTheDocument();
  },
};
