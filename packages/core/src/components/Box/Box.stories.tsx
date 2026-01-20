import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Box } from './Box';

const meta = {
  title: 'Layout Components/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render (e.g., div, section, article).',
    },
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg'],
      description: 'Sets the internal padding of the box.',
    },
    radius: {
      control: 'select',
      // Automatically syncs with your token keys
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Sets the border radius based on design tokens.',
    },
    display: {
      control: 'select',
      options: ['block', 'flex', 'grid', 'inline-block', 'inline-flex', 'none'],
      description: 'Sets the CSS display property.',
    },
    background: {
      control: 'select',
      options: ['default', 'subtle', 'inverse', 'transparent'],
      description: 'Sets the background color style.',
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Box Content',
    padding: 'md',
    background: 'subtle',
    radius: 'md',
    className: 'border border-gray-200',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByText('Box Content');
    await expect(box).toBeInTheDocument();
    await expect(box).toHaveClass('p-4');
  },
};

export const LayoutExample: Story = {
  render: () => (
    <Box display="flex" className="w-[300px] flex-col gap-4">
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
        className="min-h-[100px] border border-gray-200"
      >
        Content Area (bg-default)
      </Box>
      <Box
        as="section"
        padding="md"
        radius="md"
        background="inverse"
        className="text-center"
      >
        Inverse Background
      </Box>
      <Box
        as="footer"
        padding="sm"
        radius="md"
        background="subtle"
        className="border border-gray-200 text-sm text-gray-500"
      >
        Footer
      </Box>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Header')).toBeInTheDocument();
    await expect(canvas.getByText('Inverse Background')).toBeInTheDocument();
  },
};
