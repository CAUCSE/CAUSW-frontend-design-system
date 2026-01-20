import { mergeStyles } from '../../utils';

export type TabVariant = 'underline' | 'chip';
export type TabColor = 'white' | 'gray-700';

export const tabListStyles = (variant: TabVariant) =>
  mergeStyles(
    'inline-flex items-center',
    variant === 'underline' ? 'w-full border-b border-gray-200' : 'gap-2',
  );

export const tabItemStyles = ({
  variant,
  active,
  color = 'white',
}: {
  variant: TabVariant;
  active: boolean;
  color?: TabColor;
}) => {
  const base = 'cursor-pointer transition-colors select-none';

  if (variant === 'underline') {
    return mergeStyles(
      base,
      'flex-1 py-3 text-center border-b-2 font-medium',
      active
        ? 'border-gray-700 text-gray-700'
        : 'border-transparent text-gray-400 hover:text-gray-600',
    );
  }

  // Chip 타입 스타일
  return mergeStyles(
    base,
    'px-4 py-2 rounded-[12px] font-medium',
    active
      ? color === 'white'
        ? 'bg-[#364153] text-white'
        : 'bg-white text-gray-700 border border-gray-200'
      : 'bg-[#F5F6F8] text-gray-500 hover:bg-gray-200',
  );
};
