import * as React from 'react';
import { Primitive } from '../Primitive';
import {
  avatarRootStyles,
  avatarImageStyles,
  resolveAvatarPreset,
  type AvatarVariant,
} from './Avatar.styles';
import { mergeStyles } from '../../utils';
import DEFAULT_AVATAR_SRC from '../../assets/avatar/default.jpeg';

export interface AvatarProps extends React.ComponentPropsWithoutRef<'span'> {
  variant?: AvatarVariant;
  src?: string;
  alt?: string;
  asChild?: boolean;
}

export const Avatar = ({
  variant = 'md',
  src,
  asChild,
  className,
  ...props
}: AvatarProps) => {
  const { size, radius } = resolveAvatarPreset(variant);

  const hasSrc = typeof src === 'string' && src.trim().length > 0;

  return (
    <Primitive.span
      asChild={asChild}
      className={mergeStyles(avatarRootStyles(), className)}
      style={{ width: size, height: size, borderRadius: radius }}
      {...props}
    >
      <img
        src={hasSrc ? src : DEFAULT_AVATAR_SRC}
        alt={hasSrc ? 'user profile' : 'default avatar'}
        className={avatarImageStyles()}
      />
    </Primitive.span>
  );
};

Avatar.displayName = 'Avatar';
