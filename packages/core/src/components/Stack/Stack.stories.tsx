import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Stack } from './Stack';
import { Box } from '../Box';

const meta = {
  title: 'Layouts/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render (e.g., div, section, main).',
    },
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The direction to stack the items.',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The spacing between items.',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description:
        'Defines the default behavior for how flex items are laid out along the cross axis (align-items).',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between'],
      description:
        'Defines the alignment along the main axis (justify-content).',
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'vertical',
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
  },
};

export const WithGap: Story = {
  args: {
    direction: 'vertical',
    gap: 'lg',
    className: 'bg-gray-50 p-4 border border-gray-200 rounded-lg',
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
    await expect(stack).toBeInTheDocument();
  },
};

export const LayoutExample: Story = {
  args: {
    direction: 'vertical',
    gap: 'md',
    justify: 'between',
    // Added height and background to make layout behavior visible
    className:
      'w-[300px] h-[400px] bg-slate-50 border border-slate-300 p-4 rounded-xl',
  },
  render: (args) => (
    <Stack {...args}>
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
        className="flex-1 border border-gray-200"
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
    </Stack>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByText('Header');
    const content = canvas.getByText('Content Area (Flex-1)');
    const footer = canvas.getByText('Footer');
    await expect(header).toBeInTheDocument();
    await expect(content).toBeInTheDocument();
    await expect(footer).toBeInTheDocument();
  },
};
