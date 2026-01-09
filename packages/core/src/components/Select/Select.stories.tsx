import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

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
        <Select.Value placeholder="--선택해주세요--" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Item value="apple">결혼</Select.Item>
          <Select.Item value="banana">장례</Select.Item>
          <Select.Item value="blueberry">졸업</Select.Item>
          <Select.Item value="grapes">기타</Select.Item>
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
