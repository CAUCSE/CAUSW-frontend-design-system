import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar, sidebarBadgeClassName } from './Sidebar';
import { Box } from '../Box';
import { Flex } from '../Flex';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    children: undefined,
  },
} satisfies Meta<typeof Sidebar>;

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
        <Sidebar>
          <Sidebar.Header>
            <HeaderExample />
          </Sidebar.Header>

          <Sidebar.Content>
            {/* custom content */}
            <div className="flex h-full flex-col">
              <div>
                <Sidebar.Item active={active === 'home'} asChild>
                  <div onClick={() => setActive('home')}>홈</div>
                </Sidebar.Item>

                <Sidebar.Item active={active === 'community'} asChild>
                  <div onClick={() => setActive('community')}>커뮤니티</div>
                </Sidebar.Item>

                <Sidebar.Item active={active === 'write'} asChild>
                  <div onClick={() => setActive('write')}>글쓰기</div>
                </Sidebar.Item>

                <Sidebar.Item active={active === 'directory'} asChild>
                  <div onClick={() => setActive('directory')}>동문수첩</div>
                </Sidebar.Item>

                <Sidebar.Item active={active === 'profile'} asChild>
                  <div onClick={() => setActive('profile')}>내 동문수첩</div>
                </Sidebar.Item>
              </div>

              <div className="mt-auto">
                <Sidebar.Item active={active === 'about'} asChild>
                  <div onClick={() => setActive('about')}>크자회 소개</div>
                </Sidebar.Item>
                <Sidebar.Item active={active === 'notifications'} asChild>
                  <div onClick={() => setActive('notifications')}>
                    알림
                    <span className={sidebarBadgeClassName}>1</span>
                  </div>
                </Sidebar.Item>
              </div>
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

export const WithoutCustomContent: Story = {
  render: () => {
    const [active, setActive] = React.useState('home');

    return (
      <Flex className="h-screen bg-gray-100">
        <Sidebar>
          <Sidebar.Header>
            <HeaderExample />
          </Sidebar.Header>

          <Sidebar.Content>
            <Sidebar.Item active={active === 'home'} asChild>
              <div onClick={() => setActive('home')}>홈</div>
            </Sidebar.Item>

            <Sidebar.Item active={active === 'community'} asChild>
              <div onClick={() => setActive('community')}>커뮤니티</div>
            </Sidebar.Item>

            <Sidebar.Item active={active === 'write'} asChild>
              <div onClick={() => setActive('write')}>글쓰기</div>
            </Sidebar.Item>

            <Sidebar.Item active={active === 'directory'} asChild>
              <div onClick={() => setActive('directory')}>동문수첩</div>
            </Sidebar.Item>

            <Sidebar.Item active={active === 'profile'} asChild>
              <div onClick={() => setActive('profile')}>내 동문수첩</div>
            </Sidebar.Item>
          </Sidebar.Content>

          <Sidebar.Footer>
            <FooterExample />
          </Sidebar.Footer>
        </Sidebar>

        <Box className="flex-1 p-8">
          <Box className="text-xl font-bold">Active: {active}</Box>
          <Box className="mt-2 text-sm text-gray-500">
            Custom content 없이 기본 Item만 사용한 예시
          </Box>
        </Box>
      </Flex>
    );
  },
};

export const WithoutFooter: Story = {
  render: () => {
    const [active, setActive] = React.useState('home');

    return (
      <Flex className="h-screen bg-gray-100">
        <Sidebar>
          <Sidebar.Header>
            <HeaderExample />
          </Sidebar.Header>

          <Sidebar.Content>
            <Sidebar.Item active={active === 'home'} asChild>
              <div onClick={() => setActive('home')}>홈</div>
            </Sidebar.Item>

            <Sidebar.Item active={active === 'community'} asChild>
              <div onClick={() => setActive('community')}>커뮤니티</div>
            </Sidebar.Item>

            <Sidebar.Item active={active === 'write'} asChild>
              <div onClick={() => setActive('write')}>글쓰기</div>
            </Sidebar.Item>

            <Sidebar.Item active={active === 'directory'} asChild>
              <div onClick={() => setActive('directory')}>동문수첩</div>
            </Sidebar.Item>

            <Sidebar.Item active={active === 'profile'} asChild>
              <div onClick={() => setActive('profile')}>내 동문수첩</div>
            </Sidebar.Item>
          </Sidebar.Content>
        </Sidebar>

        <Box className="flex-1 p-8">
          <Box className="text-xl font-bold">Active: {active}</Box>
          <Box className="mt-2 text-sm text-gray-500">
            Footer 없는 Sidebar 예시
          </Box>
        </Box>
      </Flex>
    );
  },
};
