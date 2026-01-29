import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const CaldendarIconColored = ({
  size = DEFAULT_SIZE,
  title,
  ...props
}: ColoredIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    width={size}
    height={size}
    fill="none"
    aria-hidden={title ? undefined : true}
    aria-label={title}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M1 6.06452C1 4.92432 1.91839 4 3.05128 4H18.9487C20.0816 4 21 4.92432 21 6.06452V17.9355C21 19.0757 20.0816 20 18.9487 20H3.05128C1.91839 20 1 19.0757 1 17.9355V6.06452Z" fill="white"/>
<path d="M4 3C4 2.44772 4.44772 2 5 2C5.55228 2 6 2.44772 6 3V5C6 5.55228 5.55228 6 5 6C4.44772 6 4 5.55228 4 5V3Z" fill="#8EC6FF"/>
<path d="M16 3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V5C18 5.55228 17.5523 6 17 6C16.4477 6 16 5.55228 16 5V3Z" fill="#8EC6FF"/>
<path d="M10 3C10 2.44772 10.4477 2 11 2C11.5523 2 12 2.44772 12 3V5C12 5.55228 11.5523 6 11 6C10.4477 6 10 5.55228 10 5V3Z" fill="#8EC6FF"/>
<path d="M14.2002 9.30132C14.6203 8.89137 15.2918 8.9009 15.7 9.32272C16.1082 9.74462 16.0987 10.419 15.6787 10.829L10.6887 15.6987C10.2771 16.1004 9.62177 16.1004 9.21018 15.6987L6.32128 12.8793C5.90137 12.4693 5.89183 11.7948 6.29997 11.373C6.70819 10.9512 7.37972 10.9416 7.79976 11.3516L9.94942 13.4494L14.2002 9.30132Z" fill="url(#paint0_linear_1918_4639)"/>
<defs>
<linearGradient id="paint0_linear_1918_4639" x1="6" y1="11.4063" x2="16" y2="11.4063" gradientUnits="userSpaceOnUse">
<stop stopColor="#3786FF"/>
<stop offset="1" stopColor="#98CDFF"/>
</linearGradient>
</defs>
  </svg>
);

CaldendarIconColored.displayName = 'CaldendarIconColored';
