# CAUSW Design System

CCSSAA의 지원을 받는 중앙대 소프트웨어학부 재학생 및 동문 커뮤니티 서비스를 위한 디자인 시스템입니다.

## 프로젝트 구조

```
design-system/
├── .github/workflows/    # CI/CD 워크플로우
├── .storybook/          # Storybook 설정
├── packages/
│   ├── tokens/          # 디자인 토큰 (색상, 간격, 타이포그래피)
│   ├── core/            # 코어 기능 (로깅, 유틸리티)
│   ├── components/      # UI 컴포넌트
│   ├── icons/           # 아이콘 컴포넌트
│   └── cds/             # 메인 패키지 (모든 모듈 포함)
├── apps/
│   └── docs/            # 문서 사이트 (예정)
└── turbo.json           # Turborepo 설정
```

## 시작하기

### 필수 요구사항

- Node.js >= 20.0.0
- pnpm >= 9.0.0

### 설치

```bash
pnpm install
```

### 개발

```bash
# 모든 패키지 개발 모드로 실행
pnpm dev

# Storybook 실행
pnpm storybook
```

### 빌드

```bash
pnpm build
```

### 테스트

```bash
pnpm test
```

### 린트

```bash
pnpm lint
```

## 패키지

### @causw/design-system (CDS)

모든 모듈을 포함하는 메인 패키지

```typescript
import { Button, colors, spacing } from '@causw/design-system';
```

### @causw/tokens

디자인 토큰 (색상, 간격, 타이포그래피) 및 Tailwind CSS Preset

```typescript
import { colors, spacing, typography } from '@causw/tokens';
```

#### Tailwind CSS Preset 사용하기

CAUSW 디자인 시스템의 색상, 간격, 타이포그래피를 Tailwind CSS에서 사용하려면 다음과 같이 설정하세요.

**1. 패키지 설치**

```bash
pnpm add @causw/tokens tailwindcss
```

**2-A. Tailwind CSS v4 (CSS-first 설정)**

```css
/* src/global.css */
@import 'tailwindcss';
@config '@causw/tokens/tailwind.config';
```

**2-B. Tailwind CSS v3 또는 JS 설정 방식 (권장)**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import caswConfig from '@causw/tokens/tailwind.config';

export default {
  ...caswConfig,
  content: [
    ...caswConfig.content,   // @causw/components, @causw/tokens 클래스 자동 포함
  ],
} satisfies Config;
```

> 💡 `caswConfig.content`에 `@causw/components`가 이미 포함되어 있습니다. 사용자 소스 경로만 추가하면 됩니다.

**3. 사용 가능한 유틸리티 클래스**

| 카테고리 | 예시 |
|---------|------|
| 색상 | `bg-primary-500`, `text-primary-700`, `border-error` |
| 상태 색상 | `bg-success`, `text-warning`, `border-info` |
| 간격 | `p-4`, `m-8`, `gap-6` |
| 폰트 | `font-sans`, `font-mono` |
| 폰트 크기 | `text-sm`, `text-lg`, `text-2xl` |
| 폰트 굵기 | `font-normal`, `font-medium`, `font-bold` |

### @causw/core

코어 기능 (로깅, 유틸리티)

```typescript
import { logger } from '@causw/core';
```

### @causw/components

UI 컴포넌트

```bash
pnpm add @causw/components @causw/tokens
```

```typescript
import { Button } from '@causw/components';
```

> **참고:** 컴포넌트가 올바르게 스타일링되려면 `@causw/tokens`의 Tailwind Preset 설정이 필요합니다. 위의 [@causw/tokens](#causwtoken) 섹션을 참고하세요.

### @causw/icons

아이콘 컴포넌트 (예정)

## 버전 관리 및 배포

이 프로젝트는 [Changesets](https://github.com/changesets/changesets)를 사용하여 버전을 관리합니다.

### 변경사항 추가

코드를 수정한 후:

```bash
pnpm changeset
```

1. 변경된 패키지 선택
2. 변경 유형 선택 (major/minor/patch)
3. 변경사항 설명 작성

### 버전 업데이트

```bash
pnpm version-packages
```

- package.json 버전 자동 업데이트
- CHANGELOG.md 자동 생성

### 배포 (로컬)

```bash
pnpm release
```

### 자동 배포 (GitHub Actions)

main 브랜치에 push하면:
- Changesets가 자동으로 버전 업데이트 PR 생성
- PR 병합 시 자동으로 npm에 배포 (Trusted Publishing 사용)

**배포 설정:** [DEPLOYMENT.md](./DEPLOYMENT.md) 참고

## 기여하기

이 프로젝트는 CCSSAA의 지원을 받는 중앙대 소프트웨어학부 재학생 및 동문 커뮤니티 서비스를 위한 프로젝트입니다.

기여 방법 및 버전 관리 프로세스는 [CONTRIBUTING.md](./CONTRIBUTING.md)를 참고해주세요.

## 라이선스

MIT
