import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Separator } from './Separator';
import { Box } from '../Box';
import { Flex } from '../Flex';

const meta = {
  title: 'Layouts/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator.',
    },
    as: {
      control: 'text',
      description: 'The HTML element to render.',
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <Box className="w-[300px] rounded-lg border border-gray-200 bg-white p-4">
      <Box className="text-sm font-medium text-gray-900">Header</Box>
      <Box className="mb-4 text-xs text-gray-500">
        Description text goes here.
      </Box>

      <Separator {...args} />

      <Flex className="mt-4 gap-4 text-sm">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Flex>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const separator = canvas.getByRole('separator');
    await expect(separator).toBeInTheDocument();
    await expect(separator).toHaveAttribute('aria-orientation', 'horizontal');
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <Flex
      align="center"
      className="h-10 w-fit gap-4 rounded-lg border border-gray-200 bg-white p-4 text-sm"
    >
      <Box>Blog</Box>

      <Separator {...args} className="h-4" />

      <Box>Docs</Box>

      <Separator {...args} className="h-4" />

      <Box>Source</Box>
    </Flex>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const separators = canvas.getAllByRole('separator');
    await expect(separators[0]).toBeInTheDocument();
    await expect(separators[0]).toHaveAttribute('aria-orientation', 'vertical');
    await expect(separators[0]).toHaveClass('w-px');
  },
};

export const CardExample: Story = {
  render: () => (
    <Box className="w-[350px] overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
      <Box padding="lg">
        <h3 className="text-lg font-bold">Profile Settings</h3>
        <p className="text-sm text-gray-500">
          Update your account preferences.
        </p>
      </Box>

      <Separator orientation="horizontal" />

      <Box padding="lg" className="space-y-4">
        <Flex justify="between" align="center">
          <span className="text-sm font-medium">Email Notifications</span>
          <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700">
            Enabled
          </span>
        </Flex>
        <Flex justify="between" align="center">
          <span className="text-sm font-medium">Push Notifications</span>
          <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
            Disabled
          </span>
        </Flex>
      </Box>

      <Separator orientation="horizontal" />

      <Flex className="h-12 bg-gray-50">
        <Box className="flex flex-1 cursor-pointer items-center justify-center text-sm font-medium hover:bg-gray-100">
          Cancel
        </Box>
        <Separator orientation="vertical" className="my-0 h-full" />

        <Box className="flex flex-1 cursor-pointer items-center justify-center text-sm font-bold text-blue-600 hover:bg-gray-100">
          Save
        </Box>
      </Flex>
    </Box>
  ),
};
