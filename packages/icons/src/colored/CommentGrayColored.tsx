import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const CommentGrayColored = ({
  size = DEFAULT_SIZE,
  title,
  ...props
}: ColoredIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 56 56"
    width={size}
    height={size}
    fill="none"
    aria-hidden={title ? undefined : true}
    aria-label={title}
    role={title ? 'img' : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    <path d="M56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56C32.736 56 37.204 54.822 41.12 52.742L52.176 55.886C52.6898 56.0317 53.2332 56.0375 53.7501 55.9029C54.2669 55.7683 54.7385 55.4982 55.116 55.1205C55.4936 54.7427 55.7634 54.271 55.8977 53.7541C56.032 53.2372 56.0259 52.6938 55.88 52.18L52.736 41.126C54.8849 37.0849 56.0059 32.5769 56 28Z" fill="url(#paint0_linear_2369_8534)"/>
<path d="M16.4043 26.3545C18.1864 26.3545 19.6293 27.799 19.6293 29.5794C19.6293 30.4343 19.29 31.2545 18.6839 31.8606C18.0794 32.4651 17.2591 32.806 16.4027 32.806C14.6206 32.806 13.1777 31.3616 13.1777 29.5811C13.1777 27.8006 14.6222 26.3561 16.4027 26.3561L16.4043 26.3545Z" fill="#929CA9"/>
<path d="M40.2718 32.8044C42.0529 32.8044 43.4968 31.3605 43.4968 29.5794C43.4968 27.7983 42.0529 26.3545 40.2718 26.3545C38.4907 26.3545 37.0469 27.7983 37.0469 29.5794C37.0469 31.3605 38.4907 32.8044 40.2718 32.8044Z" fill="#929CA9"/>
<path d="M28.3363 32.8044C30.1174 32.8044 31.5612 31.3605 31.5612 29.5794C31.5612 27.7983 30.1174 26.3545 28.3363 26.3545C26.5552 26.3545 25.1113 27.7983 25.1113 29.5794C25.1113 31.3605 26.5552 32.8044 28.3363 32.8044Z" fill="#929CA9"/>
<defs>
<linearGradient id="paint0_linear_2369_8534" x1="6.67572e-06" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
<stop stopColor="#F3F6FA"/>
<stop offset="1" stopColor="#CED4DA"/>
</linearGradient>
</defs>
  </svg>
);

CommentGrayColored.displayName = 'CommentGrayColored';
