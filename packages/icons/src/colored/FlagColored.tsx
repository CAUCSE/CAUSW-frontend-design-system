import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const FlagColored = ({
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
      <path d="M9.625 4.75C9.625 3.64543 10.5204 2.75 11.625 2.75H18.894C20.3486 2.75 21.3166 4.25341 20.7147 5.57761L18.9387 9.48489C18.6997 10.0107 18.6997 10.6143 18.9387 11.1401L20.7147 15.0474C21.3166 16.3716 20.3486 17.875 18.894 17.875H11.625C10.5204 17.875 9.625 16.9796 9.625 15.875V4.75Z" fill="url(#paint0_linear_1928_4880)"/>
<path d="M0 2C0 0.895431 0.89543 0 2 0H11.75C12.8546 0 13.75 0.895431 13.75 2V13.125C13.75 14.2296 12.8546 15.125 11.75 15.125H2.75V20.625C2.75 21.3844 2.13439 22 1.375 22C0.615609 22 0 21.3844 0 20.625V15.125V2Z" fill="url(#paint1_linear_1928_4880)"/>
<defs>
<linearGradient id="paint0_linear_1928_4880" x1="15.8125" y1="2.75" x2="15.8125" y2="17.875" gradientUnits="userSpaceOnUse">
<stop stopColor="#F2AA40"/>
<stop offset="1" stopColor="#FFC843"/>
</linearGradient>
<linearGradient id="paint1_linear_1928_4880" x1="6.875" y1="0" x2="6.875" y2="22" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFC23D"/>
<stop offset="1" stopColor="#FFDE8F"/>
</linearGradient>
</defs>
    </svg>
  );
};

FlagColored.displayName = 'FlagColored';
