import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, RadioGroup } from './Radio';
import { Text } from '../Text';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
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
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup name="option" defaultValue="option1">
      <Radio value="option1">옵션 1</Radio>
      <Radio value="option2">옵션 2</Radio>
      <Radio value="option3">옵션 3</Radio>
    </RadioGroup>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('낚시/놀림/도배');

    return (
      <div className="w-48 rounded-md bg-white p-4">
        <RadioGroup name="controlled" value={value} onValueChange={setValue}>
          <Text typography="body2-md-point">신고 사유 선택</Text>
          <Radio value="낚시/놀림/도배">낚시/놀림/도배</Radio>
          <Radio value="욕설/비하">욕설/비하</Radio>
          <Radio value="기타">기타</Radio>
          <p className="text-sm text-gray-500">선택된 값: {value}</p>
        </RadioGroup>
      </div>
    );
  },
};
