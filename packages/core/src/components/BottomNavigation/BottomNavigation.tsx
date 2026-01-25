'use client';

import { ComponentProps, SVGProps } from 'react';
import {
  bottomNavigation,
  BottomNavigationVariants,
} from './BottomNavigation.styles';
import { Primitive, PrimitiveProps } from '../Primitive';

import {
  BottomNavigationContext,
  useBottomNavigationContext,
  BottomNavigationItemContext,
  useBottomNavigationItemContext,
} from './hooks/useBottomNavigationContext';

export interface BottomNavigationRootProps
  extends ComponentProps<'nav'>, PrimitiveProps {
  selected?: string;
  onSelectChange?: (value: string) => void;
}

const BottomNavigationRoot = ({
  children,
  selected,
  onSelectChange,
  ...props
}: BottomNavigationRootProps) => {
  const { root } = bottomNavigation();
  return (
    <BottomNavigationContext.Provider value={{ selected, onSelectChange }}>
      <Primitive.nav className={root()} {...props}>
        {children}
      </Primitive.nav>
    </BottomNavigationContext.Provider>
  );
};

interface BottomNavigationItemProps
  extends
    ComponentProps<'button'>,
    PrimitiveProps,
    Omit<BottomNavigationVariants, 'selected'> {
  value?: string;
  selected?: boolean;
  children: React.ReactNode;
}

const BottomNavigationItem = ({
  selected,
  value,
  children,
  onClick,
  ...props
}: BottomNavigationItemProps) => {
  const rootContext = useBottomNavigationContext();

  const isSelected =
    selected ??
    (rootContext.selected !== undefined && value !== undefined
      ? rootContext.selected === value
      : false);

  const { item } = bottomNavigation({ selected: isSelected, ...props });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    if (
      !e.defaultPrevented &&
      rootContext.onSelectChange &&
      value !== undefined
    ) {
      rootContext.onSelectChange(value);
    }
  };

  return (
    <BottomNavigationItemContext.Provider value={{ selected: isSelected }}>
      <Primitive.button
        type="button"
        className={item()}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Primitive.button>
    </BottomNavigationItemContext.Provider>
  );
};

interface BottomNavigationIconProps
  extends SVGProps<SVGSVGElement>, PrimitiveProps, BottomNavigationVariants {
  children: React.ReactNode;
}

const BottomNavigationIcon = ({
  children,
  selected,
  ...props
}: BottomNavigationIconProps) => {
  const itemContext = useBottomNavigationItemContext();
  const isSelected = selected ?? itemContext.selected;

  const { icon } = bottomNavigation({ selected: isSelected, ...props });

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
  selected,
  ...props
}: BottomNavigationLabelProps) => {
  const itemContext = useBottomNavigationItemContext();
  const isSelected = selected ?? itemContext.selected;

  const { label } = bottomNavigation({ selected: isSelected, ...props });

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
