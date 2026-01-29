import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const CommentColored = ({
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
    <path d="M22 11C22 4.92486 17.0751 0 11 0C4.92485 0 0 4.92486 0 11C0 17.0751 4.92485 22 11 22C12.8606 22 14.6159 21.5372 16.1543 20.7201L20.4977 21.9552C20.6996 22.0124 20.9131 22.0147 21.1161 21.9619C21.3191 21.909 21.5044 21.8029 21.6527 21.6545C21.8011 21.5061 21.9071 21.3208 21.9598 21.1177C22.0126 20.9146 22.0102 20.7011 21.9528 20.4993L20.7177 16.1566C21.5619 14.5691 22.0023 12.7981 22 11Z" fill="url(#paint0_linear_2274_7763)"/>
<path d="M6.44435 10.3535C7.14446 10.3535 7.71129 10.921 7.71129 11.6205C7.71129 11.9563 7.57799 12.2785 7.33987 12.5166C7.1024 12.7541 6.78017 12.888 6.4437 12.888C5.74358 12.888 5.17676 12.3206 5.17676 11.6211C5.17676 10.9216 5.74423 10.3542 6.4437 10.3542L6.44435 10.3535Z" fill="#333D4B"/>
<path d="M15.8207 12.8874C16.5204 12.8874 17.0876 12.3202 17.0876 11.6205C17.0876 10.9207 16.5204 10.3535 15.8207 10.3535C15.1209 10.3535 14.5537 10.9207 14.5537 11.6205C14.5537 12.3202 15.1209 12.8874 15.8207 12.8874Z" fill="#333D4B"/>
<path d="M11.1317 12.8874C11.8314 12.8874 12.3986 12.3202 12.3986 11.6205C12.3986 10.9207 11.8314 10.3535 11.1317 10.3535C10.432 10.3535 9.86475 10.9207 9.86475 11.6205C9.86475 12.3202 10.432 12.8874 11.1317 12.8874Z" fill="#333D4B"/>
<defs>
<linearGradient id="paint0_linear_2274_7763" x1="2.6226e-06" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
<stop stopColor="#F3F6FA"/>
<stop offset="1" stopColor="#CED4DA"/>
</linearGradient>
</defs>
  </svg>
);

CommentColored.displayName = 'CommentColored';
