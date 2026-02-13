import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const Share = ({
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
      <g clipPath="url(#clip0_2130_16256)">
<path d="M11.376 2.06738C11.8032 1.91819 12.2883 2.02086 12.5977 2.3252L19.709 9.3252C20.0971 9.70723 20.0971 10.2928 19.709 10.6748L12.5977 17.6748C12.2883 17.9792 11.8033 18.0819 11.376 17.9326C10.9486 17.7833 10.667 17.4126 10.667 17V14.5156C7.15791 14.6076 5.00372 15.132 3.74609 15.7051C2.32996 16.3505 2.22296 16.953 2.22266 17C2.22266 17.5522 1.7249 17.9999 1.11133 18C0.497667 18 0 17.5523 0 17C5.57e-05 12.5103 1.91983 9.58917 4.42383 7.81445C6.4508 6.37785 8.79757 5.73674 10.667 5.55664V3C10.667 2.58737 10.9486 2.21672 11.376 2.06738Z" />
</g>
<defs>
<clipPath id="clip0_2130_16256">
<rect width="20" height="20" />
</clipPath>
</defs>
    </svg>
  );
};

Share.displayName = 'Share';
