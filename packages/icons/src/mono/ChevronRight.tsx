import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS } from '../types';

export const ChevronRight = ({
  size = DEFAULT_SIZE,
  active = false,
  title,
  ...props
}: MonoIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 6 10"
    width={size}
    height={size}
    fill={active ? MONO_COLORS.active : MONO_COLORS.inactive}
    color={active ? MONO_COLORS.active : MONO_COLORS.inactive}
    aria-hidden={title ? undefined : true}
    aria-label={title}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.76144 5.55547L1.15212 10L0 8.88906L4.03325 5L0 1.11094L1.15212 0L5.76144 4.44453C5.91419 4.59187 6 4.79167 6 5C6 5.20833 5.91419 5.40813 5.76144 5.55547Z"
    />
  </svg>
);

ChevronRight.displayName = 'ChevronRight';
