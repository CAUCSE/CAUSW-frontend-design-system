# @causw/tokens

CAUSW Design System의 디자인 토큰 패키지입니다.

## 사용 가능한 Tailwind 클래스

### Colors

| 클래스 | 설명 |
|--------|------|
| `bg-blue-100`, `text-blue-500`, `border-blue-700` | Blue 계열 (#EEF4FF, #4F98FF, #237EFF) |
| `bg-gray-50` ~ `bg-gray-900` | Gray 계열 (9단계) |
| `bg-red-100`, `bg-red-400` | Red 계열 |
| `bg-green-400` | Green 계열 (#3ED06C) | 
| `bg-orange-100` | Orange 계열 (#FFECD5) |
| `bg-skyblue-100` | Skyblue 계열 (#D4F6FF) |
| `bg-purple-100` | Purple 계열 (#EDE9FF) |
| `bg-white-main`, `bg-black-main` | 흰색/검정색 |

```tsx
// 배경색
<div className="bg-blue-500">Primary Background</div>
<div className="bg-gray-100">Light Gray Background</div>

// 텍스트 색상
<p className="text-gray-900">Dark Text</p>
<p className="text-blue-700">Accent Text</p>

// 테두리 색상
<div className="border border-gray-200">Subtle Border</div>
<button className="border-2 border-blue-500">Primary Border</button>
```

### Typography

> **💡 권장사항**: 타이포그래피는 가능하면 토큰을 직접 사용하지 말고 `@causw/components`의 **`<Text>` 컴포넌트**를 활용하세요.

```tsx
import { Text } from '@causw/components';

// 권장: Text 컴포넌트 사용
<Text variant="body" size="sm">일반 본문</Text>
<Text variant="title" size="md" as="h1">제목</Text>
<Text variant="body" size="sm" point>강조 본문</Text>

// 비권장: Tailwind 클래스 직접 사용
<p className="font-sans text-[16px] font-normal">...</p>
```

Text 컴포넌트의 variant 옵션: `caption`, `body2`, `body`, `subtitle`, `title`, `head`, `fixed`

### Border Radius

| 클래스 | 값 | px |
|--------|----|----|
| `rounded-xs` | 0.25rem | 4px |
| `rounded-sm` | 0.5rem | 8px |
| `rounded-md` | 0.75rem | 12px |
| `rounded-lg` | 1rem | 16px |
| `rounded-xl` | 1.25rem | 20px |
| `rounded-2xl` | 1.5rem | 24px |
| `rounded-3xl` | 2rem | 32px |

```tsx
// 카드
<div className="rounded-lg bg-white border border-gray-200">
  Card with 16px radius
</div>

// 버튼
<button className="rounded-md bg-blue-500 text-white">
  Button with 12px radius
</button>

// 아바타/뱃지 (완전 원형)
<div className="rounded-full bg-gray-200">Avatar</div>
```

## 토큰 직접 사용

```typescript
import { colors, typography, borderRadius } from '@causw/tokens';

// Colors
colors.blue[500]     // '#4F98FF'
colors.gray[900]     // '#101828'

// Typography
typography.fontFamily.sans  // 'Pretendard, ...'
typography.fontSize[16]     // '1rem'
typography.fontWeight.bold  // '700'

// Border Radius
borderRadius.md  // '0.75rem'
```

## Exports

| 경로 | 내용 |
|------|------|
| `@causw/tokens` | colors, typography, borderRadius, causwPreset, causwContent |
| `@causw/tokens/config` | causwPreset, causwContent |

## 토큰 구조

<details>
<summary>Colors</summary>

```typescript
const colors = {
  blue: { 100: '#EEF4FF', 200: '#CADDFF', 500: '#4F98FF', 700: '#237EFF' },
  gray: { 50: '#F9FAFB', 100: '#F5F6F8', 200: '#E9ECF2', 300: '#CACED5', 
         400: '#99A1AF', 500: '#6A7282', 600: '#4A5565', 700: '#364153', 
         800: '#1E2939', 900: '#101828' },
  red: { 100: '#FFEFEF', 200: '#FFCACF', 400: '#FD5C5F', 500: '#DF0F12' },
  green: { 400: '#3ED06C' },
  orange: { 100: '#FFECD5' },
  skyblue: { 100: '#D4F6FF' },
  purple: { 100: '#EDE9FF' },
  white: { main: '#FFFFFF' },
  black: { main: '#000000' },
};
```
</details>

<details>
<summary>Typography</summary>

```typescript
const typography = {
  fontFamily: {
    sans: 'Pretendard, "Pretendard Variable", -apple-system, ..., sans-serif',
    mono: 'Pretendard, "Pretendard Variable", ui-monospace, ..., monospace',
    serif: 'Pretendard, "Pretendard Variable", ui-serif, ..., serif',
  },
  fontSize: { 12: '0.75rem', 14: '0.875rem', 15: '0.9375rem', 16: '1rem', 
              18: '1.125rem', 20: '1.25rem', 22: '1.375rem', 24: '1.5rem', 
              30: '1.875rem', 32: '2rem', 48: '3rem' },
  fontWeight: { regular: '400', medium: '500', semibold: '600', bold: '700' },
  lineHeight: { tight: '1.5', normal: '1.6' },
};
```
</details>

<details>
<summary>Border Radius</summary>

```typescript
const borderRadius = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.25rem',   // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem',   // 32px
};
```
</details>
