import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Spacer } from './Spacer';
import { Box } from '../Box';
import { Flex } from '../Flex';

const meta = {
  title: 'Layout Components/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['auto', 1, 2, 4, 6, 8, 10, 12, 16, 20, 24],
      description:
        'The size of the spacer. Use "auto" to fill remaining space.',
    },
    as: {
      control: 'text',
      description: 'The HTML element to render.',
    },
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FixedSize: Story = {
  args: {
    size: 6, // 24px
  },
  render: (args) => (
    <Flex
      align="center"
      className="rounded-lg border border-gray-200 bg-white p-4"
    >
      <Box padding="sm" background="subtle" radius="sm">
        Item A
      </Box>

      <Spacer {...args} />

      <Box padding="sm" background="subtle" radius="sm">
        Item B
      </Box>
    </Flex>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spacer = canvas.getByText('Item A').nextElementSibling;
    await expect(spacer).toHaveClass('w-6', 'h-6');
  },
};

export const AutoSize: Story = {
  args: {
    size: 'auto',
  },
  render: (args) => (
    <Flex
      align="center"
      className="w-[400px] rounded-lg border border-gray-200 bg-white p-4"
    >
      <Box padding="sm" background="subtle" radius="sm">
        Left
      </Box>

      <Spacer {...args} />

      <Box padding="sm" background="subtle" radius="sm">
        Right
      </Box>
    </Flex>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spacer = canvas.getByText('Left').nextElementSibling;
    // size="auto"일 때 flex-1 클래스가 적용되었는지 확인
    await expect(spacer).toHaveClass('flex-1');
  },
};

export const Vertical: Story = {
  args: {
    size: 4,
  },
  render: (args) => (
    <Flex
      direction="column"
      className="rounded-lg border border-gray-200 bg-white p-4"
    >
      <Box padding="sm" background="subtle" radius="sm">
        Top
      </Box>

      <Spacer {...args} />

      <Box padding="sm" background="subtle" radius="sm">
        Middle
      </Box>

      <Spacer size="auto" />

      <Box padding="sm" background="subtle" radius="sm">
        Bottom (Pushed)
      </Box>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Works in vertical Flex containers as well. Note: `size="auto"` requires the container to have a defined height to work vertically.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NavbarExample: Story = {
  render: () => (
    <Box className="w-[600px] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
      <Flex
        align="center"
        className="h-16 border-b border-gray-100 bg-white px-6"
      >
        {/* Logo */}
        <Box className="text-xl font-bold text-blue-600">MyLogo</Box>

        <Spacer size="auto" />

        <Flex gap="md">
          <Box className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900">
            Home
          </Box>
          <Box className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900">
            About
          </Box>
          <Box className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900">
            Contact
          </Box>
        </Flex>

        <Spacer size={4} />

        <Box className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700">
          Sign In
        </Box>
      </Flex>

      <Box
        padding="lg"
        className="flex h-32 items-center justify-center bg-gray-50 text-gray-400"
      >
        Content Area
      </Box>
    </Box>
  ),
};
