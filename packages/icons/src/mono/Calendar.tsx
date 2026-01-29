import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const Calendar = ({
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
      <path d="M18 10V16.2222C18 16.6937 17.8127 17.1459 17.4793 17.4793C17.1459 17.8127 16.6937 18 16.2222 18H3.77778C3.30628 18 2.8541 17.8127 2.5207 17.4793C2.1873 17.1459 2 16.6937 2 16.2222V10H18ZM13.5556 2C13.7913 2 14.0174 2.09365 14.1841 2.26035C14.3508 2.42705 14.4444 2.65314 14.4444 2.88889V3.77778H16.2222C16.6937 3.77778 17.1459 3.96508 17.4793 4.29848C17.8127 4.63187 18 5.08406 18 5.55556V8.22222H2V5.55556C2 5.08406 2.1873 4.63187 2.5207 4.29848C2.8541 3.96508 3.30628 3.77778 3.77778 3.77778H5.55556V2.88889C5.55556 2.65314 5.64921 2.42705 5.81591 2.26035C5.9826 2.09365 6.2087 2 6.44444 2C6.68019 2 6.90628 2.09365 7.07298 2.26035C7.23968 2.42705 7.33333 2.65314 7.33333 2.88889V3.77778H12.6667V2.88889C12.6667 2.65314 12.7603 2.42705 12.927 2.26035C13.0937 2.09365 13.3198 2 13.5556 2Z" />
    </svg>
  );
};

Calendar.displayName = 'Calendar';
