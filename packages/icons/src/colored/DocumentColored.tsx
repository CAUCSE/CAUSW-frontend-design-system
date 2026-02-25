import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const DocumentColored = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M3 19.4545V2.54545C3 2.24402 3.24768 2 3.55363 2H13L19 8V19.4545C19 19.756 18.7523 20 18.4464 20H3.55363C3.24768 20 3 19.756 3 19.4545Z" fill="url(#paint0_linear_1797_7863)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13.7124 8H19L13 2V7.28759C13 7.68129 13.3187 8 13.7124 8Z" fill="#A1AEBC"/>
<line x1="6.75" y1="12.25" x2="15.25" y2="12.25" stroke="#97A6B9" strokeWidth="1.5" strokeLinecap="round"/>
<line x1="6.75" y1="15.25" x2="15.25" y2="15.25" stroke="#97A6B9" strokeWidth="1.5" strokeLinecap="round"/>
<defs>
<linearGradient id="paint0_linear_1797_7863" x1="11" y1="2" x2="17.1446" y2="17.576" gradientUnits="userSpaceOnUse">
<stop stopColor="#F3F6FA"/>
<stop offset="1" stopColor="#CED4DA"/>
</linearGradient>
</defs>
    </svg>
  );
};

DocumentColored.displayName = 'DocumentColored';
