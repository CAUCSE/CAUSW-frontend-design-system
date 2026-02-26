import type { Meta, StoryObj } from '@storybook/react-vite';
import * as BrandLogoIcons from './brand-logo';

interface BrandLogoPlaygroundArgs {
  icon: string;
  size: number;
}

const meta = {
  title: 'Icons/BrandLogo',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '브랜드 로고 아이콘 전용 갤러리입니다. `src/svg/brand-logo`의 SVG가 생성 스크립트를 통해 `*Logo` 접미사 컴포넌트로 변환됩니다.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;
type PlaygroundStory = StoryObj<Meta<BrandLogoPlaygroundArgs>>;

const brandLogoIconNames = Object.keys(
  BrandLogoIcons,
) as (keyof typeof BrandLogoIcons)[];

export const Playground: PlaygroundStory = {
  args: {
    icon: brandLogoIconNames[0] ?? 'Google',
    size: 24,
  },
  argTypes: {
    icon: {
      control: 'select',
      options: brandLogoIconNames,
      description: '브랜드 로고 아이콘 선택',
    },
    size: {
      control: { type: 'range', min: 16, max: 72, step: 4 },
      description: '아이콘 크기',
    },
  },
  render: ({ icon, size }) => {
    const Icon = BrandLogoIcons[icon as keyof typeof BrandLogoIcons];
    return <Icon size={size} />;
  },
};

export const BrandLogoGallery: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '생성된 모든 브랜드 로고 컴포넌트를 한 번에 확인합니다. 컴포넌트 이름은 `Logo` 접미사 규칙을 따릅니다.',
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '24px',
      }}
    >
      {Object.entries(BrandLogoIcons).map(([name, Icon]) => (
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
