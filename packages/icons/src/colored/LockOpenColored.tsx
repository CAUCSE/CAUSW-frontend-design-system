import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const LockOpenColored = ({
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
    <g clip-path="url(#clip0_1764_3285)">
<path d="M15.6603 7.82503H13.7501V5.54693C13.7501 3.88923 12.6617 3.0251 11.004 3.0251C9.34626 3.0251 8.5251 3.88923 8.5251 5.54693V7.82503H6.34766V5.54693C6.34766 2.97952 8.43656 0.890625 11.004 0.890625C13.5714 0.890625 15.6603 2.97952 15.6603 5.54693V7.82503Z" fill="#6B7683"/>
<path d="M17.0539 7.74658H4.95391C3.73888 7.74658 2.75391 8.73156 2.75391 9.94658V18.1966C2.75391 19.4116 3.73888 20.3966 4.95391 20.3966H17.0539C18.2689 20.3966 19.2539 19.4116 19.2539 18.1966V9.94658C19.2539 8.73156 18.2689 7.74658 17.0539 7.74658Z" fill="url(#paint0_linear_1764_3285)"/>
<path d="M11.004 14.3698C11.9153 14.3698 12.654 13.6311 12.654 12.7198C12.654 11.8086 11.9153 11.0698 11.004 11.0698C10.0927 11.0698 9.354 11.8086 9.354 12.7198C9.354 13.6311 10.0927 14.3698 11.004 14.3698Z" fill="#313D4C"/>
<path d="M11.0042 16.9824C10.5482 16.9824 10.1792 16.6128 10.1792 16.1574V13.178C10.1792 12.7226 10.5482 12.353 11.0042 12.353C11.4601 12.353 11.8292 12.7226 11.8292 13.178V16.1574C11.8292 16.6128 11.4601 16.9824 11.0042 16.9824Z" fill="#313D4C"/>
</g>
<defs>
<linearGradient id="paint0_linear_1764_3285" x1="11.0039" y1="7.74658" x2="14.1755" y2="19.5439" gradientUnits="userSpaceOnUse">
<stop stopColor="#F3F6FA"/>
<stop offset="1" stopColor="#CED4DA"/>
</linearGradient>
<clipPath id="clip0_1764_3285">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
  </svg>
);

LockOpenColored.displayName = 'LockOpenColored';
