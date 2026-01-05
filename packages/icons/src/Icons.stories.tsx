import type { Meta, StoryObj } from '@storybook/react-vite';
import * as MonoIcons from './mono';
import * as ColoredIcons from './colored';

const meta = {
  title: 'Icons/Gallery',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Mono 아이콘 전체 갤러리
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
          <Icon width={24} height={24} />
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

// Mono 아이콘 크기 variations
export const MonoSizeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <MonoIcons.Heart width={16} height={16} />
      <MonoIcons.Heart width={20} height={20} />
      <MonoIcons.Heart width={24} height={24} />
      <MonoIcons.Heart width={32} height={32} />
      <MonoIcons.Heart width={48} height={48} />
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

// Mono 아이콘 색상 커스터마이징
export const MonoColorCustomization: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <span style={{ color: '#EF4444' }}>
        <MonoIcons.Heart width={24} height={24} />
      </span>
      <span style={{ color: '#3B82F6' }}>
        <MonoIcons.Bell width={24} height={24} />
      </span>
      <span style={{ color: '#10B981' }}>
        <MonoIcons.Home width={24} height={24} />
      </span>
      <span style={{ color: '#F59E0B' }}>
        <MonoIcons.Setting width={24} height={24} />
      </span>
      <span style={{ color: '#8B5CF6' }}>
        <MonoIcons.Mail width={24} height={24} />
      </span>
    </div>
  ),
};
