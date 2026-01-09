import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const QuestionColored = ({
  size = DEFAULT_SIZE,
  title,
  ...props
}: ColoredIconProps) => (
  <svg
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
    <path
      d="M11.0161 2C8.29423 2 6.53129 3.14971 5.1472 5.20013C4.89612 5.57209 4.97353 6.08206 5.32377 6.35586L6.79478 7.50578C7.1485 7.78229 7.65178 7.71764 7.92871 7.35996C8.78288 6.25672 9.41649 5.62152 10.7507 5.62152C11.7998 5.62152 13.0974 6.31757 13.0974 7.36636C13.0974 8.1592 12.4625 8.56638 11.4267 9.16509C10.2188 9.86329 8.62029 10.7322 8.62029 12.9059V13.25C8.62029 13.716 8.9867 14.0938 9.43869 14.0938H11.91C12.362 14.0938 12.7284 13.716 12.7284 13.25V13.047C12.7284 11.5402 17 11.4775 17 7.4C17 4.32931 13.9105 2 11.0161 2ZM10.6743 15.1294C9.37186 15.1294 8.3122 16.2219 8.3122 17.5647C8.3122 18.9076 9.37186 20 10.6743 20C11.9768 20 13.0365 18.9075 13.0365 17.5647C13.0365 16.2219 11.9768 15.1294 10.6743 15.1294Z"
      fill="url(#paint0_linear_1797_7906)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1797_7906"
        x1="17.4079"
        y1="12.3963"
        x2="5.59413"
        y2="15.7678"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2B7FFF" />
        <stop offset="1" stopColor="#A2C7FF" />
      </linearGradient>
    </defs>
  </svg>
);

QuestionColored.displayName = 'QuestionColored';
