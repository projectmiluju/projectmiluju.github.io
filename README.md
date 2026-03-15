# projectmiluju.github.io

Astro 기반 포트폴리오 + 기술 블로그입니다.  
현재 [GitHub Pages](https://projectmiluju.github.io)로 배포되며, 터미널 UI를 중심으로 프로젝트와 글을 탐색하는 구조입니다.

## License Note

이 저장소는 사이트 코드와 블로그/프로젝트 콘텐츠가 함께 포함된 운영 저장소입니다.  
그래서 저장소 전체에 `MIT` 라이선스를 적용하지 않았습니다.

사이트 구현 코드만 별도로 공개하려면 새 저장소를 만들고 그 저장소에 `MIT`를 적용하는 방식을 권장합니다.  
분리 기준은 `docs/source-code-repo-licensing.md` 에 정리되어 있습니다.

## Stack

- Astro 4
- TypeScript
- MDX
- Custom CSS
- GitHub Actions + GitHub Pages

## Current Features

- 홈: 터미널 스타일 히어로, 강점 소개, 프로젝트/블로그 최신 항목 노출
- 프로젝트 목록: 스택 태그 필터 지원
- 프로젝트 상세: MDX 기반 상세 페이지, TOC, 외부 링크, YouTube 임베드 지원
- 블로그 목록: 카테고리, 시리즈, 태그, 검색 필터 지원
- 블로그 상세: MDX 렌더링, TOC, 이전/다음 글, 관련 글 추천
- 소개 페이지: 경력, 학력, 기술 스택, 가치관 정리
- RSS 피드 제공 (`/rss.xml`)

## Quick Start

```bash
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:4321` 에서 실행됩니다.

프로덕션 빌드와 미리보기:

```bash
npm run build
npm run preview
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run lint:fix
npm run format
```

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── .nojekyll
│   ├── favicon.svg
│   ├── images/
│   ├── og-default.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── config/
│   │   └── site.ts
│   ├── content/
│   │   ├── blog/
│   │   ├── projects/
│   │   └── config.ts
│   ├── layouts/
│   ├── pages/
│   │   ├── about.astro
│   │   ├── blog/
│   │   ├── projects/
│   │   ├── index.astro
│   │   └── rss.xml.ts
│   └── styles/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content Model

블로그 글은 `src/content/blog/` 아래의 `.mdx` 파일로 관리합니다.

```mdx
---
title: "포스트 제목"
date: 2026-03-15
summary: "목록에 보여줄 요약"
tags: ["Astro", "MDX"]
category: "cs"
series: "React"
cover: "/images/blog/example.png"
draft: false
---
```

`category` 는 현재 `cs`, `book`, `til` 세 값을 사용합니다.

프로젝트 상세는 `src/content/projects/` 아래의 `.mdx` 파일로 관리합니다.

```mdx
---
title: "프로젝트명"
period: "2025.01 - 2025.03"
role: "Fullstack Engineer"
stack: ["Astro", "TypeScript", "GitHub Pages"]
links:
  github: "https://github.com/..."
  demo: "https://..."
highlights:
  - "핵심 포인트 1"
metrics:
  - "배포 시간 단축"
cover: "/images/projects/example.png"
youtube: "YOUTUBE_VIDEO_ID"
order: 1
draft: false
---
```

콘텐츠 스키마 정의는 `src/content/config.ts` 에 있습니다.

## Site Configuration

사이트 메타데이터와 홈/블로그 분류 설정은 `src/config/site.ts` 에서 관리합니다.

여기에서 다음 항목을 수정할 수 있습니다.

- 사이트 이름, 제목, 설명, URL
- author 이메일, GitHub 링크
- 홈 화면 강점 카드
- 블로그 카테고리/시리즈 정의

## Deployment

배포는 `.github/workflows/deploy.yml` 로 처리합니다.

- `main` 브랜치에 push
- GitHub Actions에서 `npm ci` 및 `npm run build` 실행
- `dist/` 산출물을 GitHub Pages에 배포

GitHub 저장소 설정에서는 `Pages`의 source를 `GitHub Actions`로 두면 됩니다.
