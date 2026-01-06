import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <Checkbox>
      <Checkbox.Indicator />
      <Checkbox.Label>동의합니다</Checkbox.Label>
    </Checkbox>
  ),
};

export const Checked: Story = {
  render: () => (
    <Checkbox defaultChecked>
      <Checkbox.Indicator />
      <Checkbox.Label>선택됨</Checkbox.Label>
    </Checkbox>
  ),
};

export const LabelLeft: Story = {
  render: () => (
    <Checkbox>
      <Checkbox.Label>라벨이 왼쪽에</Checkbox.Label>
      <Checkbox.Indicator />
    </Checkbox>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Checkbox>
        <Checkbox.Indicator />
      </Checkbox>
      <Checkbox defaultChecked>
        <Checkbox.Indicator />
      </Checkbox>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox disabled>
        <Checkbox.Indicator />
        <Checkbox.Label>비활성화 (Off)</Checkbox.Label>
      </Checkbox>
      <Checkbox disabled defaultChecked>
        <Checkbox.Indicator />
        <Checkbox.Label>비활성화 (On)</Checkbox.Label>
      </Checkbox>
    </div>
  ),
};

export const CheckboxGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox>
        <Checkbox.Indicator />
        <Checkbox.Label>옵션 1</Checkbox.Label>
      </Checkbox>
      <Checkbox>
        <Checkbox.Indicator />
        <Checkbox.Label>옵션 2</Checkbox.Label>
      </Checkbox>
      <Checkbox>
        <Checkbox.Indicator />
        <Checkbox.Label>옵션 3</Checkbox.Label>
      </Checkbox>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="flex flex-col gap-4">
        <Checkbox checked={checked} onCheckedChange={setChecked}>
          <Checkbox.Indicator />
          <Checkbox.Label>이용약관에 동의합니다</Checkbox.Label>
        </Checkbox>
        <p className="text-sm text-gray-500">
          현재 상태: {checked ? '동의함' : '동의 안 함'}
        </p>
        <button
          onClick={() => setChecked(!checked)}
          className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
        >
          토글
        </button>
      </div>
    );
  },
};
