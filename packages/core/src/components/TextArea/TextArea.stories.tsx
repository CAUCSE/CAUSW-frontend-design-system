import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';
import { Field } from '../Field';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: () => (
    <TextArea>
      <TextArea.Input placeholder="내용을 입력하세요" />
    </TextArea>
  ),
};

export const WithCharCount: Story = {
  render: () => {
    const [count, setCount] = useState(0);
    const maxLength = 500;

    return (
      <TextArea>
        <TextArea.Input
          placeholder="내용을 입력하세요"
          rows={6}
          maxLength={maxLength}
          onChange={(e) => setCount(e.target.value.length)}
        />
        <TextArea.Footer>
          <span className="text-right text-xs text-gray-400">
            {count} / {maxLength}
          </span>
        </TextArea.Footer>
      </TextArea>
    );
  },
};

export const NoResize: Story = {
  render: () => (
    <TextArea>
      <TextArea.Input resize={false} placeholder="크기 고정" />
    </TextArea>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Field disabled>
      <TextArea>
        <TextArea.Input placeholder="비활성화됨" />
      </TextArea>
    </Field>
  ),
};

export const Error: Story = {
  render: () => (
    <Field error>
      <TextArea>
        <TextArea.Input placeholder="에러 상태" />
      </TextArea>
    </Field>
  ),
};
