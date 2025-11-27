# 기여 가이드

CAUSW Design System에 기여해주셔서 감사합니다!

## 목차

1. [개발 환경 설정](#개발-환경-설정)
2. [개발 워크플로우](#개발-워크플로우)
3. [버전 관리 및 릴리즈](#버전-관리-및-릴리즈)
4. [실전 예시](#실전-예시)

## 개발 환경 설정

### 필수 요구사항

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### 설치

```bash
# 저장소 클론
git clone https://github.com/your-org/causw-design-system.git
cd causw-design-system

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# Storybook 실행
pnpm storybook
```

## 개발 워크플로우

### 1. 브랜치 생성

```bash
# feature 브랜치 생성
git checkout -b feature/button-variant

# bugfix 브랜치 생성
git checkout -b bugfix/button-spacing
```

### 2. 코드 작성

```bash
# 개발 모드로 실행 (hot reload)
pnpm dev

# 또는 Storybook에서 확인
pnpm storybook
```

### 3. 테스트 및 빌드 확인

```bash
# 린트 검사
pnpm lint

# 테스트 실행
pnpm test

# 빌드 확인
pnpm build
```

### 4. 커밋

```bash
git add .
git commit -m "feat: add new button variant"
```

## 버전 관리 및 릴리즈

이 프로젝트는 [Changesets](https://github.com/changesets/changesets)를 사용하여 버전을 관리합니다.

### Semantic Versioning 규칙

- **Patch** (0.0.x): 버그 수정, 내부 리팩토링
- **Minor** (0.x.0): 새로운 기능 추가 (하위 호환)
- **Major** (x.0.0): Breaking changes (하위 호환 불가)

### 변경사항 기록하기

코드를 수정한 후 **반드시** changeset을 추가해야 합니다:

```bash
pnpm changeset
```

대화형 프롬프트가 나타납니다:

```
🦋  Which packages would you like to include?
◯ @causw/tokens
◉ @causw/components  # 스페이스바로 선택
◯ @causw/icons
◯ @causw/core
◯ @causw/design-system

🦋  What kind of change is this for @causw/components?
◯ major
◉ minor  # 새 기능 추가
◯ patch

🦋  Please enter a summary for this change:
› Add outlined variant to Button component
```

생성된 changeset 파일을 **반드시 커밋**해야 합니다:

```bash
git add .changeset/*.md
git commit -m "chore: add changeset for button variant"
git push origin feature/button-variant
```

### Pull Request 생성

1. GitHub에서 Pull Request 생성
2. 리뷰 후 main 브랜치에 병합

### 릴리즈 프로세스

#### 자동 릴리즈 (GitHub Actions)

main 브랜치에 병합되면:

1. **Changesets Bot**이 자동으로 "Version Packages" PR 생성
2. 해당 PR에는:
   - 업데이트된 package.json 버전
   - 자동 생성된 CHANGELOG.md
3. PR을 병합하면 **자동으로 npm에 배포**

#### 수동 릴리즈 (로컬)

```bash
# 1. 버전 업데이트
pnpm version-packages

# 2. 변경사항 확인 및 커밋
git add .
git commit -m "chore: version packages"
git push

# 3. npm 배포
pnpm release
```

## 실전 예시

### 예시 1: 새로운 컴포넌트 추가

```bash
# 1. 브랜치 생성
git checkout -b feature/add-input-component

# 2. Input 컴포넌트 작성
# packages/components/src/Input/Input.tsx
# packages/components/src/Input/Input.stories.tsx
# packages/components/src/Input/Input.test.tsx

# 3. export 추가
# packages/components/src/index.ts
echo "export * from './Input';" >> packages/components/src/index.ts

# 4. 테스트 및 빌드 확인
pnpm test
pnpm build

# 5. Changeset 추가
pnpm changeset
# → @causw/components 선택
# → minor 선택 (새 기능)
# → "Add Input component" 입력

# 6. 커밋 및 푸시
git add .
git commit -m "feat: add Input component"
git push origin feature/add-input-component

# 7. PR 생성 및 병합 대기
```

### 예시 2: 버그 수정

```bash
# 1. 브랜치 생성
git checkout -b bugfix/button-padding

# 2. 버그 수정
# packages/components/src/Button/Button.styles.ts

# 3. Changeset 추가
pnpm changeset
# → @causw/components 선택
# → patch 선택 (버그 수정)
# → "Fix Button padding issue" 입력

# 4. 커밋 및 푸시
git add .
git commit -m "fix: correct Button padding"
git push origin bugfix/button-padding
```

### 예시 3: 디자인 토큰 변경

```bash
# 토큰 변경은 여러 패키지에 영향을 줄 수 있음

# 1. 토큰 수정
# packages/tokens/src/colors.ts

# 2. Changeset 추가
pnpm changeset
# → @causw/tokens 선택
# → @causw/components 선택 (tokens를 의존)
# → @causw/design-system 선택 (모든 것을 포함)
# → minor 선택
# → "Update primary color palette" 입력

# Changesets가 자동으로 의존성 체인 처리:
# tokens (0.0.0 → 0.1.0)
# ↓
# components (0.0.0 → 0.0.1) - patch 자동 업데이트
# ↓
# design-system (0.0.0 → 0.0.1) - patch 자동 업데이트
```

### 예시 4: Breaking Change

```bash
# API를 변경하는 경우 (major 버전 업데이트)

# 1. Button props 변경
# Before: <Button type="primary" />
# After: <Button variant="primary" />

# 2. Changeset 추가
pnpm changeset
# → @causw/components 선택
# → major 선택 ⚠️
# → "BREAKING: Change Button 'type' prop to 'variant'" 입력

# 3. 마이그레이션 가이드 작성
# CHANGELOG에 자동 추가되거나 별도 문서 작성
```

## Changeset 파일 구조

생성된 changeset 파일 예시 (`.changeset/funny-pandas-jump.md`):

```md
---
"@causw/components": minor
---

Add outlined variant to Button component
```

## 주의사항

### ✅ 해야 할 것

- 코드 변경 시 **항상** changeset 추가
- 의미 있는 변경사항 설명 작성
- Semantic Versioning 규칙 준수
- 테스트 및 빌드 확인 후 PR 생성

### ❌ 하지 말아야 할 것

- Changeset 없이 PR 생성
- 여러 기능을 한 PR에 포함 (하나의 PR = 하나의 기능)
- package.json 버전 수동 수정 (Changesets가 자동 처리)
- CHANGELOG.md 수동 수정 (Changesets가 자동 생성)

## 도움말

### Changeset 명령어

```bash
# Changeset 추가
pnpm changeset

# Changeset 상태 확인
pnpm changeset status

# 버전 업데이트 (릴리즈 전)
pnpm version-packages

# npm 배포
pnpm release
```

### 문제 해결

**Q: Changeset을 잘못 추가했어요**
```bash
# .changeset/ 폴더에서 해당 파일 삭제 후 다시 생성
rm .changeset/funny-pandas-jump.md
pnpm changeset
```

**Q: 여러 패키지를 동시에 업데이트하려면?**
```bash
pnpm changeset
# 스페이스바로 여러 패키지 선택 가능
```

**Q: Changeset을 건너뛰고 싶어요**
```bash
# 문서나 테스트만 수정한 경우, changeset 불필요
# PR 제목에 [skip ci] 추가 가능
```

## 참고 자료

- [Changesets 공식 문서](https://github.com/changesets/changesets)
- [Semantic Versioning](https://semver.org/lang/ko/)
- [Conventional Commits](https://www.conventionalcommits.org/)
