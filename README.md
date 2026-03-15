# projectmiluju.github.io

터미널 인터페이스를 웹 경험으로 옮긴 포트폴리오 + 기술 블로그입니다.  
현재 [GitHub Pages](https://projectmiluju.github.io)로 배포되며, 프로젝트 탐색과 글 읽기 경험 전체를 일관된 CLI 감성으로 구성했습니다.

## Product Overview

이 사이트는 단순히 개발 기록을 나열하는 블로그가 아니라, "엔지니어의 작업 환경" 자체를 제품 소개 방식으로 보여주는 포트폴리오입니다.

- 홈 화면은 인터랙티브 터미널 히어로를 중심으로 구성됩니다.
- 프로젝트와 블로그는 `ls`, `cat`, `grep`, `filter` 같은 명령어 메타포로 탐색됩니다.
- 전역 디자인 시스템은 녹색 포스포어 계열 터미널 팔레트와 모노스페이스 타이포그래피를 기준으로 설계되었습니다.
- 라이트/다크 모드를 모두 지원하며, 두 테마 모두 같은 터미널 언어를 유지합니다.

## Visual Direction

핵심 디자인은 `src/styles/global.css` 의 토큰에서 시작합니다.

```css
:root {
  --color-bg: #0d0d0d;
  --color-bg-alt: #111111;
  --color-bg-elevated: #161616;
  --color-text: #c8c8c8;
  --color-text-bright: #e8e8e8;
  --color-text-muted: #4a4a4a;
  --color-border: #1e1e1e;
  --color-accent: #00ff41;
  --color-accent-light: rgba(0, 255, 65, 0.06);
  --color-accent-glow: rgba(0, 255, 65, 0.15);
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
  --shadow-card-hover: 0 0 0 1px var(--color-accent), 0 4px 20px rgba(0, 255, 65, 0.08);
  --radius-lg: 4px;
  --transition-fast: 80ms ease;
}
```

헤더도 일반 웹 내비게이션 대신 "실행 중인 세션"처럼 보이도록 설계했습니다.

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(8px);
}

.nav-link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background-color: var(--color-accent-light);
}
```

브랜드 표기도 일반 로고 대신 터미널 프롬프트 형식을 사용합니다.

```astro
<span class="logo-text">
  <span class="logo-user">{siteConfig.name}</span>
  <span class="logo-at">@</span>
  <span class="logo-host">dev</span>
</span>
```

라이트 모드는 paper terminal 톤, 다크 모드는 phosphor green 기반 터미널 톤으로 구성되어 있습니다.  
헤더의 테마 토글로 즉시 전환되며, 선택값은 `localStorage` 에 저장됩니다.

## License Note

이 저장소는 사이트 코드와 블로그/프로젝트 콘텐츠가 함께 포함된 운영 저장소입니다.  
그래서 저장소 전체에 `MIT` 라이선스를 적용하지 않았습니다.

사이트 구현 코드만 별도로 공개하려면 새 저장소를 만들고 그 저장소에 `MIT`를 적용하는 방식을 권장합니다.  
공개용 템플릿 레포는 [astro-terminal-portfolio-template](https://github.com/projectmiluju/astro-terminal-portfolio-template) 에서 확인할 수 있습니다.  
분리 기준은 `docs/source-code-repo-licensing.md` 에 정리되어 있습니다.

## Stack

- Astro 4
- TypeScript
- MDX
- Custom CSS
- GitHub Actions + GitHub Pages

## Product Surface

- 홈: 터미널 스타일 히어로, 강점 소개, 프로젝트/블로그 최신 항목 노출
- 프로젝트 목록: 스택 태그 필터 지원
- 프로젝트 상세: MDX 기반 상세 페이지, TOC, 외부 링크, YouTube 임베드 지원
- 블로그 목록: 카테고리, 시리즈, 태그, 검색 필터 지원
- 블로그 상세: MDX 렌더링, TOC, 이전/다음 글, 관련 글 추천
- 소개 페이지: 경력, 학력, 기술 스택, 가치관 정리
- 라이트/다크 모드 전환 지원 및 선택 상태 유지
- RSS 피드 제공 (`/rss.xml`)

## Implementation Notes

- 전역 레이아웃은 `src/layouts/BaseLayout.astro` 에서 메타 태그, RSS, 스크롤 프로그레스 바, reveal 애니메이션을 관리합니다.
- 헤더와 푸터는 `src/components/` 에서 공통 컴포넌트로 분리되어 있습니다.
- 콘텐츠는 Astro Content Collections 기반으로 관리되며 블로그와 프로젝트가 각각 별도 컬렉션입니다.
- 블로그와 프로젝트 상세 페이지는 모두 MDX를 렌더링하고 TOC를 제공합니다.

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
