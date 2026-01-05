import type { MonoIconProps } from '../types';

export const Menu = ({ title, ...props }: MonoIconProps) => (
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
      d="M4.5835 10C4.5835 9.30965 4.02385 8.75 3.3335 8.75C2.64314 8.75 2.0835 9.30965 2.0835 10C2.0835 10.6904 2.64314 11.25 3.3335 11.25C4.02385 11.25 4.5835 10.6904 4.5835 10ZM17.9168 10C17.9168 9.30965 17.3572 8.75 16.6668 8.75C15.9765 8.75 15.4168 9.30965 15.4168 10C15.4168 10.6904 15.9765 11.25 16.6668 11.25C17.3572 11.25 17.9168 10.6904 17.9168 10ZM11.2502 10C11.2502 9.30965 10.6905 8.75 10.0002 8.75C9.30982 8.75 8.75018 9.30965 8.75018 10C8.75018 10.6904 9.30982 11.25 10.0002 11.25C10.6905 11.25 11.2502 10.6904 11.2502 10Z"
    />
  </svg>
);

Menu.displayName = 'Menu';
