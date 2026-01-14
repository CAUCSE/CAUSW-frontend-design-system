import { mergeStyles } from '../../utils';

export type AvatarVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const avatarPreset = {
  xs: { size: 36, radius: 12 },
  sm: { size: 40, radius: 12 },
  md: { size: 44, radius: 12 },
  lg: { size: 60, radius: 16 },
  xl: { size: 80, radius: 24 },
} as const;

export function resolveAvatarPreset(variant: AvatarVariant) {
  return avatarPreset[variant];
}

export function avatarRootStyles() {
  return mergeStyles(
    'inline-flex items-center justify-center overflow-hidden',
    'bg-gray-100 text-gray-600',
  );
}

export function avatarImageStyles() {
  return 'h-full w-full object-cover';
}

export function avatarFallbackStyles() {
  return mergeStyles(
    'flex h-full w-full items-center justify-center',
    'select-none font-semibold',
  );
}
