import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const ChevronLeft = ({
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
      viewBox="0 0 6 10"
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
      <path fillRule="evenodd" clipRule="evenodd" d="M0.238562 5.55547L4.84788 10L6 8.88906L1.96675 5L6 1.11094L4.84788 0L0.238562 4.44453C0.0858107 4.59187 0 4.79167 0 5C0 5.20833 0.0858107 5.40813 0.238562 5.55547Z" />
    </svg>
  );
};

ChevronLeft.displayName = 'ChevronLeft';
