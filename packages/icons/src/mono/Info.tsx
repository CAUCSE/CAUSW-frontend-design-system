import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const Info = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10ZM9 6C9 6.26522 9.10536 6.51957 9.29289 6.70711C9.48043 6.89464 9.73478 7 10 7H10.008C10.2732 7 10.5276 6.89464 10.7151 6.70711C10.9026 6.51957 11.008 6.26522 11.008 6C11.008 5.73478 10.9026 5.48043 10.7151 5.29289C10.5276 5.10536 10.2732 5 10.008 5H10C9.73478 5 9.48043 5.10536 9.29289 5.29289C9.10536 5.48043 9 5.73478 9 6ZM10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14V9C11 8.73478 10.8946 8.48043 10.7071 8.29289C10.5196 8.10536 10.2652 8 10 8C9.73478 8 9.48043 8.10536 9.29289 8.29289C9.10536 8.48043 9 8.73478 9 9V14C9 14.2652 9.10536 14.5196 9.29289 14.7071C9.48043 14.8946 9.73478 15 10 15Z" />
    </svg>
  );
};

Info.displayName = 'Info';
