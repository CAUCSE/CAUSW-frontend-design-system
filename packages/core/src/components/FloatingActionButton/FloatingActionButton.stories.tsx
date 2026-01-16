import type { Meta, StoryObj } from '@storybook/react-vite';
import { FloatingActionButton } from './FloatingActionButton';
import { HStack } from '../HStack';

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.72168 6.66656L1.34415 12L0 10.6669L4.70546 6L0 1.33312L1.34415 0L6.72168 5.33344C6.89989 5.51024 7 5.75 7 6C7 6.25 6.89989 6.48976 6.72168 6.66656Z"
      fill="#6A7282"
    />
  </svg>
);

const meta: Meta<typeof FloatingActionButton> = {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FloatingActionButton>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <FloatingActionButton>FAB</FloatingActionButton>
    </div>
  ),
};

export const LeftIcon: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-3">
      <FloatingActionButton>
        <span className="flex items-center gap-[0.25rem]">
          <PlusIcon />
          <div>글쓰기</div>
        </span>
      </FloatingActionButton>
      <FloatingActionButton className="px-[1.25rem] py-[0.625rem]">
        <HStack className="items-center gap-[0.625rem]">
          <div>내 동문수첩</div>
          <ChevronRightIcon />
        </HStack>
      </FloatingActionButton>
    </div>
  ),
};

export const RightIcon: Story = {
  args: {
    children: '내 동문수첩',
  },
};

export const Disabled: Story = {
  args: {
    children: '글쓰기',
    disabled: true,
  },
};
