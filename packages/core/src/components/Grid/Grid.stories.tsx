import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Grid } from './Grid';
import { Box } from '../Box';

const createItems = (count: number) =>
  Array.from({ length: count }).map((_, i) => (
    <Box
      key={i}
      padding="md"
      background={i % 2 === 0 ? 'subtle' : 'default'}
      radius="md"
      className="flex h-20 items-center justify-center border border-gray-200 font-medium text-gray-600"
    >
      Item {i + 1}
    </Box>
  ));

const meta = {
  title: 'Layout Components/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render.',
    },
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 6, 8, 12, 'none'],
      description: 'Defines the number of columns (grid-template-columns).',
    },
    rows: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 'none'],
      description: 'Defines the number of rows (grid-template-rows).',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The spacing between grid items.',
    },
    flow: {
      control: 'radio',
      options: ['row', 'col', 'row-dense', 'col-dense'],
      description:
        'Controls how the auto-placement algorithm works (grid-auto-flow).',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: 3,
    gap: 'md',
    className: 'w-[600px]',
    children: createItems(6),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByText('Item 1').parentElement;
    await expect(container).toHaveClass('grid', 'grid-cols-3', 'gap-4');
  },
};

export const WithGap: Story = {
  args: {
    columns: 4,
    gap: 'lg',
    className: 'w-[800px]',
    children: createItems(8),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByText('Item 1').parentElement;
    await expect(container).toHaveClass('gap-6');
  },
};

export const FlowColumn: Story = {
  args: {
    columns: 3,
    rows: 3,
    flow: 'col',
    gap: 'sm',
    className: 'w-[400px] h-[400px]',
    children: createItems(9),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Items fill columns first instead of rows (`grid-auto-flow: column`).',
      },
    },
  },
};

export const ComplexLayout: Story = {
  args: {
    columns: 4,
    gap: 'md',
    className: 'w-[800px]',
  },
  render: (args) => (
    <Grid {...args}>
      <Box
        padding="lg"
        background="subtle"
        radius="md"
        className="col-span-4 border border-blue-200 text-center font-bold text-blue-800"
      >
        Header (col-span-4)
      </Box>

      <Box
        padding="md"
        background="default"
        radius="md"
        className="row-span-2 flex items-center justify-center border border-gray-200"
      >
        Sidebar (row-span-2)
      </Box>

      <Box
        padding="md"
        background="subtle"
        radius="md"
        className="col-span-3 flex h-32 items-center justify-center border border-green-200"
      >
        Main Content 1 (col-span-3)
      </Box>

      <Box
        padding="md"
        background="subtle"
        radius="md"
        className="col-span-3 flex h-32 items-center justify-center border border-purple-200"
      >
        Main Content 2 (col-span-3)
      </Box>

      <Box
        padding="md"
        background="inverse"
        radius="md"
        className="col-span-4 text-center text-white"
      >
        Footer (col-span-4)
      </Box>
    </Grid>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Header (col-span-4)')).toBeInTheDocument();
    await expect(canvas.getByText('Sidebar (row-span-2)')).toBeInTheDocument();
  },
};
