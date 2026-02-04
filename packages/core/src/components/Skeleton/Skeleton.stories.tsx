import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { Flex } from '../Flex';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Skeleton**은 콘텐츠가 로딩되는 동안 이후 나타날 요소의 윤곽을 미리 보여주는 UI 요소입니다.

Spinner와 달리 실제 레이아웃과 유사한 형태를 유지하여,
사용자가 로딩 상태를 더 빠르고 자연스럽게 인지할 수 있도록 돕습니다.

Skeleton은 레이아웃을 책임지지 않으며,
\`Flex\`, \`HStack\` 등 레이아웃 컴포넌트와 조합하여 사용됩니다.

> Storybook에서는 시각적 확인을 위해 px 기반 사이즈를 사용합니다.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description: 'Skeleton width (px)',
      table: {
        type: { summary: 'number' },
        category: 'Style',
      },
    },
    height: {
      control: 'number',
      description: 'Skeleton height (px)',
      table: {
        type: { summary: 'number' },
        category: 'Style',
      },
    },
    radius: {
      control: 'select',
      options: ['0', '8', '16', 'full'],
      description: 'Border radius preset',
      table: {
        type: { summary: `'0' | '8' | '16' | 'full'` },
        category: 'Style',
      },
    },
    tone: {
      control: 'select',
      options: ['neutral', 'magic'],
      description: 'Skeleton color tone',
      table: {
        type: { summary: `'neutral' | 'magic'` },
        category: 'Style',
      },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 320,
    height: 48,
    radius: '8',
    tone: 'neutral',
  },
};

export const Radius: Story = {
  render: () => (
    <Flex gap="lg" align="center">
      <Skeleton radius="0" width={48} height={48} />
      <Skeleton radius="8" width={48} height={48} />
      <Skeleton radius="16" width={48} height={48} />
      <Skeleton radius="full" width={48} height={48} />
    </Flex>
  ),
};

export const Tone: Story = {
  render: () => (
    <Flex direction="column" gap="lg" style={{ width: 400 }}>
      <Skeleton tone="neutral" radius="16" width={400} height={48} />
      <Skeleton tone="magic" radius="16" width={400} height={48} />
    </Flex>
  ),
};

export const TextPlaceholder: Story = {
  render: () => (
    <Flex direction="column" gap="sm" style={{ width: 360 }}>
      <Skeleton width={360} height={14} />
      <Skeleton width={320} height={14} />
      <Skeleton width={280} height={14} />
    </Flex>
  ),
};

export const CardPlaceholder: Story = {
  render: () => (
    <Flex direction="column" gap="md" style={{ width: 320 }}>
      <Skeleton width={320} height={180} radius="16" />
      <Skeleton width={200} height={16} />
      <Skeleton width={260} height={16} />
    </Flex>
  ),
};
