import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS, ICON_TOKEN_COLORS } from '../types';

export const Pen = ({
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
      <path d="M13.7851 0.828125L12.0312 2.58203L17.4179 7.96875L19.1718 6.21484C19.7031 5.6875 20 4.96875 20 4.21875C20 3.46875 19.7031 2.75 19.1718 2.22266L17.7773 0.828125C17.25 0.296875 16.5312 0 15.7812 0C15.0312 0 14.3124 0.296875 13.7851 0.828125ZM10.707 3.90625L2.30073 12.3086C1.88276 12.7266 1.57808 13.25 1.41792 13.8203L0.0351079 18.8125C-0.0547359 19.1367 0.0351079 19.4883 0.277295 19.7266C0.519483 19.9648 0.867139 20.0586 1.19136 19.9688L6.18354 18.582C6.75386 18.4219 7.27339 18.1211 7.69526 17.6992L16.0937 9.29297L10.707 3.90625Z" />
    </svg>
  );
};

Pen.displayName = 'Pen';
