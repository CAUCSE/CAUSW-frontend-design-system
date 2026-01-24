import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import { Bell, Board, Book, Contacts, Home, Pen, Question } from '@causw/icons';
import { Float } from '../Float';

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

function HeaderExample() {
  return <span className="px-2.5 font-bold text-blue-500">크자회 Logo</span>;
}

function FooterExample() {
  return (
    <Flex align="center" className="gap-3">
      <Box className="h-10 w-10 rounded-md bg-gray-200" />
      <Box className="flex-1">
        <Box className="text-sm font-bold text-gray-700">유지아</Box>
        <Box className="text-xs text-gray-400">djdkwnl@cau.ac.kr</Box>
      </Box>
      <Box className="text-xl text-gray-400">⋯</Box>
    </Flex>
  );
}

export const Default: Story = {
  render: () => {
    const [active, setActive] = React.useState('home');

    return (
      <Flex className="h-screen bg-gray-100">
        <Sidebar selected={active} onSelectChange={(v) => setActive(String(v))}>
          <Sidebar.Header>
            <HeaderExample />
          </Sidebar.Header>

          <Sidebar.Content>
            {/* custom content */}
            <div className="flex h-full flex-col">
              <VStack gap="sm">
                <Sidebar.Item value="home" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Home />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>홈</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>

                <Sidebar.Item value="community" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Board size={18} />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>커뮤니티</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>

                <Sidebar.Item value="write" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Pen size={18} />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>글쓰기</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>

                <Sidebar.Item value="directory" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Contacts size={18} />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>동문수첩</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>

                <Sidebar.Item value="profile" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Book size={18} />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>내 동문수첩</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>
              </VStack>

              <VStack gap="sm" className="mt-auto">
                <Sidebar.Item value="about" asChild>
                  <HStack className="gap-3.5">
                    <Sidebar.ItemIcon>
                      <Question size={18} />
                    </Sidebar.ItemIcon>
                    <Sidebar.ItemText>크자회 소개</Sidebar.ItemText>
                  </HStack>
                </Sidebar.Item>
                <Sidebar.Item value="notifications" asChild>
                  <HStack className="gap-3.5 pr-2">
                    <div className="relative">
                      <Float floatType="absolute" top={-2} right={-2}>
                        <div className="h-1 w-1 rounded-full bg-red-500" />
                      </Float>
                      <Sidebar.ItemIcon asChild>
                        <Bell size={18} />
                      </Sidebar.ItemIcon>
                    </div>
                    <Sidebar.ItemText>알림</Sidebar.ItemText>
                    <Box className="ml-auto flex h-6 w-6 items-center justify-center rounded-sm bg-red-100 text-xs text-red-400">
                      1
                    </Box>
                  </HStack>
                </Sidebar.Item>
              </VStack>
            </div>
          </Sidebar.Content>

          <Sidebar.Footer>
            <FooterExample />
          </Sidebar.Footer>
        </Sidebar>

        <Box className="flex-1 p-8">
          <Box className="text-xl font-bold">Active: {active}</Box>
          <Box className="mt-2 text-sm text-gray-500">
            Custom content + Footer 포함 기본 예시
          </Box>
        </Box>
      </Flex>
    );
  },
};
