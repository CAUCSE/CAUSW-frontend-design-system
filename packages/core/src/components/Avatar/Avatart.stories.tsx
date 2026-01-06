import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const SAMPLE_SRC = 'https://avatars.githubusercontent.com/u/54893898?v=4';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;
export const Default: Story = {
  render: () => <Avatar variant="md" />,
};
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar variant="xs" src={SAMPLE_SRC} />
      <Avatar variant="sm" src={SAMPLE_SRC} />
      <Avatar variant="md" src={SAMPLE_SRC} />
      <Avatar variant="lg" src={SAMPLE_SRC} />
      <Avatar variant="xl" src={SAMPLE_SRC} />
    </div>
  ),
};

export const WithNoProfile: Story = {
  render: () => <Avatar src="" />,
};
