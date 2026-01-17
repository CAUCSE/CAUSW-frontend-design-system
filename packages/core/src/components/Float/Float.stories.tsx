import { Meta, StoryObj } from '@storybook/react';
import { FloatingActionButton } from '../FloatingActionButton';
import { HStack } from '../HStack';
import { Float } from './Float';

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const meta: Meta<typeof Float> = {
  title: 'Components/Float',
  component: Float,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Float>;

export const Default: Story = {
  render: () => (
    <div className="relative h-[200px] w-full bg-gray-100 p-4">
      <div className="mb-4">Relative parent container</div>
      <Float
        top={16}
        right={16}
        className="rounded-md bg-blue-500 p-2 text-white shadow-md"
      >
        Absolute (Top 16px / Right 16px)
      </Float>
      <Float
        bottom={16}
        left={16}
        className="rounded-md bg-red-500 p-2 text-white shadow-md"
      >
        Absolute (Bottom 16px / Left 16px)
      </Float>
    </div>
  ),
};

export const FAB: Story = {
  render: () => (
    <div className="relative h-[400px] w-full bg-gray-50 p-4">
      <div className="mb-4">
        Float used for Floating Action Button (bottom right)
      </div>
      <Float floatType="absolute" bottom={24} right={24} zIndex="toast">
        <FloatingActionButton>
          <HStack gap="xs" className="items-center">
            <PlusIcon />
            <p>글쓰기</p>
          </HStack>
        </FloatingActionButton>
      </Float>
    </div>
  ),
};

export const ZIndex: Story = {
  render: () => (
    <div className="relative h-[200px] w-full bg-gray-100 p-4">
      <Float
        top={40}
        left={40}
        className="h-20 w-20 bg-blue-500 p-2 text-white"
        zIndex="dropdown"
      >
        z-dropdown (1000)
      </Float>
      <Float
        top={64}
        left={64}
        className="h-20 w-20 bg-red-500 p-2 text-white"
        zIndex="modal"
      >
        z-modal (1050)
      </Float>
      <div className="absolute top-24 left-24 p-2">
        (Red should overlap Blue)
      </div>
    </div>
  ),
};
