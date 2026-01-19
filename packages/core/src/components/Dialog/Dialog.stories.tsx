import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Dialog } from './Dialog';
import { type DialogSizeOptions } from './Dialog.styles';
import { CTAButton } from '../CTAButton';
import { VStack } from '../VStack';
import { Text } from '../Text';
import { Toggle } from '../Toggle';
import { HStack } from '../HStack';
import { Button } from '../Button';
import { TextArea } from '../TextArea';
import { Field } from '../Field';
import { Flex } from '../Flex';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '`Dialog`는 `modal` 형태의 웹 컴포넌트입니다. 헤더와 푸터 같은 영역이 정해져 있지 않습니다.\n\n`Dialog.Content` 내부에 자유롭게 `VStack`, `HStack`, `Text`, `Button` 등을 조합하여 원하는 레이아웃을 구성할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
      description: 'Dialog width (px)',
      table: {
        type: { summary: 'number' },
        category: 'Style',
      },
    },
    minWidth: {
      control: { type: 'number' },
      description: 'Minimum width (px)',
      table: {
        type: { summary: 'number' },
        category: 'Style',
      },
    },
    maxWidth: {
      control: { type: 'number' },
      description: 'Maximum width (px)',
      table: {
        type: { summary: 'number' },
        category: 'Style',
      },
    },

    minHeight: {
      control: { type: 'number' },
      description: 'Minimum height (px)',
      table: {
        type: { summary: 'number' },
        category: 'Style',
      },
    },
    maxHeight: {
      control: { type: 'number' },
      description: 'Maximum height (px)',
      table: {
        type: { summary: 'number' },
        category: 'Style',
      },
    },
    fullscreen: {
      control: { type: 'boolean' },
      description: 'Whether the dialog should be fullscreen',
      table: {
        type: { summary: 'boolean' },
        category: 'Style',
      },
    },
  },
} satisfies Meta<
  React.ComponentProps<typeof Dialog> &
    DialogSizeOptions & { fullscreen?: boolean }
>;

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Dialog> & DialogSizeOptions>;

export const Playground: Story = {
  args: {
    width: undefined,
    minWidth: undefined,
    maxWidth: undefined,
    minHeight: undefined,
    maxHeight: undefined,
  },
  render: (args) => (
    <Dialog>
      <Dialog.Trigger>
        <CTAButton color="blue">Open Dialog (Playground)</CTAButton>
      </Dialog.Trigger>
      <Dialog.Content {...args}>
        <div className="flex h-32 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-4 text-center">
          <Text typography="body-16-regular" textColor="gray-400">
            Arbitrary content area
          </Text>
          <Text typography="body-16-regular" textColor="gray-400">
            (Use VStack, HStack, etc.)
          </Text>
        </div>
      </Dialog.Content>
    </Dialog>
  ),
};

export const TogglePopup: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>
        <CTAButton color="blue">Open Toggle Dialog</CTAButton>
      </Dialog.Trigger>
      <Dialog.Content maxWidth={420}>
        <VStack gap="lg">
          <Text typography="subtitle-20-bold">Privacy Settings</Text>

          <VStack gap="md">
            <Toggle className="w-full">
              <HStack justify="between" align="center" className="w-full">
                <Toggle.Label>Phone Number</Toggle.Label>
                <Toggle.Switch />
              </HStack>
            </Toggle>
            <Toggle className="w-full">
              <HStack justify="between" align="center" className="w-full">
                <Toggle.Label>Message Visibility</Toggle.Label>
                <Toggle.Switch />
              </HStack>
            </Toggle>
          </VStack>

          <HStack gap="sm">
            <Dialog.Close asChild>
              <CTAButton color="light" className="w-1/2">
                Close
              </CTAButton>
            </Dialog.Close>
            <CTAButton color="dark" className="w-1/2">
              Save
            </CTAButton>
          </HStack>
        </VStack>
      </Dialog.Content>
    </Dialog>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <CTAButton color="red">Open Controlled Dialog</CTAButton>
        </Dialog.Trigger>
        <Dialog.Content width={400}>
          <VStack gap="lg">
            <VStack gap="sm">
              <Text typography="title-30-bold">Controlled Dialog</Text>
              <Text typography="body-18-medium" textColor="gray-500">
                This dialog is controlled by external React state.
              </Text>
            </VStack>

            <HStack justify="end" gap="sm">
              <CTAButton color="light" onClick={() => setOpen(false)}>
                Close using State
              </CTAButton>
            </HStack>
          </VStack>
        </Dialog.Content>
      </Dialog>
    );
  },
};

export const PreventClose: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(true);
    const isClosingRef = React.useRef(false);

    // Reset closing ref when dialog opens
    React.useEffect(() => {
      if (open) {
        isClosingRef.current = false;
      }
    }, [open]);

    const handleClose = () => {
      isClosingRef.current = true;
      setOpen(false);
    };

    return (
      <Dialog
        open={open}
        onOpenChange={(newOpen) => {
          if (!newOpen) {
            isClosingRef.current = true;
          }
          setOpen(newOpen);
        }}
      >
        <Dialog.Trigger>
          <CTAButton color="red">Open Prevent Close Dialog</CTAButton>
        </Dialog.Trigger>
        <Dialog.Content
          width={400}
          onPointerDownOutside={(e) => {
            // Skip if already closing
            if (isClosingRef.current) return;

            if (hasUnsavedChanges) {
              e.preventDefault();
              // Use setTimeout to avoid conflict with immediate events
              setTimeout(() => {
                if (
                  window.confirm(
                    '저장하지 않은 변경사항이 있습니다. 정말 닫으시겠습니까?',
                  )
                ) {
                  handleClose();
                }
              }, 0);
            }
          }}
        >
          <VStack gap="lg">
            <VStack gap="sm">
              <Text typography="title-30-bold">Prevent Closing</Text>
              <Text typography="body-18-medium" textColor="gray-500">
                Try clicking outside the dialog.
              </Text>
            </VStack>

            <div className="flex items-center gap-2 rounded border border-yellow-200 bg-yellow-50 p-2">
              <input
                type="checkbox"
                id="unsaved-changes-toggle"
                checked={hasUnsavedChanges}
                onChange={(e) => setHasUnsavedChanges(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="unsaved-changes-toggle"
                className="cursor-pointer text-sm font-medium text-yellow-800"
              >
                Unsaved changes active
              </label>
            </div>
            <Text typography="body-16-regular" textColor="gray-400">
              If checked, clicking outside will trigger a confirmation alert
              instead of closing immediately.
            </Text>

            <HStack justify="end" gap="sm">
              <CTAButton color="light" onClick={handleClose}>
                Close
              </CTAButton>
            </HStack>
          </VStack>
        </Dialog.Content>
      </Dialog>
    );
  },
};

export const FeedbackPopup: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [rating, setRating] = React.useState<number | null>(null);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <CTAButton color="blue">Open Feedback Popup</CTAButton>
        </Dialog.Trigger>
        <Dialog.Content
          width={700}
          className="max-w-none gap-0 rounded-[16px] bg-gray-100 p-[32px] sm:rounded-[16px]"
          aria-describedby={undefined}
        >
          <VStack className="w-full">
            {/* Header */}
            <HStack
              justify="between"
              align="center"
              className="mb-[39px] w-full"
            >
              <Text typography="title-30-bold">건의/오류 제보하기</Text>
              <Dialog.Close asChild>
                <button className="text-gray-500 transition-colors hover:text-gray-700">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </Dialog.Close>
            </HStack>

            <Text typography="body-18-medium">
              크자회 서비스에 관한 의견을 자유롭게 남겨주세요
            </Text>

            {/* Satisfaction Survey */}
            <VStack className="mb-[24px] w-full rounded-[12px] bg-white p-[24px]">
              <Text typography="body-18-medium">
                크자회 앱 사용에 대한 전반적인 만족도를 알려주세요.
              </Text>

              <HStack justify="center" gap="md">
                {[1, 2, 3, 4, 5].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setRating(idx)}
                    className={`flex h-[60px] w-[60px] items-center justify-center rounded-[12px] border text-[16px] transition-all ${
                      rating === idx
                        ? 'border-blue-500 bg-blue-50 font-bold text-blue-600'
                        : 'border-transparent bg-[#f5f6f8] text-[#6a7282] hover:bg-gray-200'
                    }`}
                  >
                    {idx}
                  </button>
                ))}
              </HStack>
              <HStack justify="between">
                <Text typography="body-16-regular" textColor="gray-400">
                  매우 아쉬움
                </Text>
                <Text typography="body-16-regular" textColor="gray-400">
                  매우 만족
                </Text>
              </HStack>
            </VStack>

            {/* Text Feedback */}
            <Field>
              <Field.Label>
                크자회에 대한 건의나 오류를 자유롭게 남겨주세요. (선택)
              </Field.Label>
              <TextArea>
                <TextArea.Input placeholder="답변을 적어주세요." />
                <TextArea.Footer>
                  <Button>파일 첨부</Button>
                </TextArea.Footer>
              </TextArea>
            </Field>
            {/* Footer CTA */}
            <Flex justify="center">
              <CTAButton color="blue">제출하기</CTAButton>
            </Flex>
          </VStack>
        </Dialog.Content>
      </Dialog>
    );
  },
};

export const Fullscreen: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>
        <CTAButton color="blue">Open Fullscreen Dialog</CTAButton>
      </Dialog.Trigger>
      <Dialog.Content fullscreen>
        <VStack gap="lg" className="h-full">
          <HStack justify="between" align="center">
            <Text typography="title-48-bold">Fullscreen Dialog</Text>
            <Dialog.Close asChild>
              <CTAButton color="light">Close</CTAButton>
            </Dialog.Close>
          </HStack>

          <div className="flex flex-1 items-center justify-center rounded-md bg-gray-100 text-gray-400">
            Full Screen Content
          </div>
        </VStack>
      </Dialog.Content>
    </Dialog>
  ),
};

export const ResponsiveFullscreen: Story = {
  render: () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768); // md breakpoint
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
      <Dialog>
        <Dialog.Trigger>
          <CTAButton color="blue">Open Responsive Fullscreen</CTAButton>
        </Dialog.Trigger>
        <Dialog.Content
          fullscreen={isMobile}
          width={isMobile ? undefined : 700}
        >
          <VStack gap="lg" className="h-full">
            <HStack justify="between" align="center">
              <Text typography="title-48-bold">Responsive Dialog</Text>
              <Dialog.Close asChild>
                <CTAButton color="light">Close</CTAButton>
              </Dialog.Close>
            </HStack>

            <div className="flex flex-1 items-center justify-center rounded-md bg-gray-100 p-4 text-gray-400">
              <VStack align="center" gap="sm">
                <Text typography="subtitle-20-bold">Resize the window!</Text>
                <Text typography="body-16-regular" textColor="gray-500">
                  Current Mode:{' '}
                  {isMobile ? 'Fullscreen (Mobile)' : 'Modal (Desktop)'}
                </Text>
              </VStack>
            </div>

            <HStack justify="end" className="md:hidden">
              <Dialog.Close asChild>
                <CTAButton color="blue" className="w-full">
                  Done
                </CTAButton>
              </Dialog.Close>
            </HStack>
          </VStack>
        </Dialog.Content>
      </Dialog>
    );
  },
};
