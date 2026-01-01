import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'caption',
        'body2',
        'body',
        'subtitle',
        'title',
        'head',
        'fixed',
      ],
      description: 'Typography variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size for responsive variants',
    },
    fixedSize: {
      control: 'select',
      options: [12, 14, 15, 16, 18, 20, 24],
      description: 'Size for fixed variant',
    },
    point: {
      control: 'boolean',
      description: 'Emphasis style (bolder weight)',
    },
    as: {
      control: 'select',
      options: [
        'span',
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'div',
        'label',
      ],
      description: 'HTML element to render',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// Caption variants
export const CaptionSmall: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'caption',
    size: 'sm',
  },
};

export const CaptionMedium: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'caption',
    size: 'md',
  },
};

export const CaptionPoint: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'caption',
    size: 'sm',
    point: true,
  },
};

// Body2 variants
export const Body2Small: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body2',
    size: 'sm',
  },
};

export const Body2Medium: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body2',
    size: 'md',
  },
};

// Body variants
export const BodySmall: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body',
    size: 'sm',
  },
};

export const BodyMedium: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body',
    size: 'md',
  },
};

export const BodyPoint: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body',
    size: 'sm',
    point: true,
  },
};

// Subtitle variants
export const SubtitleSmall: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'subtitle',
    size: 'sm',
  },
};

export const SubtitlePoint: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'subtitle',
    size: 'md',
    point: true,
  },
};

// Title variants
export const TitleSmall: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'title',
    size: 'sm',
    as: 'h2',
  },
};

export const TitleMedium: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'title',
    size: 'md',
    as: 'h1',
  },
};

// Head variants
export const HeadSmall: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'head',
    size: 'sm',
    as: 'h1',
  },
};

export const HeadMedium: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'head',
    size: 'md',
    as: 'h1',
  },
};

// Fixed variants
export const Fixed12: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'fixed',
    fixedSize: 12,
  },
};

export const Fixed16: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'fixed',
    fixedSize: 16,
  },
};

export const Fixed24: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'fixed',
    fixedSize: 24,
  },
};

// All variants showcase
export const AllVariants: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text variant="head" size="md" as="h1">
        Head MD - 48px Bold
      </Text>
      <Text variant="head" size="sm" as="h2">
        Head SM - 30px Bold
      </Text>
      <Text variant="title" size="md" as="h2">
        Title MD - 32px Bold
      </Text>
      <Text variant="title" size="sm" as="h3">
        Title SM - 22px Bold
      </Text>
      <Text variant="subtitle" size="md">
        Subtitle MD - 20px Medium
      </Text>
      <Text variant="subtitle" size="sm">
        Subtitle SM - 18px Medium
      </Text>
      <Text variant="body" size="md">
        Body MD - 18px Medium
      </Text>
      <Text variant="body" size="sm">
        Body SM - 16px Regular
      </Text>
      <Text variant="body2" size="md">
        Body2 MD - 16px Medium
      </Text>
      <Text variant="body2" size="sm">
        Body2 SM - 14px Regular
      </Text>
      <Text variant="caption" size="md">
        Caption MD - 14px Medium
      </Text>
      <Text variant="caption" size="sm">
        Caption SM - 12px Regular
      </Text>
    </div>
  ),
};

// Point comparison
export const PointComparison: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Text variant="body" size="sm">
        Body SM - Normal
      </Text>
      <Text variant="body" size="sm" point>
        Body SM - Point (Bold)
      </Text>
      <Text variant="subtitle" size="sm">
        Subtitle SM - Normal
      </Text>
      <Text variant="subtitle" size="sm" point>
        Subtitle SM - Point (Bold)
      </Text>
    </div>
  ),
};
