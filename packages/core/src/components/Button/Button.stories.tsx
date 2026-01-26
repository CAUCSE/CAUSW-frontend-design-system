import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { useState } from 'react';

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21s-7-4.35-10-9c-2-3.5.5-8 5-8 2.5 0 4 2 5 3 1-1 2.5-3 5-3 4.5 0 7 4.5 5 8-3 4.65-10 9-10 9z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3.1.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C9.7 22 2 14.3 2 4.5c0-.6.4-1 1-1H6.5c.6 0 1 .4 1 1 0 1.1.2 2.1.6 3.1.1.4 0 .9-.2 1.2l-2.3 2z" />
  </svg>
);

const MessageIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12l4-4h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button color="gray">text</Button>
      <Button color="red">text</Button>
      <Button color="white">text</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-2">
      <Button color="white">
        <PhoneIcon />
        전화
      </Button>

      <Button color="white">
        <MessageIcon />
        메시지
      </Button>
    </div>
  ),
};

export const LikeButtons: Story = {
  name: 'Active',
  render: () => {
    const [active, setActive] = useState(false);

    return (
      <Button
        color={active ? 'red' : 'gray'}
        onClick={() => setActive((prev) => !prev)}
      >
        <HeartIcon />
        좋아요 {active ? 1 : 0}
      </Button>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button disabled color="gray">
        <HeartIcon />
        좋아요 0
      </Button>
      <Button disabled color="red">
        <HeartIcon />
        좋아요 1
      </Button>
      <Button disabled color="white">
        변경
      </Button>
    </div>
  ),
};
