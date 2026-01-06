import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';
import React from 'react';
import { ChipColor, ChipVariant } from './Chip.styles';

// Demo icons
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

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip>text</Chip>
      <Chip color="lightgray">text</Chip>
      <Chip color="darkgray">text</Chip>
    </div>
  ),
};
export const RoleVariants: Story = {
  name: 'Variants',
  render: () => (
    <div className="flex gap-2">
      <Chip>text</Chip>
      <Chip variant="dropdown" color="lightgray">
        Dropdown
      </Chip>
      <Chip variant="closable" color="darkgray">
        Closable
      </Chip>
    </div>
  ),
};
export const Dropdown: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip variant="dropdown">text</Chip>
      <Chip variant="dropdown" color="lightgray">
        text
      </Chip>
      <Chip variant="dropdown" color="darkgray">
        text
      </Chip>
    </div>
  ),
};
export const Closable: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip variant="closable">text</Chip>
      <Chip variant="closable" color="lightgray">
        text
      </Chip>
      <Chip variant="closable" color="darkgray">
        text
      </Chip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <Chip size="sm">text sm</Chip>
        <Chip size="md">text md</Chip>
      </div>
      <div className="flex items-center gap-2">
        <Chip variant="dropdown" size="sm" color="lightgray">
          text sm
        </Chip>
        <Chip variant="dropdown" size="md" color="lightgray">
          text md
        </Chip>
      </div>
      <div className="flex items-center gap-2">
        <Chip variant="closable" size="sm" color="darkgray">
          text sm
        </Chip>
        <Chip variant="closable" size="md" color="darkgray">
          text md
        </Chip>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip color="white">text</Chip>
      <Chip color="lightgray">text</Chip>
      <Chip color="darkgray">text</Chip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip disabled>Disabled</Chip>
      <Chip variant="closable" disabled>
        Disabled Closable
      </Chip>
      <Chip variant="dropdown" disabled>
        Disabled Dropdown
      </Chip>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip leftIcon={<StarIcon />}>Left icon</Chip>
      <Chip rightIcon={<StarIcon />}>Right icon</Chip>
      <Chip leftIcon={<StarIcon />} rightIcon={<StarIcon />}>
        Both
      </Chip>
    </div>
  ),
};

export const DropdownClickable: Story = {
  render: () => (
    <Chip variant="dropdown" onClick={() => alert('toggle')}>
      Dropdown Chip
    </Chip>
  ),
};

export const ClosableWithHandler: Story = {
  render: () => (
    <Chip variant="closable" onRemove={() => alert('remove')}>
      Removable
    </Chip>
  ),
};

export const DropdownToClosable: Story = {
  render: () => {
    function ClosableChip() {
      const [variant, setVariant] = React.useState<ChipVariant>('dropdown');
      const [color, setColor] = React.useState<ChipColor>('white');
      const [label, setLabel] = React.useState('선택하세요');

      const handleClick = () => {
        setVariant('closable');
        setColor('darkgray');
        setLabel('선택됨');
      };

      const handleRemove = () => {
        setVariant('dropdown');
        setColor('lightgray');
        setLabel('선택하세요');
      };

      return (
        <Chip
          variant={variant}
          color={color}
          onClick={handleClick}
          onRemove={handleRemove}
        >
          {label}
        </Chip>
      );
    }
    return ClosableChip();
  },
};
