import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const LockerColored = ({
  size = DEFAULT_SIZE,
  title,
  ...props
}: ColoredIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 22"
    width={size}
    height={size}
    fill="none"
    aria-hidden={title ? undefined : true}
    aria-label={title}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M5.5 3C5.5 1.34315 6.84315 0 8.5 0H14.5C20.5751 0 25.5 4.92487 25.5 11V19C25.5 20.6569 24.1569 22 22.5 22H8.5C6.84315 22 5.5 20.6569 5.5 19V3Z"
      fill="url(#paint0_linear_1928_5028)"
    />
    <rect
      data-figma-bg-blur-radius="4"
      y="6.5"
      width="15.36"
      height="12"
      rx="2"
      fill="url(#paint1_linear_1928_5028)"
      fillOpacity="0.54"
    />
    <path
      d="M6.85796 9.94135C7.06707 9.35288 7.93293 9.35288 8.14204 9.94135C8.45329 10.8172 9.15223 11.5213 10.0564 11.8697C10.6479 12.0976 10.6479 12.9024 10.0564 13.1303C9.15223 13.4787 8.45329 14.1828 8.14204 15.0586C7.93293 15.6471 7.06707 15.6471 6.85796 15.0586C6.54671 14.1828 5.84777 13.4787 4.9436 13.1303C4.35213 12.9024 4.35213 12.0976 4.9436 11.8697C5.84777 11.5213 6.54671 10.8172 6.85796 9.94135Z"
      fill="white"
    />
    <defs>
      <clipPath id="bgblur_0_1928_5028_clip_path" transform="translate(4 -2.5)">
        <rect y="6.5" width="15.36" height="12" rx="2" />
      </clipPath>
      <linearGradient
        id="paint0_linear_1928_5028"
        x1="15.5"
        y1="0"
        x2="15.5"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA261" />
        <stop offset="1" stopColor="#FF7D3C" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1928_5028"
        x1="15.36"
        y1="12.5"
        x2="0"
        y2="12.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE6BA" />
        <stop offset="1" stopColor="#FCB128" />
      </linearGradient>
    </defs>
  </svg>
);

LockerColored.displayName = 'LockerColored';
