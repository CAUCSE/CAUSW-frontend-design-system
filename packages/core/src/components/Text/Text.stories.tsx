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
        'title-48-bold',
        'title-32-bold',
        'title-30-bold',
        'title-24-bold',
        'title-22-bold',
        'subtitle-20-bold',
        'subtitle-18-bold',
        'subtitle-16-bold',
        'body-18-medium',
        'body-16-medium',
        'body-16-regular',
        'body-15-semibold',
        'body-15-medium',
        'body-15-regular',
        'body-14-semibold',
        'body-14-medium',
        'body-14-regular',
        'caption-12-semibold',
        'caption-12-medium',
        'caption-12-regular',
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
        'blue-100',
        'blue-500',
        'blue-700',
        'red-100',
        'red-400',
        'white',
        'black',
      ],
      description: 'Text color',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
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
    typography: 'body-16-regular',
  },
};

// Title variants
export const TitleLarge: Story = {
  args: {
    children: 'Title 48 Bold',
    typography: 'title-48-bold',
    as: 'h1',
  },
};

export const TitleMedium: Story = {
  args: {
    children: 'Title 32 Bold',
    typography: 'title-32-bold',
    as: 'h2',
  },
};

export const TitleSmall: Story = {
  args: {
    children: 'Title 24 Bold',
    typography: 'title-24-bold',
    as: 'h3',
  },
};

// Subtitle variants
export const SubtitleLarge: Story = {
  args: {
    children: 'Subtitle 20 Bold',
    typography: 'subtitle-20-bold',
    as: 'h4',
  },
};

export const SubtitleMedium: Story = {
  args: {
    children: 'Subtitle 18 Bold',
    typography: 'subtitle-18-bold',
    as: 'h5',
  },
};

// Body variants
export const BodyLarge: Story = {
  args: {
    children: 'Body 18 Medium',
    typography: 'body-18-medium',
    as: 'p',
  },
};

export const BodyMedium: Story = {
  args: {
    children: 'Body 16 Regular',
    typography: 'body-16-regular',
    as: 'p',
  },
};

export const BodySmall: Story = {
  args: {
    children: 'Body 14 Regular',
    typography: 'body-14-regular',
    as: 'p',
  },
};

export const CaptionRegular: Story = {
  args: {
    children: 'Caption 12 Regular',
    typography: 'caption-12-regular',
    as: 'span',
  },
};

// All variants showcase
export const AllTypographyPresets: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Text typography="title-48-bold" as="h1">
        title-48-bold
      </Text>
      <Text typography="title-32-bold" as="h2">
        title-32-bold
      </Text>
      <Text typography="title-30-bold" as="h2">
        title-30-bold
      </Text>
      <Text typography="title-24-bold" as="h3">
        title-24-bold
      </Text>
      <Text typography="title-22-bold" as="h4">
        title-22-bold
      </Text>

      <div className="h-4" />

      <Text typography="subtitle-20-bold">subtitle-20-bold</Text>
      <Text typography="subtitle-18-bold">subtitle-18-bold</Text>
      <Text typography="subtitle-16-bold">subtitle-16-bold</Text>

      <div className="h-4" />

      <Text typography="body-18-medium">body-18-medium</Text>
      <Text typography="body-16-medium">body-16-medium</Text>
      <Text typography="body-16-regular">body-16-regular</Text>
      <Text typography="body-15-semibold">body-15-semibold</Text>
      <Text typography="body-15-medium">body-15-medium</Text>
      <Text typography="body-15-regular">body-15-regular</Text>
      <Text typography="body-14-semibold">body-14-semibold</Text>
      <Text typography="body-14-medium">body-14-medium</Text>
      <Text typography="body-14-regular">body-14-regular</Text>

      <div className="h-4" />
      <Text typography="caption-12-semibold">caption-12-semibold</Text>
      <Text typography="caption-12-medium">caption-12-medium</Text>
      <Text typography="caption-12-regular">caption-12-regular</Text>
    </div>
  ),
};

// Text Alignment
export const Alignment: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div className="flex w-[600px] flex-col gap-4 border border-gray-400 p-4">
      <Text as="p" align="left" typography="body-16-regular">
        왼쪽 정렬 (left) - 텍스트가 왼쪽에 정렬됩니다.
      </Text>
      <Text as="p" align="center" typography="body-16-regular">
        가운데 정렬 (center) - 텍스트가 가운데에 정렬됩니다.
      </Text>
      <Text as="p" align="right" typography="body-16-regular">
        오른쪽 정렬 (right) - 텍스트가 오른쪽에 정렬됩니다.
      </Text>
      <Text as="p" align="justify" typography="body-16-regular">
        양쪽 정렬 (justify) - 텍스트가 양쪽 끝에 맞춰 정렬됩니다. 긴 텍스트에서
        효과가 더 잘 보입니다.
      </Text>
    </div>
  ),
};
