import type { MonoIconProps } from '../types';
import { DEFAULT_SIZE, MONO_COLORS } from '../types';

export const Bell = ({
  size = DEFAULT_SIZE,
  active = false,
  title,
  ...props
}: MonoIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width={size}
    height={size}
    fill={active ? MONO_COLORS.active : MONO_COLORS.inactive}
    color={active ? MONO_COLORS.active : MONO_COLORS.inactive}
    aria-hidden={title ? undefined : true}
    aria-label={title}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M10 0C7.95398 0 5.99176 0.790176 4.54501 2.1967C3.09826 3.60322 2.28548 5.51088 2.28548 7.5V11.9825L1.37645 12.8663C1.19669 13.0411 1.07428 13.2638 1.02469 13.5062C0.975103 13.7487 1.00056 13.9999 1.09786 14.2283C1.19515 14.4567 1.35991 14.6519 1.5713 14.7893C1.78269 14.9266 2.03122 14.9999 2.28548 15H17.7145C17.9688 14.9999 18.2173 14.9266 18.4287 14.7893C18.6401 14.6519 18.8048 14.4567 18.9021 14.2283C18.9994 13.9999 19.0249 13.7487 18.9753 13.5062C18.9257 13.2638 18.8033 13.0411 18.6236 12.8663L17.7145 11.9825V7.5C17.7145 5.51088 16.9017 3.60322 15.455 2.1967C14.0082 0.790176 12.046 0 10 0ZM10 20C8.97699 20 7.99588 19.6049 7.27251 18.9017C6.54913 18.1984 6.14274 17.2446 6.14274 16.25H13.8573C13.8573 17.2446 13.4509 18.1984 12.7275 18.9017C12.0041 19.6049 11.023 20 10 20Z" />
  </svg>
);

Bell.displayName = 'Bell';
