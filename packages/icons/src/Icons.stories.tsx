import type { Meta, StoryObj } from '@storybook/react-vite';
import * as MonoIcons from './mono';
import * as ColoredIcons from './colored';

interface PlaygroundArgs {
  icon: string;
  size: number;
  active: boolean;
  color: string;
}

const meta = {
  title: 'Icons/Gallery',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;
type PlaygroundStory = StoryObj<Meta<PlaygroundArgs>>;

// 아이콘 이름 목록
const monoIconNames = Object.keys(MonoIcons) as (keyof typeof MonoIcons)[];
const coloredIconNames = Object.keys(
  ColoredIcons,
) as (keyof typeof ColoredIcons)[];
const allIconNames = [...monoIconNames, ...coloredIconNames];

// Playground
export const Playground: PlaygroundStory = {
  args: {
    icon: 'Heart',
    size: 24,
    active: false,
    color: '',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: allIconNames,
      description: '아이콘 선택',
    },
    size: {
      control: { type: 'range', min: 16, max: 64, step: 4 },
      description: '아이콘 크기',
    },
    active: {
      control: 'boolean',
      description: '활성 상태 (mono만 적용)',
    },
    color: {
      control: 'color',
      description: '커스텀 색상 (mono만 적용, 지정시 active 무시)',
    },
  },
  render: ({ icon, size, active, color }) => {
    const isColored = (icon as string).endsWith('Colored');

    if (isColored) {
      const Icon = ColoredIcons[icon as keyof typeof ColoredIcons];
      return <Icon size={size} />;
    }

    const Icon = MonoIcons[icon as keyof typeof MonoIcons];
    const colorProps = color ? { fill: color, color } : {};
    return <Icon size={size} active={active} {...colorProps} />;
  },
};

// Mono 아이콘 전체 갤러리 (비활성)
export const MonoIconGallery: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '24px',
      }}
    >
      {Object.entries(MonoIcons).map(([name, Icon]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Icon size={24} />
          <span style={{ fontSize: '12px', color: '#6B7280' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

// Mono 아이콘 전체 갤러리 (활성)
export const MonoIconGalleryActive: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '24px',
      }}
    >
      {Object.entries(MonoIcons).map(([name, Icon]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Icon size={24} active />
          <span style={{ fontSize: '12px', color: '#6B7280' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

// Colored 아이콘 전체 갤러리
export const ColoredIconGallery: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '24px',
      }}
    >
      {Object.entries(ColoredIcons).map(([name, Icon]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Icon size={24} />
          <span style={{ fontSize: '12px', color: '#6B7280' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

// Mono 아이콘 활성/비활성 상태
export const MonoActiveInactive: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ marginBottom: '8px', color: '#6B7280' }}>
          비활성 (기본) - #CACED5
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <MonoIcons.Heart size={24} />
          <MonoIcons.Bell size={24} />
          <MonoIcons.Home size={24} />
          <MonoIcons.Setting size={24} />
          <MonoIcons.Mail size={24} />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: '8px', color: '#6B7280' }}>활성 - #4A5565</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <MonoIcons.Heart size={24} active />
          <MonoIcons.Bell size={24} active />
          <MonoIcons.Home size={24} active />
          <MonoIcons.Setting size={24} active />
          <MonoIcons.Mail size={24} active />
        </div>
      </div>
    </div>
  ),
};

// Mono 아이콘 크기 variations
export const MonoSizeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <MonoIcons.Heart size={16} active />
      <MonoIcons.Heart size={20} active />
      <MonoIcons.Heart size={24} active />
      <MonoIcons.Heart size={32} active />
      <MonoIcons.Heart size={48} active />
    </div>
  ),
};

// Colored 아이콘 크기 variations
export const ColoredSizeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <ColoredIcons.HeartColored size={16} />
      <ColoredIcons.HeartColored size={20} />
      <ColoredIcons.HeartColored size={24} />
      <ColoredIcons.HeartColored size={32} />
      <ColoredIcons.HeartColored size={48} />
    </div>
  ),
};
