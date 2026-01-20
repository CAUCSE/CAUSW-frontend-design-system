import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RatioBar } from './RatioBar';
import { RatioBarEditor, type RatioBarEditorOption } from './RatioBarEditor';

const meta: Meta<typeof RatioBar> = {
  title: 'Components/RatioBar',
  component: RatioBar,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'gray', value: '#f3f4f6' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RatioBar>;

export const Default: Story = {
  render: () => (
    <RatioBar.Root>
      <RatioBar.Item value="option1" label="짬뽕" ratio={80} />
      <RatioBar.Item value="option2" label="짜장면" ratio={20} />
    </RatioBar.Root>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');

    return (
      <div className="flex flex-col gap-[1rem]">
        <RatioBar.Root value={selected} onValueChange={setSelected}>
          <RatioBar.Item value="option1" label="짬뽕" ratio={80} />
          <RatioBar.Item value="option2" label="짜장면" ratio={20} />
        </RatioBar.Root>
        <p className="text-sm text-gray-500">선택된 값: {selected}</p>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
      <div className="flex flex-col gap-[1rem]">
        <RatioBar.Root
          mode="multiple"
          value={selected}
          onValueChange={setSelected}
        >
          <RatioBar.Item value="option1" label="ICT" ratio={45} />
          <RatioBar.Item value="option2" label="동네" ratio={30} />
          <RatioBar.Item value="option3" label="크자회" ratio={25} />
        </RatioBar.Root>
        <p className="text-sm text-gray-500">
          선택된 값: {selected.length > 0 ? selected.join(', ') : '없음'}
        </p>
      </div>
    );
  },
};

export const VariousRatios: Story = {
  render: () => (
    <div className="flex flex-col gap-[1rem]">
      <RatioBar.Root defaultValue="high">
        <RatioBar.Item value="high" label="높은 비율" ratio={90} />
        <RatioBar.Item value="low" label="낮은 비율" ratio={10} />
      </RatioBar.Root>

      <RatioBar.Root defaultValue="equal1">
        <RatioBar.Item value="equal1" label="동일 비율 A" ratio={50} />
        <RatioBar.Item value="equal2" label="동일 비율 B" ratio={50} />
      </RatioBar.Root>

      <RatioBar.Root defaultValue="zero">
        <RatioBar.Item value="zero" label="0%" ratio={0} />
        <RatioBar.Item value="full" label="100%" ratio={100} />
      </RatioBar.Root>
    </div>
  ),
};

export const WithoutRatio: Story = {
  render: () => (
    <RatioBar.Root defaultValue="option1">
      <RatioBar.Item value="option1" label="옵션 A" />
      <RatioBar.Item value="option2" label="옵션 B" />
    </RatioBar.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-[1rem]">
      <p className="text-sm text-gray-500">전체 비활성화:</p>
      <RatioBar.Root disabled defaultValue="option1">
        <RatioBar.Item value="option1" label="TypeScript" ratio={80} />
        <RatioBar.Item value="option2" label="JavaScript" ratio={20} />
      </RatioBar.Root>

      <p className="text-sm text-gray-500">개별 항목 비활성화:</p>
      <RatioBar.Root defaultValue="option1">
        <RatioBar.Item value="option1" label="선택 가능" ratio={60} />
        <RatioBar.Item value="option2" label="비활성화" ratio={40} disabled />
      </RatioBar.Root>
    </div>
  ),
};

export const ThreeOptions: Story = {
  render: () => (
    <RatioBar.Root defaultValue="option1">
      <RatioBar.Item value="option1" label="찬성" ratio={55} />
      <RatioBar.Item value="option2" label="반대" ratio={30} />
      <RatioBar.Item value="option3" label="기권" ratio={15} />
    </RatioBar.Root>
  ),
};

export const VotingExample: Story = {
  render: () => {
    const [vote, setVote] = useState<string>('');

    const handleVote = (value: string) => {
      setVote(value);
    };

    return (
      <div className="flex w-[25rem] flex-col gap-[1rem]">
        <h3 className="font-bold">오늘 점심 뭐 먹을까요?</h3>
        <RatioBar.Root value={vote} onValueChange={handleVote}>
          <RatioBar.Item value="jjamppong" label="짬뽕" ratio={65} />
          <RatioBar.Item value="jjajang" label="짜장면" ratio={35} />
        </RatioBar.Root>
        {vote && (
          <p className="text-sm text-gray-600">
            {vote === 'jjamppong' ? '짬뽕' : '짜장면'}에 투표했습니다!
          </p>
        )}
      </div>
    );
  },
};

export const FlexibleWidth: Story = {
  render: () => (
    <div className="flex flex-col gap-[1rem]">
      <div className="w-[20rem]">
        <p className="mb-[0.5rem] text-sm text-gray-500">최소 너비 (320px)</p>
        <RatioBar.Root defaultValue="option1">
          <RatioBar.Item value="option1" label="A" ratio={70} />
          <RatioBar.Item value="option2" label="B" ratio={30} />
        </RatioBar.Root>
      </div>

      <div className="w-[30rem]">
        <p className="mb-[0.5rem] text-sm text-gray-500">넓은 너비 (480px)</p>
        <RatioBar.Root defaultValue="option1">
          <RatioBar.Item value="option1" label="긴 레이블 텍스트" ratio={70} />
          <RatioBar.Item value="option2" label="짧은 텍스트" ratio={30} />
        </RatioBar.Root>
      </div>
    </div>
  ),
};

// ============ Edit Mode Stories ============

export const EditModeDefault: Story = {
  name: 'Edit Mode - Default',
  render: () => <RatioBarEditor onDelete={() => alert('투표 삭제')} />,
};

export const EditModeControlled: Story = {
  name: 'Edit Mode - Controlled',
  render: () => {
    const [options, setOptions] = useState<RatioBarEditorOption[]>([
      { id: '1', value: '짬뽕' },
      { id: '2', value: '' },
    ]);
    const [allowMultiple, setAllowMultiple] = useState(false);

    return (
      <div className="flex flex-col gap-[1rem]">
        <RatioBarEditor
          options={options}
          onOptionsChange={setOptions}
          allowMultiple={allowMultiple}
          onAllowMultipleChange={setAllowMultiple}
          onDelete={() => alert('투표 삭제')}
        />
        <div className="text-sm text-gray-500">
          <p>옵션: {JSON.stringify(options.map((o) => o.value))}</p>
          <p>복수 선택: {allowMultiple ? '허용' : '비허용'}</p>
        </div>
      </div>
    );
  },
};

export const EditModeWithThreeOptions: Story = {
  name: 'Edit Mode - Three Options',
  render: () => {
    const [options, setOptions] = useState<RatioBarEditorOption[]>([
      { id: '1', value: '짬뽕' },
      { id: '2', value: '' },
      { id: '3', value: '' },
    ]);

    return (
      <RatioBarEditor
        options={options}
        onOptionsChange={setOptions}
        onDelete={() => alert('투표 삭제')}
      />
    );
  },
};

export const EditModeFilled: Story = {
  name: 'Edit Mode - Filled Options',
  render: () => {
    const [options, setOptions] = useState<RatioBarEditorOption[]>([
      { id: '1', value: '짬뽕' },
      { id: '2', value: '짜장면' },
      { id: '3', value: '탕수육' },
    ]);
    const [allowMultiple, setAllowMultiple] = useState(true);

    return (
      <RatioBarEditor
        options={options}
        onOptionsChange={setOptions}
        allowMultiple={allowMultiple}
        onAllowMultipleChange={setAllowMultiple}
        onDelete={() => alert('투표 삭제')}
      />
    );
  },
};

export const EditModeDisabled: Story = {
  name: 'Edit Mode - Disabled',
  render: () => <RatioBarEditor disabled onDelete={() => alert('투표 삭제')} />,
};
