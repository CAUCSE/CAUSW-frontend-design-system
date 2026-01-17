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
  title: 'Layouts/Float',
  component: Float,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Float` component is a utility component used to position elements absolutely, fixed, or stuck relative to their container or the viewport. It simplifies the process of applying positioning styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    floatType: {
      control: 'select',
      description: 'The positioning strategy to use.',
      options: ['absolute', 'fixed', 'sticky', 'relative'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'absolute' },
      },
    },
    zIndex: {
      control: 'select',
      description: 'The z-index level to apply.',
      options: ['sticky', 'dropdown', 'bottomsheet', 'modal', 'toast'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sticky' },
      },
    },
    top: { control: 'number', description: 'Distance from top (px)' },
    bottom: { control: 'number', description: 'Distance from bottom (px)' },
    left: { control: 'number', description: 'Distance from left (px)' },
    right: { control: 'number', description: 'Distance from right (px)' },
  },
};

export default meta;
type Story = StoryObj<typeof Float>;

export const Default: Story = {
  args: {
    bottom: 16,
    right: 16,
    children: 'Floating Element',
    className: 'rounded-md bg-blue-500 p-2 text-white shadow-md',
  },
  render: (args) => (
    <div className="relative h-[400px] w-full border border-dashed border-gray-300 bg-gray-100 p-4">
      <div className="mb-4 text-gray-500">
        Adjust the controls below to move the floating element.
      </div>
      <Float {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The default story allows you to interactively test the positioning props (`top`, `bottom`, `left`, `right`) and `floatType`.',
      },
    },
  },
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
            <p>글 쓰기</p>
          </HStack>
        </FloatingActionButton>
      </Float>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Common use case: Positioning a Floating Action Button (FAB) at the bottom-right corner of a container.',
      },
    },
  },
};

export const ZIndex: Story = {
  render: () => (
    <div className="relative h-[600px] w-[600px] bg-gray-100 p-4">
      <Float
        top={40}
        left={40}
        className="flex h-20 w-20 items-center justify-center bg-blue-500 p-2 text-white shadow-lg"
        zIndex="dropdown"
      >
        z-dropdown
      </Float>
      <Float
        top={60}
        left={60}
        className="flex h-20 w-20 items-center justify-center bg-red-500 p-2 text-white shadow-lg"
        zIndex="modal"
      >
        z-modal
      </Float>
      <div className="absolute top-24 left-24 p-2 text-sm text-gray-500">
        (Red should overlap Blue due to higher z-index)
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates how different `zIndex` values affect the stacking order of floating elements.',
      },
    },
  },
};
