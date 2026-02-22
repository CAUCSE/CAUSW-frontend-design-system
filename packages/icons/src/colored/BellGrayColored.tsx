import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const BellGrayColored = ({
  size = DEFAULT_SIZE,
  title,
  ...props
}: ColoredIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    width={size}
    height={size}
    fill="none"
    aria-hidden={title ? undefined : true}
    aria-label={title}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M33.28 41.7651C33.28 45.786 30.0209 49.0451 26 49.0451C21.9791 49.0451 18.72 45.786 18.72 41.7651H33.28Z" fill="#828A97"/>
<path fillRule="evenodd" clipRule="evenodd" d="M25.9998 2.95532C28.2901 2.95549 30.169 4.70949 30.37 6.94751C38.3566 8.98765 44.0642 16.5585 44.0643 25.0891V32.9924L47.1375 38.3147C48.0227 39.8486 46.917 41.7657 45.1454 41.7659H6.85337C5.08307 41.7657 3.97546 39.8486 4.8602 38.3147L7.93344 32.9924L7.9354 24.4709C7.9354 16.0014 13.7636 8.89356 21.6278 6.93872C21.8328 4.7047 23.7124 2.95532 25.9998 2.95532Z" fill="url(#paint0_linear_2381_9399)"/>
<defs>
<linearGradient id="paint0_linear_2381_9399" x1="25.9991" y1="2.95532" x2="25.9991" y2="41.7659" gradientUnits="userSpaceOnUse">
<stop stopColor="#E0E3EF"/>
<stop offset="1" stopColor="#B5B8BF"/>
</linearGradient>
</defs>
  </svg>
);

BellGrayColored.displayName = 'BellGrayColored';
