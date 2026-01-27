import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const BellColored = ({
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
    <path d="M14.0799 17.6699C14.0799 19.3711 12.7011 20.7499 10.9999 20.7499C9.29877 20.7499 7.91992 19.3711 7.91992 17.6699H14.0799Z" fill="#FF9E00"/>
<path d="M11 1.25C11.9694 1.25004 12.7642 1.99296 12.8486 2.94043C16.2275 3.80355 18.6424 7.00524 18.6426 10.6143V13.958L19.9434 16.21C20.3176 16.8589 19.8491 17.6699 19.0996 17.6699H2.89941C2.15055 17.6697 1.68231 16.8588 2.05664 16.21L3.35645 13.958L3.35742 10.3525C3.35752 6.76937 5.82329 3.76257 9.15039 2.93555C9.23709 1.99033 10.0322 1.25 11 1.25Z" fill="url(#paint0_linear_1764_3286)"/>
<defs>
<linearGradient id="paint0_linear_1764_3286" x1="10.9998" y1="1.25" x2="10.9998" y2="17.6699" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFE8A3"/>
<stop offset="1" stopColor="#FFD75C"/>
</linearGradient>
</defs>
  </svg>
);

BellColored.displayName = 'BellColored';
