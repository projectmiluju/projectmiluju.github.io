export const siteConfig = {
  name: 'projectmiluju',
  title: 'projectmiluju | 풀스택 엔지니어 · AI 프로덕트 빌더',
  description: '백엔드/인프라에 뿌리를 두고, AI 통합부터 프론트엔드까지 혼자 설계하는 풀스택 엔지니어. LangGraph AI Agent, Yjs 실시간 협업, Kubernetes IaC — 복잡한 시스템을 처음부터 끝까지 직접 만듭니다.',
  url: 'https://projectmiluju.github.io',
  author: {
    name: 'projectmiluju',
    email: 'project.miluju@gmail.com',
    github: 'https://github.com/projectmiluju',
    linkedin: '',
  },
  ogImage: '/og-default.png',
  links: {
    github: 'https://github.com/projectmiluju',
  },
  // 홈 페이지 강점 섹션
  strengths: [
    {
      title: 'AI 통합',
      description: 'LLM을 실제 서비스 데이터와 연결합니다. LangGraph Agent 파이프라인, pgvector RAG, MCP SDK로 AI를 도구가 아닌 기능으로 만듭니다.',
      icon: 'cpu',
      evidence: 'Grovarc - LangGraph+LLaMA3 회고 생성 Agent, RAG 유사 문제 검색, Claude 연동 MCP 서버',
    },
    {
      title: '시스템 설계',
      description: '규모가 커져도 흔들리지 않는 구조를 설계합니다. MSA 오케스트레이터 패턴, Yjs 협업 프로토콜 직접 구현, K8s+Terraform IaC.',
      icon: 'layers',
      evidence: 'CastCanvas Lab - 5레포 MSA + Yjs 프로토콜 직접 설계, Grovarc - K8s+Terraform IaC 인프라',
    },
    {
      title: '성능 & 신뢰성',
      description: 'TanStack Query 계층적 캐시 설계, Yjs state-vector delta 동기화, 비관적 락 동시성 처리로 빠르고 안정적인 서비스를 만듭니다.',
      icon: 'zap',
      evidence: 'TripPixel - useQueries 병렬 조회 + 캐시 invalidation 설계, DDOK - 조회 2초→200ms + 비관적 락, CastCanvas - Yjs delta 동기화',
    },
  ],
  // 블로그 카테고리
  blogCategories: [
    { slug: 'cs', name: 'CS Notes', description: 'Computer Science 핵심 개념 정리' },
    { slug: 'book', name: 'Book Notes', description: '개발 서적 정리 및 리뷰' },
    { slug: 'til', name: 'TIL', description: 'Today I Learned' },
  ],
  // 블로그 시리즈 (세부 분류)
  blogSeries: [
    { 
      slug: '매일메일 프론트엔드', 
      name: '매일메일 프론트엔드', 
      category: 'cs',
      folder: 'cs/frontend',
      icon: '🌐'
    },
    { 
      slug: '매일메일 백엔드', 
      name: '매일메일 백엔드', 
      category: 'cs',
      folder: 'cs/backend',
      icon: '⚙️'
    },
    { 
      slug: 'React', 
      name: 'React', 
      category: 'cs',
      folder: 'cs/react',
      icon: '⚛️'
    },
    { 
      slug: '혼자 공부하는 컴퓨터 구조 + 운영체제', 
      name: '혼자 공부하는 컴퓨터 구조 + 운영체제', 
      category: 'book',
      folder: 'books/self-taught-ca-os',
      icon: '📚'
    },
    { 
      slug: 'Next.js Getting Started', 
      name: 'Next.js 시작하기', 
      category: 'cs',
      folder: 'cs/nextjs/getting-started',
      icon: '▲'
    },
    { 
      slug: 'Next.js Guides', 
      name: 'Next.js 가이드', 
      category: 'cs',
      folder: 'cs/nextjs/guides',
      icon: '📖'
    },
    {
      slug: 'Today I Learned',
      name: 'Today I Learned',
      category: 'til',
      folder: 'til/til',
      icon: '📚'
    },
    {
      slug: 'Grovarc 개발기',
      name: 'Grovarc 개발기',
      category: 'til',
      folder: 'til/grovarc-devlog',
      icon: '🛠️'
    },
    {
      slug: 'CastCanvas Lab 개발기',
      name: 'CastCanvas Lab 개발기',
      category: 'til',
      folder: 'til/castcanvas-lab-devlog',
      icon: '🎨'
    },
    {
      slug: 'BoothLiner 개발기',
      name: 'BoothLiner 개발기',
      category: 'til',
      folder: 'til/boothliner-devlog',
      icon: '🧩'
    },
    {
      slug: 'BOOK_MAKER 개발기',
      name: 'BOOK_MAKER 개발기',
      category: 'til',
      folder: 'til/bookmaker-devlog',
      icon: '📖'
    },
  ],
};

export type SiteConfig = typeof siteConfig;
