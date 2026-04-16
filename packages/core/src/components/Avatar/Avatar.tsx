import * as React from 'react';

import { Primitive, PrimitiveProps } from '../Primitive';
import { avatar, AvatarSizeProps } from './Avatar.styles';
import { convertPxToRem, mergeStyles } from '../../utils';
import restrictedAvatar from '../../assets/avatar/restrictedAvatar.svg';

export interface AvatarProps
  extends
    Omit<React.ComponentPropsWithoutRef<'span'>, 'alt'>,
    PrimitiveProps,
    AvatarSizeProps {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  isRestricted?: boolean;
}

export const Avatar = ({
  size = 44,
  src,
  alt,
  className,
  fallback,
  isRestricted = false,
  style,
  ...props
}: AvatarProps) => {
  const [hasError, setHasError] = React.useState(false);

  const { root, image, fallback: fallbackStyle } = avatar();

  React.useEffect(() => {
    setHasError(false);
  }, [src]);

  const sizeStyle = {
    width: convertPxToRem(size),
    height: convertPxToRem(size),
  };

  const rootRadiusClass =
    size >= 120
      ? 'rounded-2xl'
      : size >= 88
        ? 'rounded-xl'
        : size >= 64
          ? 'rounded-lg'
          : 'rounded-md';

  const isValidSrc =
    !isRestricted &&
    typeof src === 'string' &&
    src.trim().length > 0 &&
    !hasError;

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
    <Primitive.span
      className={mergeStyles(root(), rootRadiusClass, className)}
      style={{ ...sizeStyle, ...style }}
      {...props}
    >
      {isRestricted ? (
        <img
          src={restrictedAvatar}
          alt="blocked user avatar"
          className={image()}
        />
      ) : isValidSrc ? (
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
            src={restrictedAvatar}
            alt="default avatar"
            className={image()}
          />
        ))
      )}
    </Primitive.span>
  );
};

Avatar.displayName = 'Avatar';
