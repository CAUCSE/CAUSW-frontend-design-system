import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const CloseFilled = ({
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
      <path d="M10 1C4.98571 1 1 4.98571 1 10C1 15.0143 4.98571 19 10 19C15.0143 19 19 15.0143 19 10C19 4.98571 15.0143 1 10 1ZM13.4714 14.5L10 11.0286L6.52857 14.5L5.5 13.4714L8.97143 10L5.5 6.52857L6.52857 5.5L10 8.97143L13.4714 5.5L14.5 6.52857L11.0286 10L14.5 13.4714L13.4714 14.5Z" />
    </svg>
  );
};

CloseFilled.displayName = 'CloseFilled';
