import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Field } from '../Field';
import { DatePicker } from './DatePicker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    className: 'w-[22rem]',
    placeholder: '날짜를 선택하세요',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: new Date(2026, 1, 7),
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>(new Date(2026, 1, 7));
    return (
      <DatePicker
        {...args}
        value={value}
        onValueChange={(date) => {
          setValue(date);
          console.log(date);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: new Date(2026, 1, 7),
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const WithFieldError: Story = {
  render: (args) => (
    <Field error>
      <Field.Label>날짜</Field.Label>
      <DatePicker {...args} />
      <Field.ErrorDescription>
        올바른 날짜를 선택해주세요.
      </Field.ErrorDescription>
    </Field>
  ),
};
