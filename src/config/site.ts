export const siteConfig = {
  name: 'projectmiluju',
  title: 'projectmiluju | Backend/Infra 중심 풀스택 엔지니어',
  description: '백엔드/인프라 중심의 풀스택 엔지니어. 신뢰성 있는 시스템 설계, 성능 최적화, 자동화된 인프라 구축을 추구합니다.',
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
      title: '신뢰성',
      description: 'Docker 샌드박스, JWT 인증, 동시성 제어 등 안전하고 안정적인 시스템을 설계합니다.',
      icon: 'shield',
      evidence: 'DeepWebIDE - Docker 격리 환경 구현, DDOK - 비관적 락 기반 동시성 처리',
    },
    {
      title: '성능',
      description: 'Redis 캐싱, N+1 해결, 실시간 동기화 최적화로 빠른 사용자 경험을 제공합니다.',
      icon: 'zap',
      evidence: '쓱관 - 랭킹 조회 3초→50ms, DDOK - 프로젝트 조회 2초→200ms',
    },
    {
      title: '자동화',
      description: 'GitHub Actions CI/CD, AWS 인프라 구축으로 배포 자동화와 운영 효율을 높입니다.',
      icon: 'cog',
      evidence: '4개 프로젝트 모두 GitHub Actions 기반 자동 배포 파이프라인 구축',
    },
  ],
  // 블로그 카테고리
  blogCategories: [
    { slug: 'cs', name: 'CS Notes', description: 'Computer Science 핵심 개념 정리' },
    { slug: 'book', name: 'Book Notes', description: '개발 서적 정리 및 리뷰' },
    { slug: 'troubleshooting', name: 'Troubleshooting', description: '실무 문제 해결 기록' },
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
  ],
};

export type SiteConfig = typeof siteConfig;
