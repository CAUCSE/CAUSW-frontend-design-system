import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const Message = ({
  size = DEFAULT_SIZE,
  active = false,
  color,
  title,
  ...props
}: MonoIconProps) => {
  const resolvedColor = color
    ? ICON_TOKEN_COLORS[color]
    : active
      ? MONO_COLORS.active
      : MONO_COLORS.inactive;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={resolvedColor}
      color={resolvedColor}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title && <title>{title}</title>}
      <path fillRule="evenodd" clipRule="evenodd" d="M1.013 7.151C1 7.691 1 8.302 1 9V11C1 13.828 1 15.243 1.879 16.121C2.757 17 4.172 17 7 17H13C15.828 17 17.243 17 18.121 16.121C19 15.243 19 13.828 19 11V9C19 8.302 19 7.69 18.987 7.151L10.971 11.604C10.674 11.769 10.3398 11.8555 10 11.8555C9.66022 11.8555 9.32605 11.769 9.029 11.604L1.013 7.151ZM1.243 5.03C1.32633 5.05 1.40733 5.082 1.486 5.126L10 9.856L18.514 5.126C18.5933 5.08267 18.6743 5.05067 18.757 5.03C18.627 4.556 18.427 4.185 18.121 3.879C17.243 3 15.828 3 13 3H7C4.172 3 2.757 3 1.879 3.879C1.572 4.185 1.373 4.556 1.243 5.029" />
    </svg>
  );
};

Message.displayName = 'Message';
