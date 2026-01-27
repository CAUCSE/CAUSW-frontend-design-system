import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const OfficialColored = ({
  size = DEFAULT_SIZE,
  title,
  ...props
}: ColoredIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    width={size}
    height={size}
    fill="none"
    aria-hidden={title ? undefined : true}
    aria-label={title}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6.78793 12 7.56815 11.8448 8.2961 11.5433C9.02405 11.2417 9.68549 10.7998 10.2426 10.2426C10.7998 9.68549 11.2417 9.02405 11.5433 8.2961C11.8448 7.56815 12 6.78793 12 6C12 5.21207 11.8448 4.43185 11.5433 3.7039C11.2417 2.97595 10.7998 2.31451 10.2426 1.75736C9.68549 1.20021 9.02405 0.758251 8.2961 0.456723C7.56815 0.155195 6.78793 -1.17411e-08 6 0C4.4087 2.37122e-08 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM5.84533 8.42667L8.75198 4.93869C8.98763 4.65591 8.94943 4.23563 8.66664 3.99998C8.38388 3.76434 7.96364 3.80253 7.72797 4.08527L5.288 7.01267L4.27595 6.00016C4.01568 5.73978 3.5936 5.73973 3.33328 6.00005C3.073 6.26033 3.073 6.68233 3.33328 6.94261L4.862 8.47133C5.1391 8.74844 5.59442 8.72769 5.84533 8.42667Z" fill="url(#paint0_linear_1936_2858)"/>
<defs>
<linearGradient id="paint0_linear_1936_2858" x1="0" y1="6" x2="12" y2="6" gradientUnits="userSpaceOnUse">
<stop stopColor="#3786FF"/>
<stop offset="1" stopColor="#79BEFF"/>
</linearGradient>
</defs>
  </svg>
);

OfficialColored.displayName = 'OfficialColored';
