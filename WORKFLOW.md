# 개발 워크플로우 빠른 참조

## 🚀 빠른 시작

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# Storybook 실행
pnpm storybook
```

## 📝 일반적인 작업 흐름

### 새 기능 추가

```bash
# 1. 브랜치 생성
git checkout -b feature/new-feature

# 2. 코드 작성 및 테스트
pnpm dev
pnpm test

# 3. Changeset 추가
pnpm changeset
# → 변경된 패키지 선택
# → minor 선택 (새 기능)
# → 설명 작성

# 4. 커밋 및 푸시
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# 5. PR 생성
```

### 버그 수정

```bash
# 1. 브랜치 생성
git checkout -b bugfix/fix-issue

# 2. 버그 수정 및 테스트
pnpm test

# 3. Changeset 추가
pnpm changeset
# → 변경된 패키지 선택
# → patch 선택 (버그 수정)
# → 설명 작성

# 4. 커밋 및 푸시
git add .
git commit -m "fix: resolve issue"
git push origin bugfix/fix-issue
```

## 🏷️ 버전 관리 치트시트

### Changeset 추가

```bash
pnpm changeset
```

| 변경 유형 | 선택 | 예시 |
|---------|------|------|
| 버그 수정 | `patch` | 0.0.0 → 0.0.1 |
| 새 기능 | `minor` | 0.0.0 → 0.1.0 |
| Breaking Change | `major` | 0.0.0 → 1.0.0 |

### 기타 명령어

```bash
# Changeset 상태 확인
pnpm changeset status

# 버전 업데이트 (로컬)
pnpm version-packages

# 배포 (로컬)
pnpm release
```

## 📦 패키지별 작업 가이드

### @causw/tokens (디자인 토큰)

```bash
# 파일 위치
packages/tokens/src/
├── colors.ts       # 색상 팔레트
├── spacing.ts      # 간격 시스템
├── typography.ts   # 타이포그래피
└── index.ts

# 변경 시 영향
tokens 변경 → components, design-system 자동 업데이트
```

### @causw/components (UI 컴포넌트)

```bash
# 새 컴포넌트 추가
packages/components/src/NewComponent/
├── NewComponent.tsx          # 컴포넌트
├── NewComponent.styles.ts    # 스타일
├── NewComponent.test.tsx     # 테스트
├── NewComponent.stories.tsx  # Storybook
└── index.ts

# export 추가
echo "export * from './NewComponent';" >> packages/components/src/index.ts
```

### @causw/core (코어 기능)

```bash
# 유틸리티 함수 추가
packages/core/src/
├── logger.ts      # 로깅
├── utils.ts       # 유틸리티
└── index.ts
```

### @causw/design-system (메인 패키지)

```bash
# 자동으로 모든 패키지 re-export
# 수동 수정 불필요
```

## 🔄 릴리즈 프로세스

### 자동 릴리즈 (권장)

1. **개발 & Changeset 추가**
   ```bash
   pnpm changeset
   git commit -am "chore: add changeset"
   ```

2. **PR 생성 및 병합**
   - main 브랜치로 PR 생성
   - 리뷰 후 병합

3. **자동 Version PR 생성**
   - Changesets Bot이 자동으로 "Version Packages" PR 생성
   - 버전 및 CHANGELOG 확인

4. **Version PR 병합**
   - PR 병합 시 자동으로 npm에 배포

### 수동 릴리즈

```bash
# 1. 모든 변경사항 확인
pnpm changeset status

# 2. 버전 업데이트
pnpm version-packages

# 3. 커밋 및 푸시
git add .
git commit -m "chore: version packages"
git push

# 4. 배포
pnpm release
```

## ⚠️ 주의사항

### 절대 하지 말 것

- ❌ package.json 버전 수동 수정
- ❌ CHANGELOG.md 수동 작성
- ❌ 기능/버그 수정 시 Changeset 없이 코드 변경
- ❌ node_modules 커밋

### 반드시 할 것

- ✅ 코드 변경 시 Changeset 추가
- ✅ 테스트 통과 확인
- ✅ 빌드 성공 확인
- ✅ 의미 있는 커밋 메시지 작성

## 🆘 문제 해결

### "Failed to build" 에러

```bash
# 캐시 삭제 후 재빌드
pnpm clean  # turbo clean 스크립트 필요시 추가
rm -rf node_modules .turbo
pnpm install
pnpm build
```

### Changeset 실수로 추가

```bash
# 해당 파일 삭제 후 재생성
rm .changeset/[파일명].md
pnpm changeset
```

### Changeset이 필요 없는 경우

```bash
# 문서만 수정
git commit -m "docs: update README"

# 테스트만 수정
git commit -m "test: add Button tests"

# 설정 파일만 수정
git commit -m "chore: update tsconfig"

# 이런 경우 changeset 없이 바로 push 가능!
```

### 의존성 버전 불일치

```bash
# pnpm 캐시 삭제
pnpm store prune
pnpm install
```

## 📚 추가 문서

- [CONTRIBUTING.md](./CONTRIBUTING.md) - 상세 기여 가이드
- [README.md](./README.md) - 프로젝트 개요
- [.changeset/README.md](./.changeset/README.md) - Changesets 가이드
