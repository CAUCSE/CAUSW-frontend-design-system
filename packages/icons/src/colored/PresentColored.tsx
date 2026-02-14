import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const PresentColored = ({
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
    <path d="M2.50024 8.40112C2.50024 6.74427 3.84339 5.40112 5.50024 5.40112H18.4999C20.1567 5.40112 21.4999 6.74427 21.4999 8.40112V19.4009C21.4999 21.0577 20.1567 22.4009 18.4999 22.4009H5.50024C3.84339 22.4009 2.50024 21.0577 2.50024 19.4009V8.40112Z" fill="#D9D9D9"/>
<path d="M2.50024 8.40112C2.50024 6.74427 3.84339 5.40112 5.50024 5.40112H18.4999C20.1567 5.40112 21.4999 6.74427 21.4999 8.40112V19.4009C21.4999 21.0577 20.1567 22.4009 18.4999 22.4009H5.50024C3.84339 22.4009 2.50024 21.0577 2.50024 19.4009V8.40112Z" fill="url(#paint0_linear_6475_36649)"/>
<path d="M17.676 2.59808V6.28939C17.676 7.15357 16.7901 7.73443 15.9976 7.3899L13.5 6.30415V22.4041H10.5V6.30415L8.00239 7.3899C7.20986 7.73443 6.32397 7.15357 6.32397 6.28939L6.32398 2.59808C6.32398 1.89008 7.04998 1.40408 7.70398 1.67408L12 3.43808L16.296 1.67408C16.95 1.40408 17.676 1.89008 17.676 2.59808Z" fill="#FFCD00"/>
<path d="M17.676 2.59808V6.28939C17.676 7.15357 16.7901 7.73443 15.9976 7.3899L13.5 6.30415V22.4041H10.5V6.30415L8.00239 7.3899C7.20986 7.73443 6.32397 7.15357 6.32397 6.28939L6.32398 2.59808C6.32398 1.89008 7.04998 1.40408 7.70398 1.67408L12 3.43808L16.296 1.67408C16.95 1.40408 17.676 1.89008 17.676 2.59808Z" fill="url(#paint1_linear_6475_36649)"/>
<path d="M17.676 2.59808V6.28939C17.676 7.15357 16.7901 7.73443 15.9976 7.3899L13.5 6.30415V22.4041H10.5V6.30415L8.00239 7.3899C7.20986 7.73443 6.32397 7.15357 6.32397 6.28939L6.32398 2.59808C6.32398 1.89008 7.04998 1.40408 7.70398 1.67408L12 3.43808L16.296 1.67408C16.95 1.40408 17.676 1.89008 17.676 2.59808Z" fill="url(#paint2_linear_6475_36649)"/>
<defs>
<linearGradient id="paint0_linear_6475_36649" x1="22.1457" y1="15.2197" x2="5.68539" y2="23.0951" gradientUnits="userSpaceOnUse">
<stop stopColor="#2B7FFF"/>
<stop offset="1" stopColor="#A2C7FF"/>
</linearGradient>
<linearGradient id="paint1_linear_6475_36649" x1="12" y1="1.59839" x2="12" y2="22.4041" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFE8A3"/>
<stop offset="1" stopColor="#FFD75C"/>
</linearGradient>
<linearGradient id="paint2_linear_6475_36649" x1="12" y1="1.59839" x2="12" y2="22.4041" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFC23D"/>
<stop offset="1" stopColor="#FFDE8F"/>
</linearGradient>
</defs>
  </svg>
);

PresentColored.displayName = 'PresentColored';
