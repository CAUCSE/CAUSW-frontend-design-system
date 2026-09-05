import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { VStack } from '../VStack';
import { Bell, Board, Contacts, Home, Setting } from '@causw/icons';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
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
      <Flex className="h-screen bg-gray-100">
        <Sidebar selected={active} onSelectChange={(v) => setActive(String(v))}>
          <VStack gap="xl" className="items-start">
            <Sidebar.Item value="home">
              <Sidebar.ItemIcon>
                <Home />
              </Sidebar.ItemIcon>
              <Sidebar.ItemText>홈</Sidebar.ItemText>
            </Sidebar.Item>
            <Sidebar.Item value="news">
              <Sidebar.ItemIcon>
                <Board />
              </Sidebar.ItemIcon>
              <Sidebar.ItemText>소식</Sidebar.ItemText>
            </Sidebar.Item>
            <Sidebar.Item value="directory">
              <Sidebar.ItemIcon>
                <Contacts />
              </Sidebar.ItemIcon>
              <Sidebar.ItemText>동문수첩</Sidebar.ItemText>
            </Sidebar.Item>
            <Sidebar.Item value="profile">
              <Sidebar.ItemIcon>
                <Setting />
              </Sidebar.ItemIcon>
              <Sidebar.ItemText>내 정보</Sidebar.ItemText>
            </Sidebar.Item>
          </VStack>

          <div className="w-10 border-t border-gray-200" />

          <Sidebar.Item value="notifications">
            <Sidebar.ItemIcon>
              <Bell />
            </Sidebar.ItemIcon>
            <Sidebar.ItemText>알림</Sidebar.ItemText>
          </Sidebar.Item>
        </Sidebar>

        <Box className="flex-1 p-8">
          <Box className="text-xl font-bold">Active: {active}</Box>
          <Box className="mt-2 text-sm text-gray-500">
            컴팩트 데스크톱 내비게이션 기본 예시
          </Box>
        </Box>
      </Flex>
    );
  },
};
