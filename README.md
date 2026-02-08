# CAUSW Design System

CCSSAA의 지원을 받는 중앙대 소프트웨어학부 재학생 및 동문 커뮤니티 서비스를 위한 디자인 시스템 모노레포입니다.

## 프로젝트 구조

```text
causw-design-system/
├── packages/
│   ├── cds/       # 통합 배포 패키지 (@causw/design-system)
│   ├── core/      # 컴포넌트 + 유틸리티 (@causw/core)
│   ├── icons/     # 아이콘 패키지 (@causw/icons)
│   └── tokens/    # 디자인 토큰 + Tailwind 설정 (@causw/tokens)
├── .storybook/    # Storybook 설정
├── turbo.json     # Turborepo 파이프라인
└── pnpm-workspace.yaml
```

## 요구사항

- Node.js >= 20
- pnpm >= 9

## 시작하기

```bash
pnpm install
```

## 개발 명령어

```bash
# 전체 패키지 개발 모드
pnpm dev

# 전체 빌드
pnpm build

# 린트
pnpm lint

# 테스트
pnpm test

# Storybook
pnpm storybook
pnpm build-storybook
```

## 패키지

### 1) `@causw/design-system` (통합 패키지)

`core`, `tokens`, `icons`를 한 번에 사용할 때 권장됩니다.

```ts
import { Button, colors, CalendarIcon } from '@causw/design-system';
```

### 2) `@causw/core`

CAUSW UI 컴포넌트와 공용 유틸리티를 제공합니다.

```ts
import { Button, Modal, Field, mergeStyles } from '@causw/core';
import '@causw/core/styles';
```

### 3) `@causw/tokens`

색상/타이포그래피/라운드 값과 Tailwind 설정 유틸을 제공합니다.

```ts
import { colors, typography, borderRadius } from '@causw/tokens';
```

Tailwind와 함께 사용:

```css
@import 'tailwindcss';
@config '@causw/tokens/config';
```

또는 JS/TS 설정:

```ts
import type { Config } from 'tailwindcss';
import { causwContent, causwPreset } from '@causw/tokens/config';

export default {
  content: [...causwContent, './src/**/*.{ts,tsx}'],
  presets: [causwPreset],
} satisfies Config;
```

### 4) `@causw/icons`

Mono/Colored 아이콘을 제공합니다.

```ts
import { CalendarIcon, BellColored } from '@causw/icons';
```

## 배포/버전 관리

이 저장소는 Changesets 기반으로 버전을 관리합니다.

```bash
# 변경사항 작성
pnpm changeset

# 버전 반영
pnpm version-packages
