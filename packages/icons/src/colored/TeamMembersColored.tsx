import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const TeamMembersColored = ({
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
      viewBox="0 0 18 18"
      width={size}
      height={size}
      fill="none"
      aria-hidden={title ? undefined : true}
      aria-label={title}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title && <title>{title}</title>}
      <g clipPath="url(#clip0_14588_505)">
<path d="M5.9094 8.73583C7.45798 8.73583 8.71335 7.48046 8.71335 5.93188C8.71335 4.3833 7.45798 3.12793 5.9094 3.12793C4.36082 3.12793 3.10545 4.3833 3.10545 5.93188C3.10545 7.48046 4.36082 8.73583 5.9094 8.73583Z" fill="#9CD99C"/>
<path d="M5.9094 9.59351C2.1411 9.59351 0.675003 12.163 0.675003 13.3582C0.675003 14.5534 3.7953 14.8716 5.9094 14.8716C8.0235 14.8716 11.1438 14.5534 11.1438 13.3582C11.1438 12.163 9.67815 9.59351 5.9094 9.59351Z" fill="#9CD99C"/>
<path d="M12.0906 8.73583C13.6392 8.73583 14.8946 7.48046 14.8946 5.93188C14.8946 4.3833 13.6392 3.12793 12.0906 3.12793C10.542 3.12793 9.28665 4.3833 9.28665 5.93188C9.28665 7.48046 10.542 8.73583 12.0906 8.73583Z" fill="#33A355"/>
<path d="M12.0906 9.59351C8.3223 9.59351 6.8562 12.163 6.8562 13.3582C6.8562 14.5534 9.9765 14.8716 12.0906 14.8716C14.2047 14.8716 17.325 14.5534 17.325 13.3582C17.325 12.163 15.8594 9.59351 12.0906 9.59351Z" fill="#33A355"/>
</g>
<defs>
<clipPath id="clip0_14588_505">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

TeamMembersColored.displayName = 'TeamMembersColored';
