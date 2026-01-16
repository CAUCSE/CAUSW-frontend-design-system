import type { Meta, StoryObj } from '@storybook/react-vite';
import { FloatingActionButton } from './FloatingActionButton';

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
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      <FloatingActionButton leftIcon={<PlusIcon />}>
        글쓰기
      </FloatingActionButton>
      <FloatingActionButton leftIcon={<PlusIcon />}>
        경조사 추가
      </FloatingActionButton>
    </div>
  ),
};

export const RightIcon: Story = {
  args: {
    children: '내 동문수첩',
    rightIcon: <ChevronRightIcon />,
  },
};

export const Disabled: Story = {
  args: {
    children: '글쓰기',
    leftIcon: <PlusIcon />,
    disabled: true,
  },
};
