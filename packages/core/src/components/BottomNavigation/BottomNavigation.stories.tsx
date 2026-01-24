import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BottomNavigation } from './BottomNavigation';
import { Box } from '../Box';
import { Home, Pen, Contacts, Comment } from '@causw/icons';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Components/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    children: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = React.useState('home');

    return (
      <Box className="h-screen bg-gray-100">
        <Box className="p-4 text-sm text-gray-500">Active: {active}</Box>

        <BottomNavigation>
          <BottomNavigation.Item
            selected={active === 'home'}
            onClick={() => setActive('home')}
          >
            <BottomNavigation.Icon>
              <Home />
            </BottomNavigation.Icon>
            <BottomNavigation.Label>홈</BottomNavigation.Label>
          </BottomNavigation.Item>

          <BottomNavigation.Item
            selected={active === 'community'}
            onClick={() => setActive('community')}
          >
            <BottomNavigation.Icon>
              <Comment />
            </BottomNavigation.Icon>
            <BottomNavigation.Label>커뮤니티</BottomNavigation.Label>
          </BottomNavigation.Item>

          <BottomNavigation.Item
            selected={active === 'write'}
            onClick={() => setActive('write')}
          >
            <BottomNavigation.Icon>
              <Pen />
            </BottomNavigation.Icon>
            <BottomNavigation.Label>글쓰기</BottomNavigation.Label>
          </BottomNavigation.Item>

          <BottomNavigation.Item
            selected={active === 'directory'}
            onClick={() => setActive('directory')}
          >
            <BottomNavigation.Icon>
              <Contacts />
            </BottomNavigation.Icon>
            <BottomNavigation.Label>동문수첩</BottomNavigation.Label>
          </BottomNavigation.Item>
        </BottomNavigation>
      </Box>
    );
  },
};
