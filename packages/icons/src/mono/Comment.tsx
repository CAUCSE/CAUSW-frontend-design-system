import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS } from '../types';

export const Comment = ({
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
    <path d="M20 10C20 4.47714 15.5229 0 10 0C4.47714 0 0 4.47714 0 10C0 15.5229 4.47714 20 10 20C11.6914 20 13.2871 19.5793 14.6857 18.8364L18.6343 19.9593C18.8178 20.0113 19.0119 20.0134 19.1965 19.9653C19.381 19.9173 19.5495 19.8208 19.6843 19.6859C19.8191 19.551 19.9155 19.3825 19.9635 19.1979C20.0114 19.0133 20.0093 18.8192 19.9571 18.6357L18.8343 14.6879C19.6017 13.2446 20.0021 11.6346 20 10Z" />
  </svg>
);

Comment.displayName = 'Comment';
