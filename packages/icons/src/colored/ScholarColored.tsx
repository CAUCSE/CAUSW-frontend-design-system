import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const ScholarColored = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M21.1499 18.0194C21.1499 20.7468 16.0584 23.3501 11.8853 23.3501C7.71215 23.3501 3.1499 20.6226 3.1499 18.0194L4.41195 11.201L11.8853 8.3501L19.3586 11.0776L21.1499 18.0194Z" fill="url(#paint0_linear_2381_8174)"/>
<rect x="5" y="10" width="1.5" height="7" fill="#FFC100"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0.546796 8.14402L10.9586 2.3023C11.5833 1.89923 12.4161 1.89923 13.0408 2.3023L23.4532 8.14402C24.1823 8.54708 24.1823 9.45352 23.4532 9.85598L13.0408 15.6977C12.4161 16.1008 11.5833 16.1008 10.9586 15.6977L0.546796 9.85598C-0.182265 9.45292 -0.182265 8.54648 0.546796 8.14402Z" fill="#67707B"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5.55533 16C4.66667 16 4 16.5847 4 17.2671V19.2913C4 19.5948 4.692 20 5.5 20C6.308 20 7 19.6965 7 19.2913V17.2671C7 16.5847 6.44467 16 5.55533 16Z" fill="#FFDA16"/>
<defs>
<linearGradient id="paint0_linear_2381_8174" x1="12.1499" y1="8.3501" x2="12.1499" y2="23.3501" gradientUnits="userSpaceOnUse">
<stop stopColor="#57616C"/>
<stop offset="1" stopColor="#363C43"/>
</linearGradient>
</defs>
    </svg>
  );
};

ScholarColored.displayName = 'ScholarColored';
