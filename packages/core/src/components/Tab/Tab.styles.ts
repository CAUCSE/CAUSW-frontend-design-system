import { mergeStyles } from '../../utils';

export type TabVariant = 'underline' | 'chip';

export const tabListStyles = (variant: TabVariant) =>
  mergeStyles(
    'flex items-center flex-nowrap whitespace-nowrap overflow-x-auto',
    '[-webkit-overflow-scrolling:touch]',
    variant === 'underline' ? 'border-b border-gray-200' : 'gap-2',
  );
export const tabItemStyles = ({
  variant,
  active,
}: {
  variant: TabVariant;
  active: boolean;
}) => {
  const base = 'cursor-pointer transition-colors select-none';

  if (variant === 'underline') {
    return mergeStyles(
      base,
      'px-3 py-3 text-center border-b-2 typo-subtitle-16-bold flex-shrink-0',
      active
        ? 'border-gray-700 text-gray-700'
        : 'border-transparent text-gray-300',
    );
  }

  // Chip 타입 스타일
  return mergeStyles(
    base,
    'px-3 py-2 rounded-[0.5rem] typo-body-14-medium flex-shrink-0',
    active ? 'bg-gray-700 text-white' : 'bg-white text-gray-600',
  );
};
