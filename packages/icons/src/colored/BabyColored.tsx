import type { ColoredIconProps } from '../types';
import { DEFAULT_SIZE } from '../types';

export const BabyColored = ({
  size = DEFAULT_SIZE,
  title,
  ...props
}: ColoredIconProps) => (
  <svg
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
    <g clipPath="url(#clip0_6475_36697)">
<path d="M3.65895 16.5004C5.67974 16.5004 7.3179 15.059 7.3179 13.2809C7.3179 11.5028 5.67974 10.0614 3.65895 10.0614C1.63817 10.0614 0 11.5028 0 13.2809C0 15.059 1.63817 16.5004 3.65895 16.5004Z" fill="url(#paint0_linear_6475_36697)"/>
<path d="M20.341 16.5004C22.3617 16.5004 23.9999 15.059 23.9999 13.2809C23.9999 11.5028 22.3617 10.0614 20.341 10.0614C18.3202 10.0614 16.682 11.5028 16.682 13.2809C16.682 15.059 18.3202 16.5004 20.341 16.5004Z" fill="url(#paint1_linear_6475_36697)"/>
<path d="M12 22.9838C17.9537 22.9838 22.7802 18.2846 22.7802 12.4879C22.7802 6.69113 17.9537 1.99194 12 1.99194C6.04629 1.99194 1.21985 6.69113 1.21985 12.4879C1.21985 18.2846 6.04629 22.9838 12 22.9838Z" fill="url(#paint2_linear_6475_36697)"/>
<path d="M9.12561 14.3606C9.84853 14.3606 10.4346 13.7008 10.4346 12.8868C10.4346 12.0728 9.84853 11.413 9.12561 11.413C8.40269 11.413 7.81665 12.0728 7.81665 12.8868C7.81665 13.7008 8.40269 14.3606 9.12561 14.3606Z" fill="black"/>
<path d="M14.6459 14.3606C15.3688 14.3606 15.9548 13.7008 15.9548 12.8868C15.9548 12.0728 15.3688 11.413 14.6459 11.413C13.923 11.413 13.3369 12.0728 13.3369 12.8868C13.3369 13.7008 13.923 14.3606 14.6459 14.3606Z" fill="black"/>
<path d="M13.6277 15.502C13.9217 15.502 14.1305 15.7666 14.0527 16.0331C13.8045 16.8787 12.9791 17.4992 11.9999 17.4992C11.0207 17.4992 10.1945 16.8778 9.94719 16.0331C9.86933 15.7666 10.0782 15.502 10.3722 15.502H13.6277Z" fill="#FD5C5F"/>
<path d="M12.2769 4.986C12.3036 5.48673 11.9551 5.85064 11.6258 5.66869C10.8587 5.2446 9.84953 4.42222 9.85811 3.03177C9.87172 0.790996 11.8225 0.954326 12.2849 1.07826C12.9335 1.25233 13.6875 1.88201 14.0269 2.18933C14.094 2.25022 14.0783 2.39421 14.0012 2.42143C13.4837 2.60195 12.1831 3.23235 12.2774 4.98672L12.2769 4.986Z" fill="#B58059"/>
</g>
<defs>
<linearGradient id="paint0_linear_6475_36697" x1="3.65895" y1="10.0614" x2="3.65895" y2="16.5004" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFEADB"/>
<stop offset="1" stopColor="#FFB988"/>
</linearGradient>
<linearGradient id="paint1_linear_6475_36697" x1="20.341" y1="10.0614" x2="20.341" y2="16.5004" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFEADB"/>
<stop offset="1" stopColor="#FFB988"/>
</linearGradient>
<linearGradient id="paint2_linear_6475_36697" x1="12" y1="1.99194" x2="12" y2="22.9838" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFEADB"/>
<stop offset="1" stopColor="#FFB988"/>
</linearGradient>
<clipPath id="clip0_6475_36697">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
  </svg>
);

BabyColored.displayName = 'BabyColored';
