import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const PenColored = ({
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
      <path d="M15.0449 1.41461L1.84473 14.6152L7.38732 20.158L20.5875 6.95738C21.3686 6.17632 21.3686 4.90997 20.5875 4.12891L17.8733 1.41461C17.0923 0.633551 15.826 0.63355 15.0449 1.41461Z" fill="url(#paint0_linear_2274_7696)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0.562427 21.9848L3.27118 21.2591L0.74136 18.7285L0.0157251 21.4381C-0.0733881 21.7698 0.230728 22.0732 0.562427 21.9848Z" fill="#313D4C"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0.742188 18.7308L3.2713 21.2614L7.38819 20.1581L1.84549 14.6152L0.742188 18.7308Z" fill="#E3EBFF"/>
<defs>
<linearGradient id="paint0_linear_2274_7696" x1="20.1572" y1="2.70493" x2="21.0381" y2="17.2705" gradientUnits="userSpaceOnUse">
<stop stopColor="#2B7FFF"/>
<stop offset="1" stopColor="#A2C7FF"/>
</linearGradient>
</defs>
    </svg>
  );
};

PenColored.displayName = 'PenColored';
