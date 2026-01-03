import React from 'react';
import { mergeStyles } from '../../utils';
import { useFieldContext } from '../../hooks';

export interface TextAreaProps extends React.ComponentProps<'textarea'> {
  /** Whether to allow vertical resizing @default true */
  resize?: boolean;
  /** Error state (overrides Field context) */
  error?: boolean;
}

export const TextArea = ({
  id: idProp,
  disabled: disabledProp,
  error: errorProp,
  className,
  resize = true,
  ...props
}: TextAreaProps) => {
  // Optional Field context - works with or without Field
  const field = useFieldContext();

  const id = idProp ?? field?.id;
  const disabled = disabledProp ?? field?.disabled ?? false;
  const error = errorProp ?? field?.error ?? false;

  const textareaStyles = mergeStyles(
    'w-full bg-transparent outline-none',
    'typo-body-sm',
    'text-gray-700 placeholder:text-gray-400',
    'caret-gray-600',
    resize ? 'resize-y' : 'resize-none',
  );

  const wrapperStyles = mergeStyles(
    'rounded-md p-4',
    'bg-white',
    'focus-within:ring-2 focus-within:ring-gray-600',
    disabled && 'cursor-not-allowed bg-gray-100 opacity-50',
    error && 'ring-2 ring-red-400 focus-within:ring-red-400',
    className,
  );

  return (
    <div className={wrapperStyles}>
      <textarea
        id={id}
        disabled={disabled}
        className={textareaStyles}
        rows={4}
        {...props}
      />
    </div>
  );
};

TextArea.displayName = 'TextArea';
