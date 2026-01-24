import type { Meta, StoryObj } from '@storybook/react-vite';
// import { useState } from 'react';
import { CTAButton } from './CTAButton';

const meta: Meta<typeof CTAButton> = {
  title: 'Components/CTAButton',
  component: CTAButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'red', 'dark', 'light', 'white'],
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CTAButton>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <CTAButton color="blue">text</CTAButton>
      <CTAButton color="red">text</CTAButton>
      <CTAButton color="dark">text</CTAButton>
      <CTAButton color="light">text</CTAButton>
      <CTAButton color="white">text</CTAButton>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <CTAButton disabled color="blue">
      text
    </CTAButton>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="flex w-[288px] flex-col gap-3">
      <CTAButton fullWidth color="blue">
        text
      </CTAButton>
      <CTAButton fullWidth color="red">
        text
      </CTAButton>
      <CTAButton fullWidth color="dark">
        text
      </CTAButton>
      <CTAButton fullWidth color="light">
        text
      </CTAButton>
      <CTAButton fullWidth color="white">
        text
      </CTAButton>
    </div>
  ),
};

export const HalfWidth: Story = {
  render: () => (
    <div className="flex w-[288px] flex-col gap-3">
      <CTAButton className="w-1/2" color="blue">
        text
      </CTAButton>
      <CTAButton className="w-1/2" color="red">
        text
      </CTAButton>
      <CTAButton className="w-1/2" color="dark">
        text
      </CTAButton>
      <CTAButton className="w-1/2" color="light">
        text
      </CTAButton>
      <CTAButton className="w-1/2" color="white">
        text
      </CTAButton>
    </div>
  ),
};

/* Interactive Story 시나리오가 정해지지 않음
export const Interactive: Story = {
  render: () => {
    const [blueActive, setBlueActive] = useState(false);
    const [redActive, setRedActive] = useState(false);
    const [darkActive, setDarkActive] = useState(false);

    return (
      <div className="flex w-[288px] flex-col gap-3">
        <CTAButton
          color={blueActive ? 'blue' : 'light'}
          onClick={() => setBlueActive((v) => !v)}
        >
          {blueActive ? 'Active' : 'Inactive'}
        </CTAButton>

        <CTAButton
          color={redActive ? 'red' : 'light'}
          onClick={() => setRedActive((v) => !v)}
        >
          {redActive ? 'Active' : 'Inactive'}
        </CTAButton>

        <CTAButton
          color={darkActive ? 'dark' : 'light'}
          onClick={() => setDarkActive((v) => !v)}
        >
          {darkActive ? 'Active' : 'Inactive'}
        </CTAButton>

        <CTAButton disabled color="blue">
          Disabled
        </CTAButton>
      </div>
    );
  },
};
*/
