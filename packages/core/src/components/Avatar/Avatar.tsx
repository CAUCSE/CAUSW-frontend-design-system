import * as React from 'react';

import { Primitive, PrimitiveProps } from '../Primitive';
import { avatar, AvatarVariants } from './Avatar.styles';
import { mergeStyles } from '../../utils';
import defaultAvatar1 from '../../assets/avatar/defaultAvatar1.svg';
import defaultAvatar2 from '../../assets/avatar/defaultAvatar2.svg';
import defaultAvatar3 from '../../assets/avatar/defaultAvatar3.svg';
import defaultAvatar4 from '../../assets/avatar/defaultAvatar4.svg';

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
  size = '44',
  src,
  alt,
  className,
  fallback,
  ...props
}: AvatarProps) => {
  const [hasError, setHasError] = React.useState(false);
  const defaultAvatars = [
    defaultAvatar1,
    defaultAvatar2,
    defaultAvatar3,
    defaultAvatar4,
  ];
  const [randomDefault, setRandomDefault] = React.useState(defaultAvatars[0]);

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * defaultAvatars.length);
    setRandomDefault(defaultAvatars[randomIndex]);
  }, []);

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
          <img src={randomDefault} alt="default avatar" className={image()} />
        ))
      )}
    </Primitive.span>
  );
};

Avatar.displayName = 'Avatar';
