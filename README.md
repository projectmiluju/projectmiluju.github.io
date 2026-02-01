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
category: "cs"          # cs | book | til
series: "시리즈명"       # 선택 사항
cover: "/images/blog/cover.png"  # 선택 사항
draft: false            # true면 목록에서 숨김
---

본문 내용...
```

#### 카테고리
- `cs`: CS 개념 정리
- `book`: 개발 서적 리뷰
- `til`: 문제 해결 기록

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
    email: 'project.miluju@gmail.com',
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

## 🤖 AI 프롬프트 (프로젝트 재현용)

이 프로젝트와 동일한 구조의 포트폴리오/블로그를 AI로 생성하려면 아래 프롬프트를 사용하세요.

<details>
<summary><b>프롬프트 펼치기</b></summary>

### 개발자 포트폴리오 + 기술 블로그 웹사이트 제작

#### 프로젝트 개요
Astro 프레임워크를 사용하여 GitHub Pages에 배포할 개발자 포트폴리오 겸 기술 블로그를 만들어주세요.

#### 기술 스택
- **프레임워크**: Astro v4 (SSG)
- **콘텐츠**: MDX (마크다운 + JSX)
- **스타일**: CSS Variables 기반 커스텀 CSS (Tailwind 미사용)
- **언어**: TypeScript
- **폰트**: Pretendard (한글 최적화)
- **배포**: GitHub Actions → GitHub Pages

#### 핵심 기능 요구사항

##### 1. 사이트 구조
```
/                   # 메인 (히어로 + 강점 + 프로젝트 미리보기 + 블로그 미리보기)
/projects           # 프로젝트 목록
/projects/[slug]    # 프로젝트 상세 (MDX)
/blog               # 블로그 목록 (시리즈별 그룹핑 + 검색/필터링)
/blog/[...slug]     # 블로그 포스트 상세 (MDX)
/about              # 소개 페이지 (Bento Grid 레이아웃)
/rss.xml            # RSS 피드
```

##### 2. 디자인 시스템

**테마**
- 라이트/다크 모드 지원 (시스템 설정 감지 + 수동 토글)
- CSS Variables로 색상 관리
- 메인 액센트 컬러: 블루 (#0066cc 라이트 / #4d9fff 다크)

**타이포그래피**
- 산세리프: Pretendard Variable
- 모노스페이스: JetBrains Mono
- 반응형 폰트 크기 (clamp 활용)

**애니메이션**
- 스크롤 시 요소 reveal 효과 (Intersection Observer)
- 3D 카드 틸트 효과 (데스크탑만, 마우스 위치 기반)
- 호버 마이크로 인터랙션
- 스크롤 프로그레스 바 (상단)
- prefers-reduced-motion 존중

##### 3. 컴포넌트

**Header**
- 고정 네비게이션 (blur 배경)
- 로고 (그라데이션 텍스트)
- 네비게이션 링크 (Home, Projects, Blog, About)
- 테마 토글 버튼 (3단계: 라이트/다크/시스템)
- GitHub 링크
- 모바일 햄버거 메뉴

**Footer**
- 저작권, 소셜 링크

**BlogCard**
- 카테고리 배지 (CS/Book/TIL - 색상 구분)
- 날짜, 제목, 요약 (2줄 제한), 태그 (최대 3개)
- 호버 효과

**ProjectCard**
- 커버 이미지/영상, 제목, 역할, 기간
- 기술 스택 태그, 핵심 성과 (metrics), 하이라이트 포인트

**StrengthCard**
- 아이콘, 제목, 설명, 근거/evidence

##### 4. 콘텐츠 스키마

**블로그 포스트 (blog)**
```typescript
{
  title: string;
  date: Date;
  summary: string;
  tags: string[];
  category: 'cs' | 'book' | 'til';
  series?: string;
  cover?: string;
  draft?: boolean;
}
```

**프로젝트 (projects)**
```typescript
{
  title: string;
  period: string;
  role: string;
  stack: string[];
  links?: { github?: string; demo?: string; };
  highlights: string[];
  metrics: string[];
  cover?: string;
  youtube?: string;
  draft?: boolean;
  order: number;
}
```

##### 5. 사이트 설정 (config/site.ts)
```typescript
{
  name: '사이트명',
  title: '페이지 타이틀',
  description: 'SEO 설명',
  url: 'https://username.github.io',
  author: { name, email, github },
  strengths: [
    { title: '신뢰성', description: '...', icon: 'shield', evidence: '...' },
    { title: '성능', description: '...', icon: 'zap', evidence: '...' },
    { title: '자동화', description: '...', icon: 'cog', evidence: '...' },
  ],
  blogCategories: [
    { slug: 'cs', name: 'CS Notes' },
    { slug: 'book', name: 'Book Notes' },
    { slug: 'til', name: 'TIL' },
  ],
  blogSeries: [
    { slug: '시리즈명', name: '표시명', category: 'cs', folder: 'cs/subfolder', icon: '🌐' },
  ],
}
```

##### 6. 블로그 페이지 기능
- 검색 (제목, 요약, 태그 대상)
- 카테고리 필터, 시리즈 필터 (아이콘 + 포스트 수 표시), 태그 필터
- 시리즈별 그룹 뷰 (기본), 필터 적용 시 그리드 뷰로 전환
- URL 쿼리 파라미터 동기화
- 빈 상태 처리

##### 7. SEO & 메타데이터
- Open Graph 태그, Twitter Card 태그, Canonical URL
- sitemap.xml, robots.txt, RSS 피드
- 한국어 lang 설정

##### 8. 접근성
- 시맨틱 HTML, ARIA 레이블
- 스킵 링크 ("본문으로 건너뛰기")
- 키보드 네비게이션, Focus visible 스타일
- 색상 대비 충분히

##### 9. GitHub Actions CI/CD
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - run: touch ./dist/.nojekyll
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

##### 10. 폴더 구조
```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ThemeToggle.astro
│   ├── BlogCard.astro
│   ├── ProjectCard.astro
│   ├── StrengthCard.astro
│   ├── TableOfContents.astro
│   ├── TagFilter.astro
│   └── YouTubeEmbed.astro
├── config/
│   └── site.ts
├── content/
│   ├── config.ts
│   ├── blog/
│   │   ├── cs/
│   │   ├── books/
│   │   └── til/
│   └── projects/
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── 404.astro
│   ├── rss.xml.ts
│   ├── blog/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   └── projects/
│       ├── index.astro
│       └── [slug].astro
├── styles/
│   └── global.css
└── env.d.ts
```

##### 11. 스타일 가이드 (CSS Variables)
```css
:root {
  /* 색상 */
  --color-bg: #fafafa;
  --color-bg-alt: #ffffff;
  --color-text: #1a1a1a;
  --color-text-muted: #6b6b6b;
  --color-border: #e5e5e5;
  --color-accent: #0066cc;
  --color-accent-hover: #0052a3;
  --color-accent-light: #e6f0fa;
  
  /* 타이포그래피 */
  --font-sans: 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* 스페이싱: --space-1 ~ --space-20 (0.25rem 단위) */
  /* 레이아웃 */
  --max-width: 1200px;
  --content-width: 720px;
  --header-height: 64px;
  
  /* 트랜지션 */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 그림자 */
  --shadow-card: 0 2px 8px rgba(0,0,0,0.04);
  --shadow-card-hover: 0 12px 24px rgba(0,0,0,0.08);
}

/* 다크모드 */
[data-theme="dark"] { ... }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { ... } }
```

##### 12. 필수 패키지
```json
{
  "dependencies": {
    "astro": "^4.15.0",
    "@astrojs/mdx": "^3.1.0",
    "@astrojs/rss": "^4.0.5",
    "@astrojs/sitemap": "^3.6.1"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "prettier": "^3.2.0",
    "prettier-plugin-astro": "^0.13.0"
  }
}
```

##### 추가 지침
1. 한국어 UI 텍스트 사용 (날짜 포맷: 2025년 1월 15일)
2. 모바일 우선 반응형 디자인
3. 이미지 lazy loading
4. 코드 블록 신택스 하이라이팅
5. MDX에서 YouTube 영상 임베드 지원
6. 블로그 포스트에 목차(TOC) 컴포넌트 포함

</details>

## 📄 라이선스

MIT License
