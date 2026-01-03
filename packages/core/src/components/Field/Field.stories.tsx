import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from './Field';
import { TextInput } from '../TextInput';
import { TextArea } from '../TextArea';

// Simple inline icons for demo
const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
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
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: () => (
    <Field>
      <Field.Label>이메일</Field.Label>
      <TextInput type="email" placeholder="example@cau.ac.kr" />
      <Field.Description>학교 이메일을 입력해주세요.</Field.Description>
    </Field>
  ),
};

export const WithTextArea: Story = {
  render: () => (
    <Field>
      <Field.Label>자기소개</Field.Label>
      <TextArea placeholder="자기소개를 작성해주세요" />
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field error>
      <Field.Label>사용자 이름</Field.Label>
      <TextInput defaultValue="invalid!" />
      <Field.Description>특수문자는 사용할 수 없습니다.</Field.Description>
    </Field>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Field disabled>
      <Field.Label>학번</Field.Label>
      <TextInput defaultValue="20201234" />
      <Field.Description>학번은 수정할 수 없습니다.</Field.Description>
    </Field>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <Field>
        <Field.Label>기본 상태</Field.Label>
        <TextInput placeholder="입력해주세요" />
        <Field.Description>도움말 텍스트</Field.Description>
      </Field>

      <Field>
        <Field.Label>왼쪽 아이콘</Field.Label>
        <TextInput leftIcon={<SearchIcon />} placeholder="검색" />
      </Field>

      <Field>
        <Field.Label>TextArea</Field.Label>
        <TextArea placeholder="내용 입력" />
      </Field>

      <Field error>
        <Field.Label>에러 상태</Field.Label>
        <TextInput defaultValue="잘못된 값" />
        <Field.Description>올바른 값을 입력해주세요.</Field.Description>
      </Field>

      <Field disabled>
        <Field.Label>비활성화</Field.Label>
        <TextInput defaultValue="수정 불가" />
      </Field>
    </div>
  ),
};
