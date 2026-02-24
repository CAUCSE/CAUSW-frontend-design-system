import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const CalendarGrayColored = ({
  size = DEFAULT_SIZE,
  title,
  ...props
}: ColoredIconProps) => {
  const ref = React.useRef<SVGSVGElement | null>(null);

  useIsoLayoutEffect(() => {
    if (ref.current) {
      uniquifySvgIds(ref.current);
    }
  }, []);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 44"
      width={size}
      height={size}
      fill="none"
      aria-hidden={title ? undefined : true}
      aria-label={title}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M2.18188 12.129C2.18188 9.84863 4.18565 8 6.65741 8H41.3427C43.8145 8 45.8182 9.84863 45.8182 12.129V35.871C45.8182 38.1514 43.8145 40 41.3427 40H6.65741C4.18565 40 2.18188 38.1514 2.18188 35.871V12.129Z" fill="#E9ECF2"/>
<path d="M8.72729 6C8.72729 4.89543 9.70413 4 10.9091 4V4C12.1141 4 13.0909 4.89543 13.0909 6V10C13.0909 11.1046 12.1141 12 10.9091 12V12C9.70413 12 8.72729 11.1046 8.72729 10V6Z" fill="#828A97"/>
<path d="M34.9092 6C34.9092 4.89543 35.886 4 37.091 4V4C38.296 4 39.2728 4.89543 39.2728 6V10C39.2728 11.1046 38.296 12 37.091 12V12C35.886 12 34.9092 11.1046 34.9092 10V6Z" fill="#828A97"/>
<path d="M21.8181 6C21.8181 4.89543 22.7949 4 23.9999 4V4C25.2049 4 26.1818 4.89543 26.1818 6V10C26.1818 11.1046 25.2049 12 23.9999 12V12C22.7949 12 21.8181 11.1046 21.8181 10V6Z" fill="#828A97"/>
<path d="M30.9822 18.6026C31.8987 17.7827 33.3638 17.8018 34.2544 18.6454C35.145 19.4892 35.1243 20.8381 34.2079 21.6581L23.3206 31.3975C22.4226 32.2008 20.9929 32.2008 20.0948 31.3975L13.7918 25.7586C12.8756 24.9386 12.8548 23.5897 13.7453 22.7459C14.636 21.9024 16.1011 21.8833 17.0176 22.7031L21.7077 26.8987L30.9822 18.6026Z" fill="url(#paint0_linear_3177_22935)"/>
<defs>
<linearGradient id="paint0_linear_3177_22935" x1="23.9999" y1="18" x2="23.9999" y2="32" gradientUnits="userSpaceOnUse">
<stop stopColor="#BDBFCA"/>
<stop offset="1" stopColor="#9599A1"/>
</linearGradient>
</defs>
    </svg>
  );
};

CalendarGrayColored.displayName = 'CalendarGrayColored';
