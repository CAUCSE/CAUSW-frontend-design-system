import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from '../Field';
import { TextArea } from './TextArea';

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

// Standalone usage
export const Default: Story = {
  render: () => <TextArea placeholder="내용을 입력하세요" />,
};

export const NoResize: Story = {
  render: () => <TextArea resize={false} placeholder="크기 고정" />,
};

export const ErrorState: Story = {
  render: () => <TextArea error defaultValue="에러 상태" />,
};

export const Disabled: Story = {
  render: () => <TextArea disabled defaultValue="비활성화" />,
};

// Usage with Field
export const WithField: Story = {
  render: () => (
    <Field>
      <Field.Label>자기소개</Field.Label>
      <TextArea placeholder="자기소개를 작성해주세요" />
    </Field>
  ),
};

export const WithFieldError: Story = {
  render: () => (
    <Field error>
      <Field.Label>사유</Field.Label>
      <TextArea defaultValue="너무 짧은 내용" />
      <Field.Description>최소 50자 이상 입력해주세요.</Field.Description>
    </Field>
  ),
};
