import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Navbar } from './Navbar';
import { NavItem } from './types';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { navbarStyles } from './Navbar.styles';

/* Mock data */

const items: NavItem[] = [
  { key: 'home', label: '홈' },
  { key: 'community', label: '커뮤니티' },
  { key: 'write', label: '글쓰기' },
  { key: 'directory', label: '동문수첩' },
  { key: 'profile', label: '내 정보' },
];

const utilityItems: NavItem[] = [
  { key: 'about', label: '크자회 소개' },
  { key: 'notifications', label: '알림', badgeCount: 1 },
];

/* Meta */

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    activeKey: {
      control: { type: 'select' },
      options: [...items, ...utilityItems].map((item) => item.key),
      description: 'Currently active navigation key',
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

/* Slot examples */

function TopExample() {
  return <span className="font-semibold text-blue-600">크자회 Logo</span>;
}

function FooterExample() {
  return (
    <Flex align="center" className="gap-3">
      <Box className="h-10 w-10 rounded-lg bg-gray-200" />
      <Box className="flex-1">
        <Box className="text-sm font-medium">유지아</Box>
        <Box className="text-xs text-gray-400">djdkwnl@cau.ac.kr</Box>
      </Box>
      <Box className="text-xl text-gray-400">⋯</Box>
    </Flex>
  );
}

export const Variant: Story = {
  args: {
    variant: 'desktop',
    items,
    activeKey: 'home',
  },
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState(args.activeKey);

    return (
      <Flex className="h-screen bg-gray-100">
        <Navbar
          {...args}
          activeKey={activeKey}
          top={<TopExample />}
          footer={<FooterExample />}
          onNavigate={(key) => setActiveKey(key)}
        />

        <Box className="flex-1 p-8">
          <Box className="text-xl font-bold">Active: {activeKey}</Box>
          <Box className="mt-2 text-sm text-gray-500">
            Click navbar items to change activeKey
          </Box>
        </Box>
      </Flex>
    );
  },
};

export const Desktop: Story = {
  args: {
    variant: 'desktop',
    items: [],
    activeKey: 'home',
  },
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState(args.activeKey);

    const renderItem = (item: NavItem) => {
      const active = item.key === activeKey;

      return (
        <button
          key={item.key}
          className={navbarStyles.desktop.item(active)}
          onClick={() => setActiveKey(item.key)}
        >
          <span>{item.label}</span>
          {item.badgeCount !== undefined && (
            <span className={navbarStyles.desktop.badge}>
              {item.badgeCount}
            </span>
          )}
        </button>
      );
    };

    return (
      <Flex className="h-screen bg-gray-100">
        <Navbar
          {...args}
          items={[]}
          top={<TopExample />}
          footer={<FooterExample />}
        >
          <div className="flex h-full flex-col">
            <div className="space-y-1">{items.map(renderItem)}</div>

            <div className="mt-auto space-y-1">
              {utilityItems.map(renderItem)}
            </div>
          </div>
        </Navbar>
      </Flex>
    );
  },
};

export const withoutBottomContent: Story = {
  args: {
    variant: 'desktop',
    items,
    activeKey: 'home',
  },
  parameters: {
    controls: {
      exclude: ['variant'],
    },
  },
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState(args.activeKey);

    return (
      <Flex className="h-screen bg-gray-100">
        <Navbar
          {...args}
          activeKey={activeKey}
          top={<TopExample />}
          footer={<FooterExample />}
          onNavigate={(key) => setActiveKey(key)}
        />

        <Box className="flex-1 p-8">
          <Box className="text-xl font-bold">Active: {activeKey}</Box>
          <Box className="mt-2 text-sm text-gray-500">
            Desktop layout example
          </Box>
        </Box>
      </Flex>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('크자회 Logo')).toBeInTheDocument();
  },
};

export const Mobile: Story = {
  args: {
    variant: 'mobile',
    items,
    activeKey: 'directory',
  },
  parameters: {
    controls: {
      exclude: ['variant'],
    },
  },
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState(args.activeKey);

    return (
      <Box className="h-screen bg-gray-100">
        <Box className="p-4 text-sm text-gray-500">Active: {activeKey}</Box>

        <Navbar
          {...args}
          activeKey={activeKey}
          onNavigate={(key) => setActiveKey(key)}
        />
      </Box>
    );
  },
};
