import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const LoadingColored = ({
  size = DEFAULT_SIZE,
  title,
  ...props
}: ColoredIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    aria-hidden={title ? undefined : true}
    aria-label={title}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="white"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="white"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

LoadingColored.displayName = 'LoadingColored';
