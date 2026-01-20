import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ComponentProps } from 'react';

import {
  tabListStyles,
  tabItemStyles,
  type TabVariant,
  type TabColor,
} from './Tab.styles';

const TabRoot = TabsPrimitive.Root;
const TabContent = TabsPrimitive.Content;

type TabStyleContextValue = {
  variant: TabVariant;
  color?: TabColor;
};

const TabStyleContext = React.createContext<TabStyleContextValue | null>(null);

const useTabStyleContext = () => {
  const ctx = React.useContext(TabStyleContext);
  if (!ctx) throw new Error('Tab.* must be used within Tab.Root');
  return ctx;
};

export interface TabRootProps extends ComponentProps<
  typeof TabsPrimitive.Root
> {
  variant: TabVariant;
  color?: TabColor;
}

const Root = ({ variant, color, children, ...props }: TabRootProps) => {
  return (
    <TabStyleContext.Provider value={{ variant, color }}>
      <TabRoot {...props}>{children}</TabRoot>
    </TabStyleContext.Provider>
  );
};
Root.displayName = TabsPrimitive.Root.displayName;

export type TabListProps = ComponentProps<typeof TabsPrimitive.List>;

const List = ({ className, ...props }: TabListProps) => {
  const { variant } = useTabStyleContext();

  return (
    <TabsPrimitive.List
      className={[tabListStyles(variant), className].filter(Boolean).join(' ')}
      {...props}
    />
  );
};
List.displayName = TabsPrimitive.List.displayName;

export interface TabTriggerProps extends ComponentProps<
  typeof TabsPrimitive.Trigger
> {
  /** chip 탭에서 active 색상 옵션 */
  color?: TabColor;
}

const Trigger = ({
  className,
  color: colorProp,
  ...props
}: TabTriggerProps) => {
  const { variant, color: colorCtx } = useTabStyleContext();
  const color = colorProp ?? colorCtx;

  // 기본(비활성) 스타일은 기존 함수 그대로 사용
  const base = tabItemStyles({ variant, active: false, color });

  // active일 때만 덮어씌울 클래스 (Radix data-state 사용)
  const active =
    variant === 'underline'
      ? 'data-[state=active]:border-gray-700 data-[state=active]:text-gray-700 data-[state=active]:hover:text-gray-700 data-[state=active]:border-b-2'
      : color === 'white'
        ? 'data-[state=active]:bg-[#364153] data-[state=active]:text-white'
        : 'data-[state=active]:bg-white data-[state=active]:text-gray-700 data-[state=active]:border data-[state=active]:border-gray-200';

  // underline의 inactive에서 border-transparent가 필요한데 base가 이미 넣어줌
  // chip inactive bg/text도 base가 이미 넣어줌
  return (
    <TabsPrimitive.Trigger
      className={[base, active, className].filter(Boolean).join(' ')}
      {...props}
    />
  );
};
Trigger.displayName = TabsPrimitive.Trigger.displayName;

export const Tab = Object.assign(Root, {
  Root,
  List,
  Trigger,
  Content: TabContent,
  Panel: TabContent, // vapor 스타일 alias
});
