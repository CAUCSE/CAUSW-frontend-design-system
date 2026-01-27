import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const Contacts = ({
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
      <path d="M1.5 20C1.5 20 0 20 0 18.5C0 17 1.5 12.5 7.5 12.5C13.5 12.5 15 17 15 18.5C15 20 13.5 20 13.5 20H1.5ZM7.5 10C8.69347 10 9.83807 9.52589 10.682 8.68198C11.5259 7.83807 12 6.69347 12 5.5C12 4.30653 11.5259 3.16193 10.682 2.31802C9.83807 1.47411 8.69347 1 7.5 1C6.30653 1 5.16193 1.47411 4.31802 2.31802C3.4741 3.16193 3 4.30653 3 5.5C3 6.69347 3.4741 7.83807 4.31802 8.68198C5.16193 9.52589 6.30653 10 7.5 10Z" />
<path d="M12.2414 12.1344C12.0819 12.1344 12.071 12.3773 12.2256 12.4162C16.392 13.4647 17.5172 17.2227 17.5172 18.5C17.5172 20 15.9655 20 15.9655 20H18.4483C18.4483 20 20 20 20 18.5C20 17 18.4483 12.1344 12.2414 12.1344ZM12.2414 1C11.9001 1 11.9139 1.58952 12.2201 1.73998C12.5158 1.8852 12.7918 2.06881 13.05 2.31836C13.923 3.16227 14.4138 4.30653 14.4138 5.5C14.4138 6.69347 13.923 7.83773 13.05 8.68164C12.7796 8.94302 12.4793 9.16852 12.1569 9.35543C11.8593 9.52797 11.8974 10 12.2414 10C13.476 10 14.6597 9.52555 15.5327 8.68164C16.4057 7.83773 16.8966 6.69347 16.8966 5.5C16.8966 4.30653 16.4057 3.16227 15.5327 2.31836C14.6597 1.47445 13.476 1 12.2414 1Z" />
    </svg>
  );
};

Contacts.displayName = 'Contacts';
