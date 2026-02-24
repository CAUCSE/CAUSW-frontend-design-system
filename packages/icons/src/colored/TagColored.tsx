import * as React from 'react';
import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';
import { uniquifySvgIds } from '../uniqueSvgIds';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const TagColored = ({
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
      <path d="M16.1277 14.2281H18.487V16.6662H15.5892L14.6403 21H11.6656L12.6144 16.6662H9.35826L8.38378 21H5.40973L6.38422 16.6662H4V14.2281H6.92347L7.89796 9.77121H5.51302V7.33376H8.43649L9.41098 3H12.3857L11.4112 7.33376H14.693L15.6419 3H18.6159L17.6671 7.33376H20V9.77121H17.1285L16.1277 14.2281ZM13.1529 14.2281L14.1531 9.77121H10.8713L9.8968 14.2281H13.1529Z" fill="#78828D"/>
    </svg>
  );
};

TagColored.displayName = 'TagColored';
