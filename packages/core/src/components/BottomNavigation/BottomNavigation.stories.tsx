import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BottomNavigation } from './BottomNavigation';
import { Box } from '../Box';

const meta = {
  title: 'Components/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    children: undefined,
  },
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = React.useState('directory');

    return (
      <Box className="h-screen bg-gray-100">
        <Box className="p-4 text-sm text-gray-500">Active: {active}</Box>

        <BottomNavigation>
          <BottomNavigation.Item active={active === 'home'} asChild>
            <div
              onClick={() => setActive('home')}
              className="flex flex-col items-center"
            >
              <div className="h-6 w-6 rounded-full bg-current" />
              <span className="mt-1">홈</span>
            </div>
          </BottomNavigation.Item>

          <BottomNavigation.Item active={active === 'community'} asChild>
            <div
              onClick={() => setActive('community')}
              className="flex flex-col items-center"
            >
              <div className="h-6 w-6 rounded-full bg-current" />
              <span className="mt-1">커뮤니티</span>
            </div>
          </BottomNavigation.Item>

          <BottomNavigation.Item
            active={active === 'write'}
            icon={<div className="h-6 w-6 rounded-full bg-current" />}
            asChild
          >
            <div
              onClick={() => setActive('write')}
              className="flex flex-col items-center"
            >
              <div className="h-6 w-6 rounded-full bg-current" />
              <span className="mt-1">글쓰기</span>
            </div>
          </BottomNavigation.Item>

          <BottomNavigation.Item
            active={active === 'directory'}
            icon={<div className="h-6 w-6 rounded-full bg-current" />}
            asChild
          >
            <div
              onClick={() => setActive('directory')}
              className="flex flex-col items-center"
            >
              <div className="h-6 w-6 rounded-full bg-current" />
              <span className="mt-1">동문수첩</span>
            </div>
          </BottomNavigation.Item>
        </BottomNavigation>
      </Box>
    );
  },
};
