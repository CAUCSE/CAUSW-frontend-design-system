import React, { useId, useRef, useState } from 'react';
import { format } from 'date-fns';
import { useFieldContext } from '../../hooks';
import { mergeStyles } from '../../utils';
import { Calendar, type CalendarProps } from '../Calendar';
import { Dropdown } from '../Dropdown';
import { datePicker, type DatePickerVariants } from './DatePicker.styles';
import { CalendarIcon } from '@causw/icons';
import { Text } from '../Text';

type DatePickerCalendarProps = Omit<
  CalendarProps,
  'defaultMonth' | 'selectedStartDate' | 'selectedEndDate' | 'onDateClick'
>;

const isValidDate = (value: Date | undefined): value is Date =>
  value instanceof Date && !Number.isNaN(value.getTime());

export interface DatePickerProps extends Omit<
  React.ComponentProps<'button'>,
  'value' | 'defaultValue' | 'onChange'
> {
  variant?: DatePickerVariants['variant'];
  error?: boolean;
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date) => void;
  placeholder?: string;
  dateFormat?: string;
  contentClassName?: string;
  calendarProps?: DatePickerCalendarProps;
}

export const DatePicker = ({
  id: idProp,
  className,
  error: errorProp,
  value,
  defaultValue,
  onValueChange,
  placeholder = '날짜를 선택하세요',
  dateFormat = 'yyyy.MM.dd',
  variant = 'white',
  disabled: disabledProp,
  type,
  contentClassName,
  calendarProps,
  ...props
}: DatePickerProps) => {
  const field = useFieldContext();
  const generatedId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [calendarKey, setCalendarKey] = useState(0);
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const id = idProp ?? field?.id ?? generatedId;
  const disabled = disabledProp ?? field?.disabled ?? false;
  const error = errorProp ?? field?.error ?? false;

  const selectedDate = isControlled ? value : uncontrolledValue;
  const hasValue = isValidDate(selectedDate);
  const { trigger, icon, content } = datePicker({
    variant,
    disabled,
    error,
  });

  const displayValue = hasValue
    ? format(selectedDate, dateFormat)
    : placeholder;

  const handleOpenChange = (nextOpen: boolean) => {
    if (disabled) {
      return;
    }
    setOpen(nextOpen);
    if (nextOpen) {
      setCalendarKey((prev) => prev + 1);
    }
  };

  const handleDateClick = (date: Date) => {
    if (!isControlled) {
      setUncontrolledValue(date);
    }
    onValueChange?.(date);
    setOpen(false);
    triggerRef.current?.blur();
  };

  return (
    <Dropdown modal={false} open={open} onOpenChange={handleOpenChange}>
      <Dropdown.Trigger asChild>
        <button
          ref={triggerRef}
          id={id}
          type={type ?? 'button'}
          disabled={disabled}
          className={trigger({ className })}
          {...props}
        >
          <Text
            typography="body-16-regular"
            textColor={hasValue ? 'gray-700' : 'gray-400'}
          >
            {displayValue}
          </Text>
          <CalendarIcon
            size={20}
            color="gray-400"
            className={icon()}
            aria-hidden="true"
          />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content
        align="start"
        sideOffset={8}
        collisionPadding={16}
        avoidCollisions
        sticky="always"
        className={content({ className: contentClassName })}
      >
        <Calendar
          key={calendarKey}
          defaultMonth={hasValue ? selectedDate : new Date()}
          selectedStartDate={hasValue ? selectedDate : undefined}
          showToday={false}
          size="sm"
          enableHover
          onDateClick={handleDateClick}
          {...calendarProps}
          className={mergeStyles('border-none', calendarProps?.className)}
        />
      </Dropdown.Content>
    </Dropdown>
  );
};

DatePicker.displayName = 'DatePicker';
