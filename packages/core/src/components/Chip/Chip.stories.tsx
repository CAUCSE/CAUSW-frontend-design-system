import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';

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
const ChevronDownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.35545 5.37734L-0.000195503 1.07532L1.08852 0L4.89981 3.76437L8.71109 0L9.7998 1.07532L5.44416 5.37734C5.29978 5.51991 5.10397 5.6 4.89981 5.6C4.69564 5.6 4.49983 5.51991 4.35545 5.37734Z"
      fill="currentColor"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M7.0001 8.04344L3.34839 11.6952C3.21176 11.8318 3.03787 11.9001 2.82671 11.9001C2.61556 11.9001 2.44167 11.8318 2.30504 11.6952C2.16841 11.5585 2.1001 11.3846 2.1001 11.1735C2.1001 10.9623 2.16841 10.7884 2.30504 10.6518L5.95675 7.0001L2.30504 3.34839C2.16841 3.21176 2.1001 3.03787 2.1001 2.82671C2.1001 2.61556 2.16841 2.44167 2.30504 2.30504C2.44167 2.16841 2.61556 2.1001 2.82671 2.1001C3.03787 2.1001 3.21176 2.16841 3.34839 2.30504L7.0001 5.95675L10.6518 2.30504C10.7884 2.16841 10.9623 2.1001 11.1735 2.1001C11.3846 2.1001 11.5585 2.16841 11.6952 2.30504C11.8318 2.44167 11.9001 2.61556 11.9001 2.82671C11.9001 3.03787 11.8318 3.21176 11.6952 3.34839L8.04344 7.0001L11.6952 10.6518C11.8318 10.7884 11.9001 10.9623 11.9001 11.1735C11.9001 11.3846 11.8318 11.5585 11.6952 11.6952C11.5585 11.8318 11.3846 11.9001 11.1735 11.9001C10.9623 11.9001 10.7884 11.8318 10.6518 11.6952L7.0001 8.04344Z"
      fill="currentColor"
    />
  </svg>
);
const CloseIcon2 = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <path
      d="M7.0001 8.04344L3.34839 11.6952C3.21176 11.8318 3.03787 11.9001 2.82671 11.9001C2.61556 11.9001 2.44167 11.8318 2.30504 11.6952C2.16841 11.5585 2.1001 11.3846 2.1001 11.1735C2.1001 10.9623 2.16841 10.7884 2.30504 10.6518L5.95675 7.0001L2.30504 3.34839C2.16841 3.21176 2.1001 3.03787 2.1001 2.82671C2.1001 2.61556 2.16841 2.44167 2.30504 2.30504C2.44167 2.16841 2.61556 2.1001 2.82671 2.1001C3.03787 2.1001 3.21176 2.16841 3.34839 2.30504L7.0001 5.95675L10.6518 2.30504C10.7884 2.16841 10.9623 2.1001 11.1735 2.1001C11.3846 2.1001 11.5585 2.16841 11.6952 2.30504C11.8318 2.44167 11.9001 2.61556 11.9001 2.82671C11.9001 3.03787 11.8318 3.21176 11.6952 3.34839L8.04344 7.0001L11.6952 10.6518C11.8318 10.7884 11.9001 10.9623 11.9001 11.1735C11.9001 11.3846 11.8318 11.5585 11.6952 11.6952C11.5585 11.8318 11.3846 11.9001 11.1735 11.9001C10.9623 11.9001 10.7884 11.8318 10.6518 11.6952L7.0001 8.04344Z"
      fill="currentColor"
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
      <Chip color="lightgray" onClick={() => {}}>
        Dropdown <ChevronDownIcon />
      </Chip>
      <Chip color="darkgray">
        Closable
        <button type="button" className="cursor-pointer" onClick={() => {}}>
          <CloseIcon />
        </button>
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
        <Chip size="sm" color="lightgray" onClick={() => {}}>
          text sm <ChevronDownIcon />
        </Chip>
        <Chip size="md" color="lightgray" onClick={() => {}}>
          text md <ChevronDownIcon />
        </Chip>
      </div>
      <div className="flex items-center gap-2">
        <Chip size="sm" color="darkgray">
          text sm{' '}
          <button
            type="button"
            className="h-4 w-4 cursor-pointer"
            onClick={() => {}}
          >
            <CloseIcon2 />
          </button>
        </Chip>
        <Chip size="md" color="darkgray">
          text md{' '}
          <button type="button" className="cursor-pointer" onClick={() => {}}>
            <CloseIcon />
          </button>
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
      <Chip className="bg-amber-300">custom color</Chip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip disabled>Disabled</Chip>
      <Chip disabled onClick={() => {}}>
        Disabled Closable <ChevronDownIcon />
      </Chip>
      <Chip disabled>
        Disabled Dropdown
        <button type="button" className="cursor-pointer" onClick={() => {}}>
          <CloseIcon />
        </button>
      </Chip>
    </div>
  ),
};
export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip>
        <StarIcon />
        Left icon
      </Chip>
      <Chip>
        Right icon
        <StarIcon />
      </Chip>
      <Chip>
        <StarIcon />
        Both
        <StarIcon />
      </Chip>
      <Chip>
        <button
          type="button"
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            alert('star');
          }}
        >
          <StarIcon />
        </button>
        left clickable /right default
        <StarIcon />
      </Chip>
    </div>
  ),
};
