import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

// TODO: build 스크립트 실행 시 fill 옵션 없어야 하는 svg에도 fill 옵션이 추가되는 이슈 있음. 현재는 수동으로 고치는 것으로 핸들링
export const Check = ({
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
      viewBox="0 0 15 11"
      width={size}
      height={size}
      fill="none"
      color={resolvedColor}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M1.5 5.5L5.5 9.5L13.5 1.5" stroke={resolvedColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

Check.displayName = 'Check';
