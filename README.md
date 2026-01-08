# projectmiluju.github.io

개발자 포트폴리오 + 테크 블로그 사이트입니다.  
Astro 기반 정적 사이트로, GitHub Pages에 배포됩니다.

## 🚀 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:4321)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages 자동 배포
├── public/
│   ├── images/             # 정적 이미지
│   ├── favicon.svg         # 파비콘
│   └── robots.txt          # 검색엔진 설정
├── src/
│   ├── components/         # 재사용 컴포넌트
│   ├── config/
│   │   └── site.ts         # 사이트 설정 (이름, 링크, SEO 등)
│   ├── content/
│   │   ├── blog/           # 블로그 포스트 (MDX)
│   │   ├── projects/       # 프로젝트 케이스 스터디 (MDX)
│   │   └── config.ts       # 콘텐츠 스키마 정의
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/              # 페이지 라우팅
│   └── styles/
│       └── global.css      # 글로벌 스타일
├── astro.config.mjs        # Astro 설정
├── package.json
└── tsconfig.json
```

## 📝 콘텐츠 작성 가이드

### 블로그 포스트 작성

`src/content/blog/` 디렉토리에 `.mdx` 파일을 생성합니다.

```mdx
---
title: "포스트 제목"
date: 2024-01-01
summary: "포스트 요약 (목록에 표시됨)"
tags: ["Tag1", "Tag2"]
category: "cs"          # cs | book | troubleshooting
series: "시리즈명"       # 선택 사항
cover: "/images/blog/cover.png"  # 선택 사항
draft: false            # true면 목록에서 숨김
---

본문 내용...
```

#### 카테고리
- `cs`: CS 개념 정리
- `book`: 개발 서적 리뷰
- `troubleshooting`: 문제 해결 기록

### 프로젝트 작성

`src/content/projects/` 디렉토리에 `.mdx` 파일을 생성합니다.

```mdx
---
title: "프로젝트명"
period: "2024.01 - 2024.06"
role: "Backend Lead"
stack: ["Java", "Spring Boot", "Kubernetes"]
links:
  github: "https://github.com/..."
  demo: "https://..."
highlights:
  - "주요 성과 1"
  - "주요 성과 2"
metrics:
  - "API 응답시간 70% 개선"
  - "배포 시간 80% 단축"
cover: "/images/projects/cover.png"  # 선택 사항
order: 1                # 목록 정렬 순서
draft: false
---

## 문제 정의
...

## 역할과 범위
...

## 아키텍처
...

## 핵심 구현
...

## 트러블슈팅
...

## 성과
...

## 회고 및 다음 개선
...
```

### 이미지 추가

이미지는 `public/images/` 디렉토리에 저장하고, 마크다운에서 참조합니다:

```markdown
![설명](/images/blog/example.png)
```

## ⚙️ 사이트 설정

`src/config/site.ts`에서 사이트 정보를 수정하세요:

```typescript
export const siteConfig = {
  name: 'projectmiluju',
  title: 'projectmiluju | Backend/Infra 중심 풀스택 엔지니어',
  description: '...',
  url: 'https://projectmiluju.github.io',
  author: {
    name: 'projectmiluju',
    email: 'your-email@example.com',
    github: 'https://github.com/projectmiluju',
  },
  // ...
};
```

## 🌐 배포

### GitHub Pages 자동 배포

1. GitHub 저장소 Settings → Pages로 이동
2. Source를 **"GitHub Actions"**로 선택
3. `main` 브랜치에 push하면 자동 배포됨

**참고**: `public/.nojekyll` 파일이 포함되어 있어 GitHub Pages가 Jekyll 대신 정적 파일로 사이트를 서빙합니다.

### 수동 배포

```bash
npm run build
# dist/ 디렉토리의 내용을 호스팅 서버에 업로드
```

## 🔧 개발

### 스크립트

```bash
npm run dev       # 개발 서버 시작
npm run build     # 프로덕션 빌드
npm run preview   # 빌드 결과물 미리보기
npm run lint      # ESLint 실행
npm run lint:fix  # ESLint 자동 수정
npm run format    # Prettier 포맷팅
```

### 코드 스타일

- ESLint + Prettier 설정 포함
- Astro, TypeScript 지원

## 📚 기술 스택

- **프레임워크**: [Astro](https://astro.build/)
- **콘텐츠**: MDX
- **스타일**: CSS (커스텀 프로퍼티 기반)
- **배포**: GitHub Pages + GitHub Actions
- **SEO**: sitemap, robots.txt, RSS, Open Graph

## 📄 라이선스

MIT License
