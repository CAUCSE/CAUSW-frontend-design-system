import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const Checkbox = ({
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
      viewBox="0 0 18 18"
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
      <rect width="18" height="18" rx="4" />
<path d="M5 9.08333L7.94737 12L13 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

Checkbox.displayName = 'Checkbox';
