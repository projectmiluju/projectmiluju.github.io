# Source Code Repo Licensing Guide

이 저장소는 현재 사이트 코드와 블로그/프로젝트 콘텐츠가 함께 들어 있는 운영 저장소다.
따라서 이 저장소 루트에 바로 `MIT` 라이선스를 추가하는 것은 권장하지 않는다.

가장 안전한 방법은 `사이트 소스코드 전용 저장소`를 별도로 만들고, 그 저장소에만 `MIT` 라이선스를 적용하는 것이다.

## 권장 전략

- 새 저장소는 `Astro 사이트를 구동하는 코드`만 포함한다.
- 블로그 글, 프로젝트 상세 서술, 이미지 자산처럼 콘텐츠 성격의 파일은 제외한다.
- 새 저장소 루트에 `LICENSE` 파일로 MIT 텍스트를 둔다.
- 새 저장소 `README`에 "콘텐츠는 포함되지 않거나 별도 라이선스"라고 명시한다.

## 새 저장소에 포함할 것

아래 파일과 디렉토리는 코드 전용 저장소에 포함해도 무리가 적다.

- `astro.config.mjs`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `.gitignore`
- `src/components/`
- `src/layouts/`
- `src/styles/`
- `src/pages/`
- `src/content/config.ts`
- `src/config/site.ts`
- `src/env.d.ts`
- `public/favicon.svg`
- `public/robots.txt`
- `public/sitemap.xml`
- 배포 설정 파일 (`.github/workflows/`가 있다면 함께 포함)

## 새 저장소에서 제외할 것

아래는 저작권 경계가 흐려지기 쉬워서 코드 전용 저장소에서 제외하는 편이 안전하다.

- `src/content/blog/`
- `src/content/projects/`
- `public/images/`
- `public/og-default.png`
- 본문 캡처 이미지, 프로젝트 커버 이미지, 프로필 이미지
- 직접 작성한 글, 회고, 포트폴리오 설명 텍스트

## 주의할 점

- `src/config/site.ts`에는 자기소개 문구와 프로젝트 설명이 일부 포함되어 있다.
  새 저장소로 옮길 때는 예시 문구나 더미 텍스트로 바꾸는 편이 깔끔하다.
- `src/pages/`가 콘텐츠 컬렉션을 직접 읽고 있으므로,
  새 저장소에서는 예시 콘텐츠 몇 개를 샘플로 넣거나
  콘텐츠가 비어 있어도 빌드되도록 구조를 조정해야 한다.
- 폰트, 아이콘, 외부 라이브러리는 각각 원래 라이선스를 따른다.
  새 저장소에 포함하더라도 자동으로 전부 MIT가 되는 것은 아니다.

## 추천 새 저장소 구조

```text
blog-source/
├── LICENSE
├── README.md
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── components/
    ├── layouts/
    ├── pages/
    ├── styles/
    ├── config/
    └── content/
        ├── config.ts
        ├── blog/
        │   └── example-post.mdx
        └── projects/
            └── example-project.mdx
```

## 새 저장소 README 예시

```md
# blog-source

Source code for an Astro-based portfolio/blog site.

## License

This repository's source code is licensed under the MIT License.

Sample content included for development/demo purposes only.
Unless explicitly stated otherwise, blog posts, images, and other editorial content are not included in the MIT license grant.
```

## 적용용 MIT LICENSE

새 저장소의 `LICENSE` 파일에는 아래 텍스트를 그대로 넣으면 된다.

```text
MIT License

Copyright (c) 2026 projectmiluju

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 실제 분리 순서

1. GitHub에서 새 저장소를 만든다.
2. 현재 저장소에서 코드 파일만 복사한다.
3. `src/content/blog/`, `src/content/projects/`, `public/images/`는 제외한다.
4. 빌드가 깨지면 예시 MDX 파일 1-2개만 샘플로 추가한다.
5. 새 저장소에 `LICENSE`와 `README`를 추가한다.
6. 공개 범위를 확인한 뒤 새 저장소를 공개 전환한다.
