'use client';

import { ComponentProps, SVGProps } from 'react';
import {
  bottomNavigation,
  BottomNavigationVariants,
} from './BottomNavigation.styles';
import { Primitive, PrimitiveProps } from '../Primitive';

export interface BottomNavigationRootProps
  extends ComponentProps<'nav'>, PrimitiveProps {}

const BottomNavigationRoot = ({
  children,
  ...props
}: BottomNavigationRootProps) => {
  const { root } = bottomNavigation();
  return (
    <Primitive.nav className={root()} {...props}>
      {children}
    </Primitive.nav>
  );
};

interface BottomNavigationItemProps
  extends ComponentProps<'div'>, PrimitiveProps, BottomNavigationVariants {
  children: React.ReactNode;
}

const BottomNavigationItem = ({
  selected = false,
  children,
  ...props
}: BottomNavigationItemProps) => {
  const { item } = bottomNavigation({ selected, ...props });

  return (
    <Primitive.div className={item()} {...props}>
      {children}
    </Primitive.div>
  );
};

interface BottomNavigationIconProps
  extends SVGProps<SVGSVGElement>, PrimitiveProps, BottomNavigationVariants {
  children: React.ReactNode;
}

const BottomNavigationIcon = ({
  children,
  ...props
}: BottomNavigationIconProps) => {
  const { icon } = bottomNavigation({ ...props });

  return (
    <Primitive.svg asChild className={icon()} {...props}>
      {children}
    </Primitive.svg>
  );
};

interface BottomNavigationLabelProps
  extends ComponentProps<'span'>, PrimitiveProps, BottomNavigationVariants {
  children: React.ReactNode;
}

const BottomNavigationLabel = ({
  children,
  ...props
}: BottomNavigationLabelProps) => {
  const { label } = bottomNavigation({ ...props });

  return (
    <Primitive.span className={label()} {...props}>
      {children}
    </Primitive.span>
  );
};

export const BottomNavigation = Object.assign(BottomNavigationRoot, {
  Item: BottomNavigationItem,
  Icon: BottomNavigationIcon,
  Label: BottomNavigationLabel,
});
