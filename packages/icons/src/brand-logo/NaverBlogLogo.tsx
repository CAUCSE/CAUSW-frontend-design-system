import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const NaverBlogLogo = ({
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
      viewBox="0 0 19 21"
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
        d="M7.19935 6.08792C5.83109 6.08792 4.56311 6.51688 3.52197 7.24744V1.86651H0.5V18.5789H3.52197V17.749C4.56311 18.4794 5.83109 18.9085 7.19935 18.9085C10.7397 18.9085 13.6095 16.0386 13.6095 12.4983C13.6095 8.95801 10.7395 6.08792 7.19935 6.08792ZM6.91156 16.1087C4.98136 16.1087 3.41663 14.491 3.41663 12.4956C3.41663 10.5002 4.98136 8.88246 6.91156 8.88246C8.84177 8.88246 10.4065 10.5002 10.4065 12.4956C10.4065 14.491 8.84177 16.1087 6.91156 16.1087ZM17.2912 0.5H18.5V19.9715H17.2912V0.5Z"
        fill="#03C75A"
        stroke="#03C75A"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

NaverBlogLogo.displayName = 'NaverBlogLogo';
