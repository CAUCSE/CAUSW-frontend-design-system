import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const ListOutlineThree = ({
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
      viewBox="0 0 12 12"
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
      <rect fill="none" x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor"/>
      <line fill="none" x1="1.15009" y1="4.47156" x2="10.8499" y2="4.47156" stroke="currentColor"/>
      <line fill="none" x1="1.15009" y1="7.53986" x2="10.8499" y2="7.53986" stroke="currentColor"/>
    </svg>
  );
};

ListOutlineThree.displayName = 'ListOutlineThree';
