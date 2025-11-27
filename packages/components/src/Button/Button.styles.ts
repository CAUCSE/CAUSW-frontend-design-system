import { colors, spacing, typography } from '@causw/tokens';

interface ButtonStylesProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  fullWidth: boolean;
}

export const buttonStyles = ({ variant, size, fullWidth }: ButtonStylesProps): string => {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-md
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `.replace(/\s+/g, ' ').trim();

  const variantStyles = {
    primary: `bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500`,
    secondary: `bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500`,
    outline: `border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500`,
  };

  const sizeStyles = {
    sm: `px-3 py-1.5 text-sm`,
    md: `px-4 py-2 text-base`,
    lg: `px-6 py-3 text-lg`,
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle}`.trim();
};
