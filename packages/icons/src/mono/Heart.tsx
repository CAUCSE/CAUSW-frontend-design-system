import type { MonoIconProps } from '../types';

export const Heart = ({ title, ...props }: MonoIconProps) => (
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
    <path d="M8.98227 18.699C9.60056 19.1003 10.3989 19.1003 11.0172 18.699C12.9801 17.4249 17.2578 14.3817 19.0996 10.9753C21.5288 6.48177 18.6761 2 14.9064 2C12.7572 2 11.464 3.1029 10.7492 4.05089C10.3726 4.55043 9.62799 4.55043 9.25084 4.05089C8.53597 3.1029 7.24281 2 5.09363 2C1.32385 2 -1.52877 6.48177 0.900417 10.9753C2.74159 14.3811 7.01938 17.4249 8.98227 18.699Z" />
  </svg>
);

Heart.displayName = 'Heart';
