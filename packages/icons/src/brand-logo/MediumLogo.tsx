import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const MediumLogo = ({
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
      viewBox="0 0 22 13"
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
        d="M12.4093 6.49989C12.4093 10.0897 9.63137 13 6.20454 13C2.77771 13 0 10.0906 0 6.49989C0 2.90918 2.77792 0 6.20454 0C9.63116 0 12.4093 2.91006 12.4093 6.49989ZM19.216 6.49989C19.216 9.87928 17.8269 12.6186 16.1136 12.6186C14.4003 12.6186 13.0112 9.8784 13.0112 6.49989C13.0112 3.12138 14.4003 0.381212 16.1136 0.381212C17.8269 0.381212 19.216 3.12138 19.216 6.49989ZM22 6.49989C22 9.52766 21.5114 11.982 20.9088 11.982C20.3063 11.982 19.8177 9.52679 19.8177 6.49989C19.8177 3.473 20.3063 1.01781 20.9091 1.01781C21.5118 1.01781 22 3.47234 22 6.49989Z"
        fill="black"
      />
    </svg>
  );
};

MediumLogo.displayName = 'MediumLogo';
