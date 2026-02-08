# @causw/core

CAUSW Design System의 코어 컴포넌트 패키지입니다.

## 디렉토리 구조

`src` 기준 기본 구조:

- `components/<ComponentName>/<ComponentName>.tsx`
- `components/<ComponentName>/<ComponentName>.styles.ts`
- `components/<ComponentName>/<ComponentName>.stories.tsx`
- `components/<ComponentName>/index.ts`
- `components/index.ts` (컴포넌트 배럴 export)
- `utils/*` (컴포넌트 공용 유틸)
- `hooks/*` (컴포넌트 공용 훅)

## 코드 작성 컨벤션

### 1) 컴포넌트 파일 분리

- 로직/마크업: `*.tsx`
- 클래스 규칙: `*.styles.ts` (`tailwind-variants`의 `tv`)
- 문서/샘플: `*.stories.tsx`
- 외부 공개: `index.ts`

### 2) 스타일 작성 방식

- `tailwind-variants` 기반으로 슬롯/variants 분리
- tv 객체명의 네이밍은 컴포넌트명과 동일한 소문자로 통일 (ex) button, input, select 등)
- 공통 클래스 병합은 `mergeStyles` 사용
- 숫자 기반 사이즈 값이 필요한 경우 `convertPxToRem` 사용

예시:

```ts
import { convertPxToRem } from '../../utils';
```

### 3) Props 설계 원칙

- 기본 HTML props를 최대한 수용 (`React.ComponentProps<'button'>` 등)
- 공용 variant 타입은 `VariantProps<typeof stylesFn>`로 추론
- 제어/비제어 둘 다 필요한 컴포넌트는 둘 다 지원
- Field 내부 사용 컴포넌트는 `useFieldContext`를 통한 `id/disabled/error` 연동 우선

### 4) 접근성(A11y)

- 인터랙션 요소는 적절한 role/aria 속성 명시
- orientation 등 상태는 `aria-*`로 반영
- 키보드 포커스 동작을 깨지 않도록 기본 HTML 동작을 우선

### 5) Export 규칙

- 각 컴포넌트 폴더 `index.ts`에서 컴포넌트/타입 export
- `src/components/index.ts`에서 재-export
- 패키지 최상위는 `src/index.ts`를 통해 `components`, `utils`를 노출

### 6) Storybook 규칙

- 최소 `Default` 스토리 제공
- 주요 variant/상태(`error`, `disabled`, `controlled`) 스토리 추가
- `argTypes`에 실제 제어 가능한 props 노출

### 7) 네이밍/포맷

- 파일/폴더명: PascalCase 컴포넌트명 기반
- `displayName` 명시
- 타입 이름은 `ComponentProps`, `ComponentVariants` 형태 유지

## Polymorphic 패턴 (`as`, `asChild`)

`@causw/core`는 두 가지 polymorphic 패턴을 사용합니다.

### 1) `as` 패턴

- 컴포넌트가 실제 렌더 태그를 바꿔야 할 때 사용
- `PolymorphicProps`를 사용해 element별 props 타입을 유지

기본 형태:

```tsx
import React, { type ElementType } from 'react';
import type { PolymorphicProps } from '../../utils/polymorphic';

type MyComponentProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  {
    // custom props
  }
>;

export const MyComponent = <E extends ElementType = 'div'>({
  as,
  ...props
}: MyComponentProps<E>) => {
  const Component = as || 'div';
  return <Component {...props} />;
};
```

### 2) `asChild` 패턴

- 부모 컴포넌트의 동작/스타일을 자식 요소에 위임할 때 사용
- Radix `Slot` 기반 `Primitive` 컴포넌트 패턴을 우선 사용
- 버튼, 트리거, 링크 래핑 같이 DOM 중첩을 줄여야 하는 경우에 적합

권장 기준:

- 태그 교체 목적이면 `as`
- 자식 요소에 props/스타일 merge가 목적이면 `asChild`

주의사항:

- `asChild` 사용 시 자식은 반드시 단일 element여야 함
- 이벤트 핸들러/`className` 충돌 가능성을 고려해 `mergeStyles`로 병합
- 접근성 속성(`role`, `aria-*`)은 상위 컴포넌트 책임 범위를 명확히 유지

## 체크리스트 (컴포넌트 추가 시)

1. `*.tsx`, `*.styles.ts`, `*.stories.tsx`, `index.ts` 생성
2. `src/components/index.ts` export 추가
3. `pnpm build` 통과 확인
4. Storybook에서 기본/상태 스토리 렌더 확인
