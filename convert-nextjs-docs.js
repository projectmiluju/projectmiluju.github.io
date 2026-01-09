const fs = require('fs');
const path = require('path');

const SOURCE_DIR = './WonYong';
const DEST_DIR = './src/content/blog/cs/nextjs';

// 파일명에서 번호와 제목 추출
function parseFileName(fileName) {
  const match = fileName.match(/^(\d+)\.(.+)\.md$/);
  if (match) {
    return {
      order: parseInt(match[1]),
      title: match[2].replace(/([A-Z])/g, ' $1').trim(), // CamelCase to spaces
    };
  }
  return { order: 0, title: fileName.replace('.md', '') };
}

// 파일명을 slug로 변환
function toSlug(fileName) {
  return fileName
    .replace('.md', '')
    .replace(/^\d+\./, '') // 앞의 숫자 제거
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// 첫 번째 줄에서 제목 추출
function extractTitle(content) {
  const lines = content.split('\n');
  for (const line of lines) {
    if (line.startsWith('# ')) {
      return line.replace('# ', '').trim();
    }
  }
  return 'Untitled';
}

// 요약 추출 (첫 번째 단락)
function extractSummary(content) {
  const lines = content.split('\n');
  let foundTitle = false;
  let summary = '';
  
  for (const line of lines) {
    if (line.startsWith('# ')) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line.trim() && !line.startsWith('#') && !line.startsWith('---')) {
      summary = line.trim();
      break;
    }
  }
  
  // 150자로 자르기
  if (summary.length > 150) {
    summary = summary.substring(0, 147) + '...';
  }
  
  return summary || 'Next.js 공식문서 정리';
}

// 폴더별 처리
const folders = [
  { source: 'GettingStarted', dest: 'getting-started', seriesName: 'Next.js Getting Started' },
  { source: 'Guides', dest: 'guides', seriesName: 'Next.js Guides' },
];

let fileCount = 0;

folders.forEach(({ source, dest, seriesName }) => {
  const sourceDir = path.join(SOURCE_DIR, source);
  const destDir = path.join(DEST_DIR, dest);
  
  // 디렉토리가 없으면 생성
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.md'));
  
  files.forEach(file => {
    const content = fs.readFileSync(path.join(sourceDir, file), 'utf8');
    const { order } = parseFileName(file);
    const title = extractTitle(content);
    const summary = extractSummary(content);
    const slug = toSlug(file);
    
    // 날짜 생성 (순서대로 날짜 부여)
    const baseDate = new Date('2025-01-01');
    baseDate.setDate(baseDate.getDate() + fileCount);
    const dateStr = baseDate.toISOString().split('T')[0];
    
    // Frontmatter 생성
    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: ${dateStr}
summary: "${summary.replace(/"/g, '\\"')}"
tags: ["Next.js", "React", "Frontend"]
category: "cs"
series: "${seriesName}"
order: ${order}
---

`;
    
    // 새 파일 작성
    const newContent = frontmatter + content;
    const newFileName = `${slug}.mdx`;
    
    fs.writeFileSync(path.join(destDir, newFileName), newContent);
    console.log(`✓ ${source}/${file} → ${dest}/${newFileName}`);
    fileCount++;
  });
});

console.log(`\n총 ${fileCount}개 파일 변환 완료!`);
