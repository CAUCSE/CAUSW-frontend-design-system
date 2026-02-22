import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';
const SAMPLE_SRC = 'https://avatars.githubusercontent.com/u/54893898?v=4';
const WRONG_SRC = 'https://example.com/wrong-image.jpg';
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;
export const ProfileWithImage: Story = {
  render: () => <Avatar src={SAMPLE_SRC} size="80" />,
};

export const Default: Story = {
  render: () => <Avatar size="44" />,
};
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="36" />
      <Avatar size="40" />
      <Avatar size="44" />
      <Avatar size="64" />
      <Avatar size="80" />
      <Avatar size="88" />
      <Avatar size="120" />
    </div>
  ),
};
export const WrongProfile: Story = {
  render: () => <Avatar src={WRONG_SRC} />,
};

export const NoProfile: Story = {
  render: () => <Avatar src="" />,
};

export const WrongProfileWithFallback: Story = {
  render: () => <Avatar src={WRONG_SRC} fallback="Fd" />, // Changed Fallback to Fd to match slicing logic better or general usage
};
export const WrongProfileWithIconFallback: Story = {
  render: () => <Avatar src={WRONG_SRC} fallback={<StarIcon />} />,
};
