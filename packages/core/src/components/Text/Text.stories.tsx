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
    typography: {
      control: 'select',
      options: [
        'caption-sm',
        'caption-sm-point',
        'caption-md',
        'caption-md-point',
        'body2-sm',
        'body2-sm-point',
        'body2-md',
        'body2-md-point',
        'body-sm',
        'body-sm-point',
        'body-md',
        'body-md-point',
        'subtitle-sm',
        'subtitle-sm-point',
        'subtitle-md',
        'subtitle-md-point',
        'title-sm',
        'title-md',
        'head-sm',
        'head-md',
        'fixed-12',
        'fixed-14',
        'fixed-15',
        'fixed-16',
        'fixed-18',
        'fixed-20',
        'fixed-24',
      ],
      description: 'Typography preset',
    },
    textColor: {
      control: 'select',
      options: [
        'gray-50',
        'gray-100',
        'gray-200',
        'gray-300',
        'gray-400',
        'gray-500',
        'gray-600',
        'gray-700',
        'gray-800',
        'gray-900',
        'blue-50',
        'blue-500',
        'blue-700',
        'red-100',
        'red-400',
        'white',
        'black',
      ],
      description: 'Text color',
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

// Default
export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    typography: 'body-sm',
  },
};

// Caption variants
export const CaptionSmall: Story = {
  args: {
    children: 'Caption Small - The quick brown fox',
    typography: 'caption-sm',
  },
};

export const CaptionSmallPoint: Story = {
  args: {
    children: 'Caption Small Point - The quick brown fox',
    typography: 'caption-sm-point',
  },
};

// Body2 variants
export const Body2Small: Story = {
  args: {
    children: 'Body2 Small - The quick brown fox',
    typography: 'body2-sm',
  },
};

export const Body2SmallPoint: Story = {
  args: {
    children: 'Body2 Small Point - The quick brown fox',
    typography: 'body2-sm-point',
  },
};

// Body variants
export const BodySmall: Story = {
  args: {
    children: 'Body Small - The quick brown fox',
    typography: 'body-sm',
  },
};

export const BodySmallPoint: Story = {
  args: {
    children: 'Body Small Point - The quick brown fox',
    typography: 'body-sm-point',
  },
};

// Title variants
export const TitleSmall: Story = {
  args: {
    children: 'Title Small',
    typography: 'title-sm',
    as: 'h2',
  },
};

export const TitleMedium: Story = {
  args: {
    children: 'Title Medium',
    typography: 'title-md',
    as: 'h1',
  },
};

// Head variants
export const HeadSmall: Story = {
  args: {
    children: 'Head Small',
    typography: 'head-sm',
    as: 'h1',
  },
};

export const HeadMedium: Story = {
  args: {
    children: 'Head Medium',
    typography: 'head-md',
    as: 'h1',
  },
};

// Fixed size variants
export const Fixed14: Story = {
  args: {
    children: 'Fixed 14px - The quick brown fox',
    typography: 'fixed-14',
  },
};

export const Fixed20: Story = {
  args: {
    children: 'Fixed 20px - The quick brown fox',
    typography: 'fixed-20',
  },
};

// Color examples
export const WithColor: Story = {
  args: {
    children: 'Blue Text',
    typography: 'body-md',
    textColor: 'blue-500',
  },
};

export const ErrorColor: Story = {
  args: {
    children: 'Error Text',
    typography: 'body-sm',
    textColor: 'red-400',
  },
};

// All variants showcase
export const AllTypographyPresets: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Text typography="head-md" as="h1">
        head-md - 48px Bold
      </Text>
      <Text typography="head-sm" as="h2">
        head-sm - 30px Bold
      </Text>
      <Text typography="title-md" as="h2">
        title-md - 32px Bold
      </Text>
      <Text typography="title-sm" as="h3">
        title-sm - 22px Bold
      </Text>
      <Text typography="subtitle-md">subtitle-md - 20px Medium</Text>
      <Text typography="subtitle-md-point">subtitle-md-point - 20px Bold</Text>
      <Text typography="subtitle-sm">subtitle-sm - 18px Medium</Text>
      <Text typography="subtitle-sm-point">subtitle-sm-point - 18px Bold</Text>
      <Text typography="body-md">body-md - 18px Medium</Text>
      <Text typography="body-md-point">body-md-point - 18px Bold</Text>
      <Text typography="body-sm">body-sm - 16px Regular</Text>
      <Text typography="body-sm-point">body-sm-point - 16px Bold</Text>
      <Text typography="body2-md">body2-md - 16px Medium</Text>
      <Text typography="body2-md-point">body2-md-point - 16px Semibold</Text>
      <Text typography="body2-sm">body2-sm - 14px Regular</Text>
      <Text typography="body2-sm-point">body2-sm-point - 14px Semibold</Text>
      <Text typography="caption-md">caption-md - 14px Medium</Text>
      <Text typography="caption-md-point">
        caption-md-point - 14px Semibold
      </Text>
      <Text typography="caption-sm">caption-sm - 12px Regular</Text>
      <Text typography="caption-sm-point">
        caption-sm-point - 12px Semibold
      </Text>
    </div>
  ),
};

// Fixed sizes showcase
export const FixedSizes: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text typography="fixed-24">fixed-24 - 24px Bold</Text>
      <Text typography="fixed-20">fixed-20 - 20px Semibold</Text>
      <Text typography="fixed-18">fixed-18 - 18px Medium</Text>
      <Text typography="fixed-16">fixed-16 - 16px Medium</Text>
      <Text typography="fixed-15">fixed-15 - 15px Semibold</Text>
      <Text typography="fixed-14">fixed-14 - 14px Medium</Text>
      <Text typography="fixed-12">fixed-12 - 12px Medium</Text>
    </div>
  ),
};

// Color palette
export const ColorPalette: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text typography="body-sm" textColor="gray-900">
        gray-900
      </Text>
      <Text typography="body-sm" textColor="gray-700">
        gray-700 (default)
      </Text>
      <Text typography="body-sm" textColor="gray-500">
        gray-500
      </Text>
      <Text typography="body-sm" textColor="gray-400">
        gray-400
      </Text>
      <Text typography="body-sm" textColor="blue-500">
        blue-500
      </Text>
      <Text typography="body-sm" textColor="blue-700">
        blue-700
      </Text>
      <Text typography="body-sm" textColor="red-400">
        red-400
      </Text>
    </div>
  ),
};
