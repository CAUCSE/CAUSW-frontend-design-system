import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS } from '../types';

export const RadioIndicator = ({
  size = DEFAULT_SIZE,
  active = false,
  title,
  ...props
}: MonoIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
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
    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="5" />
  </svg>
);

RadioIndicator.displayName = 'RadioIndicator';
