import type { MonoIconProps } from '../types';

export const ArrowDown = ({ title, ...props }: MonoIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden={title ? undefined : true}
    aria-label={title}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.22234 13.6819L3 7.53617L4.55531 6L10 11.3777L15.4447 6L17 7.53617L10.7777 13.6819C10.5714 13.8856 10.2917 14 10 14C9.70834 14 9.42861 13.8856 9.22234 13.6819Z"
    />
  </svg>
);

ArrowDown.displayName = 'ArrowDown';
