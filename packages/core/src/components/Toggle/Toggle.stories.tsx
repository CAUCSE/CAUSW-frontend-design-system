import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'gray', value: '#f3f4f6' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => (
    <Toggle>
      <Toggle.Switch />
      <Toggle.Label>알림 받기</Toggle.Label>
    </Toggle>
  ),
};

export const LabelLeft: Story = {
  render: () => (
    <Toggle>
      <Toggle.Label>라벨이 왼쪽에</Toggle.Label>
      <Toggle.Switch />
    </Toggle>
  ),
};

export const LabelRight: Story = {
  render: () => (
    <Toggle>
      <Toggle.Switch />
      <Toggle.Label>라벨이 오른쪽에</Toggle.Label>
    </Toggle>
  ),
};

export const CustomLayout: Story = {
  render: () => (
    <Toggle className="flex-col items-start gap-3">
      <Toggle.Label>세로 배치</Toggle.Label>
      <Toggle.Switch />
    </Toggle>
  ),
};

export const SpaceBetween: Story = {
  render: () => (
    <Toggle className="w-64 justify-between">
      <Toggle.Label>알림 설정</Toggle.Label>
      <Toggle.Switch />
    </Toggle>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle>
        <Toggle.Switch />
      </Toggle>
      <Toggle defaultChecked>
        <Toggle.Switch />
      </Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toggle disabled>
        <Toggle.Switch />
        <Toggle.Label>비활성화 (Off)</Toggle.Label>
      </Toggle>
      <Toggle disabled defaultChecked>
        <Toggle.Switch />
        <Toggle.Label>비활성화 (On)</Toggle.Label>
      </Toggle>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="flex flex-col gap-4">
        <Toggle checked={checked} onCheckedChange={setChecked}>
          <Toggle.Switch />
          <Toggle.Label>알림 설정</Toggle.Label>
        </Toggle>
        <p className="text-sm text-gray-500">
          현재 상태: {checked ? '켜짐' : '꺼짐'}
        </p>
        <button
          onClick={() => setChecked(!checked)}
          className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
        >
          토글 전환
        </button>
      </div>
    );
  },
};
