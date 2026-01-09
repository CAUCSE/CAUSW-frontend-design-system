import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { Separator } from '../Separator';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Select>
      <Select.Trigger className="w-[300px]">
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
          <Select.Item value="grapes">Grapes</Select.Item>
          <Select.Item value="pineapple">Pineapple</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  ),
};

export const Error: Story = {
  render: () => (
    <Select>
      <Select.Trigger className="w-full" error>
        <Select.Value placeholder="Error state" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <Select.Trigger className="w-[180px]">
        <Select.Value placeholder="Disabled" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  ),
};
