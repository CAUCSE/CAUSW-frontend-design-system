import * as React from 'react';

import { Primitive, PrimitiveProps } from '../Primitive';
import { avatar, AvatarVariants } from './Avatar.styles';
import { mergeStyles } from '../../utils';
import DEFAULT_AVATAR_SRC from '../../assets/avatar/default.jpeg';

export interface AvatarProps
  extends
    Omit<React.ComponentPropsWithoutRef<'span'>, 'alt'>,
    PrimitiveProps,
    AvatarVariants {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
}

export const Avatar = ({
  size = 'md',
  src,
  alt,
  className,
  fallback,
  ...props
}: AvatarProps) => {
  const [hasError, setHasError] = React.useState(false);
  const { root, image, fallback: fallbackStyle } = avatar({ size });

  React.useEffect(() => {
    setHasError(false);
  }, [src]);

  const isValidSrc =
    typeof src === 'string' && src.trim().length > 0 && !hasError;

  const renderFallback = () => {
    if (fallback == null) return null;

    if (typeof fallback === 'string') {
      return (
        <span className={fallbackStyle()}>
          {fallback.slice(0, 2).toUpperCase()}
        </span>
      );
    }
    return fallback;
  };

  return (
    <Primitive.span className={mergeStyles(root(), className)} {...props}>
      {isValidSrc ? (
        <img
          src={src}
          alt={alt ?? 'user profile'}
          className={image()}
          onError={() => {
            if (!hasError) setHasError(true);
          }}
        />
      ) : (
        (renderFallback() ?? (
          <img
            src={DEFAULT_AVATAR_SRC}
            alt="default avatar"
            className={image()}
          />
        ))
      )}
    </Primitive.span>
  );
};

Avatar.displayName = 'Avatar';
