import * as React from 'react';
import { Primitive } from '../Primitive';
import {
  avatarRootStyles,
  avatarImageStyles,
  resolveAvatarPreset,
  type AvatarVariant,
  avatarFallbackStyles,
} from './Avatar.styles';
import { mergeStyles } from '../../utils';
import DEFAULT_AVATAR_SRC from '../../assets/avatar/default.jpeg';

export interface AvatarProps extends Omit<
  React.ComponentPropsWithoutRef<'span'>,
  'alt'
> {
  variant?: AvatarVariant;
  src?: string;
  alt?: string;
  asChild?: boolean;
  fallback?: React.ReactNode;
}

export const Avatar = ({
  variant = 'md',
  src,
  alt,
  asChild,
  className,
  fallback,
  ...props
}: AvatarProps) => {
  const { size, radius } = resolveAvatarPreset(variant);

  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setHasError(false);
  }, [src]);

  const isValidSrc =
    typeof src === 'string' && src.trim().length > 0 && !hasError;

  const renderFallback = () => {
    if (fallback == null) return null;

    if (typeof fallback === 'string') {
      return (
        <span
          className={avatarFallbackStyles()}
          style={{ borderRadius: radius }}
        >
          {fallback.slice(0, 2).toUpperCase()}
        </span>
      );
    }
    return fallback;
  };
  return (
    <Primitive.span
      asChild={asChild}
      className={mergeStyles(avatarRootStyles(), className)}
      style={{ width: size, height: size, borderRadius: radius }}
      {...props}
    >
      {isValidSrc ? (
        <img
          src={src}
          alt={alt ?? 'user profile'}
          className={avatarImageStyles()}
          onError={() => {
            if (!hasError) setHasError(true);
          }}
        />
      ) : (
        (renderFallback() ?? (
          <img
            src={DEFAULT_AVATAR_SRC}
            alt="default avatar"
            className={avatarImageStyles()}
          />
        ))
      )}
    </Primitive.span>
  );
};

Avatar.displayName = 'Avatar';
