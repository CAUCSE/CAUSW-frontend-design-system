# CAUSW Design System

중앙대학교 컴퓨터공학부 학생회를 위한 디자인 시스템입니다.

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

- Node.js >= 18.0.0
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

디자인 토큰 (색상, 간격, 타이포그래피)

```typescript
import { colors, spacing, typography } from '@causw/tokens';
```

### @causw/core

코어 기능 (로깅, 유틸리티)

```typescript
import { logger } from '@causw/core';
```

### @causw/components

UI 컴포넌트

```typescript
import { Button } from '@causw/components';
```

### @causw/icons

아이콘 컴포넌트 (예정)

## 기여하기

이 프로젝트는 중앙대학교 컴퓨터공학부 학생회를 위한 프로젝트입니다.

## 라이선스

MIT
