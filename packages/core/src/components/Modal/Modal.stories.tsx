import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal은 사용자의 작업에 대한 확인이 필요하거나 중요한 정보를 전달할 때 사용되는 구체화된 컴포넌트입니다. \n\n 기본적인 `Dialog` 컴포넌트가 추상적인 모달 프레임을 제공한다면, `Modal`은 타이틀, 설명, 그리고 액션 버튼(확인/취소/삭제 등)이 미리 정의된 레이아웃을 제공하여 더욱 빠르게 경고창이나 확인창을 구현할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Open Modal</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>회원 탈퇴</Modal.Title>
        <Modal.Footer>
          <Modal.Close asChild>
            <Modal.ActionButton color="dark">확인</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
};

export const TwoButtons: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button>로그아웃</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>로그아웃 하시겠습니까?</Modal.Title>
        <Modal.Footer>
          <Modal.Close asChild>
            <Modal.ActionButton color="light">취소</Modal.ActionButton>
          </Modal.Close>
          <Modal.Close asChild>
            <Modal.ActionButton color="dark">확인</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button color="red">계정 삭제</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>계정을 삭제하시겠습니까?</Modal.Title>
        <Modal.Description>이 작업은 되돌릴 수 없습니다.</Modal.Description>
        <Modal.Footer>
          <Modal.Close asChild>
            <Modal.ActionButton color="light">취소</Modal.ActionButton>
          </Modal.Close>
          <Modal.Close asChild>
            <Modal.ActionButton color="red">삭제</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
};

export const TextAlign: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button color="red">TextAlign Left</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title textAlign="left">타이틀 문구 왼쪽에</Modal.Title>
        <Modal.Description textAlign="left">
          설명 문구 왼쪽에.
        </Modal.Description>
        <Modal.Footer>
          <Modal.Close asChild>
            <Modal.ActionButton color="light">취소</Modal.ActionButton>
          </Modal.Close>
          <Modal.Close asChild>
            <Modal.ActionButton color="red">삭제</Modal.ActionButton>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
};
