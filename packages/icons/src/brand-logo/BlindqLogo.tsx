import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const BlindqLogo = ({
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
      <g clipPath="url(#clip0_2332_6950)">
        <path
          d="M6.36973 2.25195H8.03439V20.1688H6.36973C3.97906 20.1688 2.04306 18.2313 2.04306 15.8421V6.57862C2.04306 4.18942 3.98053 2.25195 6.36973 2.25195Z"
          fill="#F45A57"
        />
        <path
          d="M8.67093 14.523C8.67093 13.2132 9.7372 12.1484 11.0469 12.1484C12.3567 12.1484 13.4215 13.2132 13.4215 14.523C13.4215 15.8327 12.3552 16.899 11.0469 16.899C9.73866 16.899 8.67093 15.8327 8.67093 14.523Z"
          fill="#F45A57"
        />
        <path
          d="M8.67093 7.82913C8.67093 6.51939 9.7372 5.45312 11.0469 5.45312C12.3567 5.45312 13.4215 6.51939 13.4215 7.82913C13.4215 9.13886 12.3552 10.2051 11.0469 10.2051C9.73866 10.2051 8.67093 9.13886 8.67093 7.82913Z"
          fill="#F45A57"
        />
        <path
          d="M19.9584 6.57862V15.8406C19.9584 18.2313 18.0209 20.1673 15.6317 20.1673H8.67093V16.373C9.2224 17.08 10.0819 17.5361 11.0469 17.5361C12.7087 17.5361 14.0609 16.1838 14.0609 14.5221C14.0609 12.8604 12.7087 11.5081 11.0469 11.5081C10.0819 11.5081 9.2224 11.9642 8.67093 12.6712V9.67769C9.2224 10.3846 10.0819 10.8408 11.0469 10.8408C12.7087 10.8408 14.0609 9.48849 14.0609 7.82675C14.0609 6.16502 12.7087 4.81275 11.0469 4.81275C10.0819 4.81275 9.2224 5.26889 8.67093 5.97582V2.25195H15.6303C18.0195 2.25195 19.9569 4.18942 19.9569 6.57862H19.9584Z"
          fill="#F45A57"
        />
      </g>
      <defs>
        <clipPath id="clip0_2332_6950">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

BlindqLogo.displayName = 'BlindqLogo';
