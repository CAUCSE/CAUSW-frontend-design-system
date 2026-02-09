import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const ArrowRight = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.6819 10.7777L7.53617 17L6 15.4447L11.3777 10L6 4.55531L7.53617 3L13.6819 9.22234C13.8856 9.42861 14 9.70834 14 10C14 10.2917 13.8856 10.5714 13.6819 10.7777Z" />
    </svg>
  );
};

ArrowRight.displayName = 'ArrowRight';
