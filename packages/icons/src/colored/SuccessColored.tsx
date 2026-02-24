import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const SuccessColored = ({
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
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      aria-hidden={title ? undefined : true}
      aria-label={title}
      role={title ? 'img' : undefined}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M9.99912 7.09456e-06C11.3127 -0.00156051 12.6137 0.256671 13.8273 0.759334C15.0403 1.2618 16.1421 1.99939 17.0695 2.92871L17.4093 3.28429C18.1806 4.13352 18.8007 5.11059 19.2407 6.17271C19.7431 7.38577 20.0013 8.68614 20 9.99912L19.9877 10.4905C19.9326 11.6362 19.6806 12.7652 19.2407 13.8273C18.7382 15.0403 17.9997 16.1412 17.0704 17.0687L17.0713 17.0695C16.1435 17.9997 15.0411 18.7379 13.8273 19.2407C12.6137 19.7433 11.3127 20.0016 9.99912 20C8.68614 20.0013 7.38577 19.7431 6.17271 19.2407C4.95893 18.7379 3.85655 17.9997 2.92871 17.0695C1.99959 16.1422 1.26172 15.0401 0.759334 13.8273C0.256671 12.6137 -0.00156051 11.3127 7.09456e-06 9.99912C-0.00132922 8.68614 0.256894 7.38577 0.759334 6.17271C1.26212 4.95893 2.00031 3.85655 2.93047 2.92871C3.85793 1.99939 4.95969 1.2618 6.17271 0.759334C7.38577 0.256894 8.68614 -0.00132934 9.99912 7.09456e-06Z" fill="#3ED06C"/>
<path d="M13.3513 6.53326C13.7596 6.12498 14.4221 6.12498 14.8304 6.53326C15.2386 6.94153 15.2386 7.60403 14.8304 8.0123L9.37581 13.4668C9.17975 13.6629 8.91356 13.7731 8.63628 13.7731C8.35901 13.7731 8.09282 13.6629 7.89676 13.4668L5.16949 10.7396C4.76121 10.3313 4.76121 9.6688 5.16949 9.26053C5.57776 8.85225 6.24026 8.85225 6.64854 9.26053L8.63628 11.2483L13.3513 6.53326Z" fill="#F5F6F8"/>
    </svg>
  );
};

SuccessColored.displayName = 'SuccessColored';
