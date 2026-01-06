import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from '../Field';
import { TextInput } from './TextInput';

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

const EyeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// Standalone usage
export const Default: Story = {
  render: () => <TextInput placeholder="이메일을 입력하세요" />,
};

export const WithLeftIcon: Story = {
  render: () => (
    <TextInput leftIcon={<SearchIcon />} placeholder="검색어를 입력하세요" />
  ),
};

export const WithRightIcon: Story = {
  render: () => (
    <TextInput
      type="password"
      rightIcon={<EyeIcon />}
      placeholder="비밀번호 입력"
    />
  ),
};

export const ErrorState: Story = {
  render: () => (
    <TextInput error placeholder="에러 상태" defaultValue="잘못된 값" />
  ),
};

export const Disabled: Story = {
  render: () => <TextInput disabled defaultValue="비활성화" />,
};

// Usage with Field
export const WithField: Story = {
  render: () => (
    <Field>
      <Field.Label>이메일</Field.Label>
      <TextInput type="email" placeholder="example@cau.ac.kr" />
      <Field.Description>학교 이메일을 입력해주세요.</Field.Description>
    </Field>
  ),
};

export const WithFieldError: Story = {
  render: () => (
    <Field error>
      <Field.Label>사용자 이름</Field.Label>
      <TextInput defaultValue="invalid!" />
      <Field.Description>특수문자는 사용할 수 없습니다.</Field.Description>
    </Field>
  ),
};

export const WithFieldDisabled: Story = {
  render: () => (
    <Field disabled>
      <Field.Label>학번</Field.Label>
      <TextInput defaultValue="20201234" />
      <Field.Description>학번은 수정할 수 없습니다.</Field.Description>
    </Field>
  ),
};

// Underline variant
export const Underline: Story = {
  render: () => (
    <TextInput variant="underline" placeholder="이름을 입력하세요" />
  ),
};

export const UnderlineWithIcons: Story = {
  render: () => (
    <TextInput
      variant="underline"
      leftIcon={<SearchIcon />}
      placeholder="검색어를 입력하세요"
    />
  ),
};

export const UnderlineError: Story = {
  render: () => (
    <TextInput
      variant="underline"
      error
      placeholder="에러 상태"
      defaultValue="잘못된 값"
    />
  ),
};

export const VariantComparison: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <div>
        <p className="mb-2 text-sm text-gray-500">Default</p>
        <TextInput placeholder="기본 스타일" />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-500">Underline</p>
        <TextInput variant="underline" placeholder="언더라인 스타일" />
      </div>
    </div>
  ),
};
