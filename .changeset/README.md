# Changesets

안녕하세요! 이 폴더는 [changesets](https://github.com/changesets/changesets)를 사용하여 패키지 버전 관리를 위해 생성되었습니다.

## Changesets 사용법

### 1. 변경사항 추가

코드를 변경한 후:

```bash
pnpm changeset
```

- 어떤 패키지가 변경되었는지 선택
- 변경 유형 선택 (major/minor/patch)
- 변경사항 설명 작성

### 2. 버전 업데이트

```bash
pnpm version-packages
```

- package.json의 버전이 자동으로 업데이트됩니다
- CHANGELOG.md가 자동으로 생성됩니다

### 3. 배포

```bash
pnpm release
```

- 빌드 후 npm에 자동으로 배포됩니다

## 버전 규칙 (Semantic Versioning)

- **patch**: 버그 수정 (0.0.x)
- **minor**: 새로운 기능 추가 (0.x.0)
- **major**: Breaking changes (x.0.0)
