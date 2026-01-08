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
      description: '안정적인 시스템 설계와 장애 대응 경험으로 99.9% 이상의 가용성을 달성합니다.',
      icon: 'shield',
    },
    {
      title: '성능',
      description: '병목 분석과 최적화를 통해 응답 시간 50% 이상 개선한 경험이 있습니다.',
      icon: 'zap',
    },
    {
      title: '자동화',
      description: 'CI/CD 파이프라인과 IaC로 배포 시간을 80% 단축하고 휴먼 에러를 최소화합니다.',
      icon: 'cog',
    },
  ],
  // 블로그 카테고리
  blogCategories: [
    { slug: 'cs', name: 'CS Notes', description: 'Computer Science 핵심 개념 정리' },
    { slug: 'book', name: 'Book Notes', description: '개발 서적 정리 및 리뷰' },
    { slug: 'troubleshooting', name: 'Troubleshooting', description: '실무 문제 해결 기록' },
  ],
};

export type SiteConfig = typeof siteConfig;
