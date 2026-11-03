# 실행·빌드 및 Cloudflare Pages 배포 가이드

JAVE 홈페이지는 **Next.js SSG + Static Export**로 빌드하고, 생성된 `out/`을 **Cloudflare Pages에 직접 업로드(Direct Upload)**해 배포합니다. 이 문서는 Windows PowerShell과 npm을 기준으로 합니다.

```text
Next.js + TypeScript + Tailwind CSS
  → npm run build
  → out/ (HTML / CSS / JavaScript / 이미지)
  → Cloudflare Pages Direct Upload
```

Next.js 서버를 상시 실행할 필요가 없습니다. 소스나 콘텐츠를 변경하면 로컬에서 다시 빌드한 결과물을 업로드합니다. [Cloudflare의 Next.js 정적 사이트 안내](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)

## 소스 폴더 구조와 수정 위치

개발 규칙은 [AGENTS.md](../AGENTS.md), 현재 전체 폴더 구조는 [README](../README.md#폴더-구조)를 참고합니다. 아래는 현재 소스에 적용한 배치 기준입니다.

| 수정 대상                  | 위치 및 역할                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 라우트 진입점              | `src/app/page.tsx`, `src/app/<route>/page.tsx` — 메타데이터와 컴포넌트 조합                                   |
| 소개 페이지 전용 UI        | `src/app/_components/<용도>/<Component>.tsx`                                                                  |
| 틸드·어썸·문의 전용 UI     | `src/app/tilde/_components/`, `src/app/awesome/_components/`, `src/app/contact/_components/` 아래 용도별 폴더 |
| 통합 약관·상세 화면        | `src/app/policy/page.tsx`, `src/app/policy/[slug]/page.tsx`                                                   |
| 약관 전용 UI·본문          | `src/app/policy/_components/`, `src/app/policy/_data/policy-content.ts`                                       |
| 공통 약관 항목             | `src/data/policies.ts` — 푸터 링크와 약관 구분 메뉴에서 공유                                                  |
| 공통 UI                    | `src/components/<용도>/<Component>.tsx` 또는 역할을 더 나눈 하위 폴더 — 여러 라우트와 공통 레이아웃에서 공유  |
| 공통 레이아웃 조합         | `src/app/layout.tsx` — 공통 헤더·본문·푸터                                                                    |
| 공통 콘텐츠·설정           | `src/data/`                                                                                                   |
| 라우트 전용 데이터·로직    | 해당 라우트의 `_data/`, `_hooks/`, `_lib/`, `_types/` — 필요할 때 생성                                        |
| 실제 공통 훅·유틸리티·타입 | `src/hooks/`, `src/lib/`, `src/types/` — 필요할 때 생성                                                       |
| 정적 자산                  | `public/images/`, `public/fonts/`                                                                             |
| 배포 결과물                | `out/` — 빌드로 생성하며 직접 수정하지 않음                                                                   |

SRP와 컴포넌트 하나당 파일 하나 원칙을 지킵니다. 특정 라우트에서만 쓰는 UI를 `src/components/`에 두거나 다른 라우트의 `_components/`를 직접 가져오지 않습니다. 여러 라우트에서 실제로 필요해질 때 공통 컴포넌트로 추출합니다.

페이지 전용 섹션과 데이터는 각 라우트의 `_components/`, `_data/`로 분리되어 있습니다. 공통 상단 영역은 `Header`, `FloatingBar`, `ContactLink`가 조합하고 활성 메뉴는 `NavigationLink`가 담당합니다. 폴더 위치가 바뀌어도 라우트의 `page.tsx` 위치를 유지하면 페이지 주소와 `out/` 배포 방식은 유지됩니다.

## 1. 개발환경 준비

Node.js LTS와 npm을 설치한 뒤 프로젝트 루트에서 실행합니다. 최초 설치 또는 잠금 파일 변경 후 의존성을 맞출 때 `npm ci`를 사용합니다.

```powershell
cd "C:\Users\JJH\Documents\GitHub\jave-website"
node --version
npm --version
npm ci
```

의존성은 `package-lock.json` 기준으로 설치합니다. 새 패키지를 추가할 때는 `npm install`을 사용하고 `package.json`과 잠금 파일을 함께 관리합니다.

## 2. 개발 서버 실행

```powershell
npm run dev
```

[로컬 개발 페이지](http://localhost:3000)에서 확인합니다. 포트가 사용 중이면 터미널에 표시된 실제 주소를 사용합니다.

| 페이지                    | 경로                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 소개                      | `/`                                                                                                                  |
| 틸드                      | `/tilde/`                                                                                                            |
| 어썸                      | `/awesome/`                                                                                                          |
| 문의                      | `/contact/`                                                                                                          |
| 통합 약관 · 기본 이용약관 | `/policy/`                                                                                                           |
| 약관별 상세               | `/policy/terms/`, `/policy/location/`, `/policy/privacy/`, `/policy/operation/`, `/policy/brand/`, `/policy/rights/` |

중앙 floating bar, 우측 문의 버튼, 공통 푸터와 페이지별 본문을 확인합니다. 서버는 `Ctrl+C`로 종료합니다.

## 3. 코드 검사와 정적 빌드

### Prettier 포맷 적용

```powershell
npm run format
npm run format:check
```

`format`은 프로젝트 소스와 문서의 줄바꿈·들여쓰기를 정리하고, `format:check`는 파일 변경 없이 형식을 검사합니다. 설정은 `.prettierrc.json`을 사용하며 코드·CSS는 4칸, JSON·Markdown은 2칸 들여쓰기를 적용합니다. CSS 선택자·속성·미디어 쿼리는 압축하지 않고 여러 줄로 작성합니다.

`.prettierignore`는 빌드 결과물, 잠금 파일, 원본 이미지·폰트, 자동 추출한 `src/app/service-fonts.css`를 제외합니다. IDE의 Prettier 경로를 프로젝트의 `node_modules/prettier`로 지정하면 같은 설정을 사용할 수 있습니다.

서비스 화면의 이미지 출처와 컴포넌트 구조, Tailwind와 CSS Modules의 사용 범위는 [서비스 페이지 가이드](service-pages.md)를 참고합니다.

### 코드·타입 검사 및 빌드

```powershell
npm run lint
npm run typecheck
npm run build
```

각 명령이 성공한 뒤 다음 단계로 진행합니다. 빌드가 실패하면 기존 `out/`이 남아 있더라도 이번 변경이 반영된 결과물로 간주하지 않습니다.

현재 `dev`와 `build` 스크립트는 이 환경의 Turbopack CSS 처리 오류를 피하기 위해 각각 `next dev --webpack`, `next build --webpack`을 실행합니다. 타입 검사와 ESLint 호환성을 위해 TypeScript 6.0을 사용합니다.

`next.config.ts`에는 다음 설정이 적용되어 있습니다.

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

SSG는 빌드할 때 페이지의 HTML을 생성하는 방식이고, Static Export는 결과물을 정적 파일로 내보내는 설정입니다. 현재 요청별 서버 처리는 사용하지 않습니다. [Next.js Static Export 문서](https://nextjs.org/docs/app/guides/static-exports)

빌드 결과는 `C:\Users\JJH\Documents\GitHub\jave-website\out`에 생성됩니다.

```text
out/
├── index.html
├── tilde/
│   └── index.html
├── awesome/
│   └── index.html
├── contact/
│   └── index.html
├── policy/
│   ├── index.html                 # 기본 이용약관
│   ├── terms/index.html
│   ├── location/index.html
│   ├── privacy/index.html
│   ├── operation/index.html
│   ├── brand/index.html
│   └── rights/index.html
├── 404.html
└── _next/                         # 생성된 JavaScript·CSS 등
```

이미지 등 `public/`의 파일도 결과물에 포함됩니다. 업로드 대상은 **`out/` 전체**이며, 소스 폴더나 `.next/`, `node_modules/`는 업로드하지 않습니다.

## 4. 정적 빌드 결과 확인

```powershell
npx serve@latest out
```

터미널에 표시된 로컬 주소로 접속해 각 메뉴와 하위 경로의 직접 접속·새로고침을 확인합니다. `output: "export"`에서는 `next start` 대신 정적 파일 서버로 확인합니다.

## 5. Cloudflare Pages 최초 배포 — 직접 업로드

1. [Cloudflare 대시보드](https://dash.cloudflare.com/)에 로그인합니다.
2. **Workers & Pages**에서 **Create application**을 선택하고, Pages의 파일 업로드·drag and drop 흐름으로 진입합니다. 화면 버전에 따라 메뉴 명칭이 다를 수 있습니다.
3. 프로젝트 이름을 입력합니다. 예: `jave-website` — 실제 생성 가능한 이름을 사용합니다.
4. 빌드가 완료된 **`out` 폴더 전체**를 업로드합니다. 업로드 결과의 루트에 `index.html`, `_next/`, `tilde/` 등이 위치해야 합니다.
5. **Deploy site / Save and Deploy**로 배포합니다.
6. Cloudflare가 반환한 `https://<실제-프로젝트-이름>.pages.dev` 주소로 접속합니다.

Direct Upload는 로컬에서 이미 빌드한 결과물을 올리므로 Cloudflare에 별도 빌드 명령어를 등록하지 않습니다. `.env.local` 등 로컬 환경변수 파일도 업로드하지 않습니다.

직접 업로드 프로젝트는 나중에 같은 프로젝트를 Git 자동 연동 방식으로 전환할 수 없습니다. 자동 배포가 필요해지면 Git 연동 프로젝트를 새로 생성합니다. 대시보드 drag and drop은 최대 1,000개 파일, 파일당 최대 25 MiB를 지원합니다. 한도를 넘으면 Wrangler 업로드 방식을 검토합니다. [Direct Upload 공식 문서](https://developers.cloudflare.com/pages/get-started/direct-upload/)

## 6. 수정 후 재배포

콘텐츠 또는 코드를 수정한 뒤 검사와 빌드를 다시 실행합니다.

```powershell
npm run lint
npm run typecheck
npm run build
npx serve@latest out
```

로컬 확인 후 Cloudflare에서 기존 Pages 프로젝트를 열고 **Create a new deployment**를 선택합니다. Production 배포를 선택한 뒤 새로 생성된 `out/` 전체를 업로드합니다. 새 프로젝트를 매번 생성할 필요는 없습니다.

## 7. 선택: Wrangler CLI로 업로드

반복 배포 시 같은 Direct Upload 프로젝트에 CLI로도 업로드할 수 있습니다. 아래는 사용자가 배포할 때 실행하는 명령어이며, 프로젝트 이름과 운영 브랜치는 실제 Cloudflare 설정에 맞춰 변경합니다.

```powershell
npx wrangler@latest login
npx wrangler@latest pages project list
npx wrangler@latest pages deploy out --project-name jave-website --branch main
```

위 명령은 프로젝트의 운영 브랜치가 `main`인 경우의 예시입니다. 다른 브랜치를 지정하면 Preview 배포가 될 수 있으므로 운영 배포 대상과 반환 URL을 확인합니다. 기존 프로젝트가 없다면 `npx wrangler@latest pages project create`로 먼저 생성할 수 있습니다. [Wrangler 업로드 안내](https://developers.cloudflare.com/pages/get-started/direct-upload/#wrangler-cli)

## 8. 배포 확인 및 콘텐츠 준비

- `/`, `/tilde/`, `/awesome/`, `/contact/`에 각각 직접 접속하고 새로고침합니다.
- `/policy/`에서 이용약관이 기본 선택되는지, 7개 구분 메뉴와 푸터 링크가 각 `/policy/[slug]/`로 이동하는지 확인합니다. 상세 주소의 직접 접속·새로고침과 등록하지 않은 항목의 404도 확인합니다.
- 모든 페이지에서 공통 메뉴·문의 버튼·푸터가 표시되고 활성 메뉴가 바뀌는지 확인합니다.
- 모바일에서 floating bar와 문의 버튼이 겹치지 않는지 확인합니다.
- 이미지·CSS·JavaScript 파일이 로드되는지, 존재하지 않는 경로가 404로 표시되는지 확인합니다.
- 실제 공개 전 자리표시자 문구와 연락처를 확정하고, 파비콘·공유 이미지·회사 정보를 반영합니다.
- 약관 본문은 출시 전 검토용 초안입니다. 실제 운영 전에 `src/app/policy/_data/documents/`의 내용, 사업자·담당자·연락처·처리 내역·시행일을 확정합니다. 적용 조건과 공식 출처는 [약관 작성 가이드](policies.md)를 참고합니다.
- 도메인 확정 후 현재 빈 `public/robots.txt`, `public/sitemap.xml`을 작성하고 메타데이터도 검토합니다.

사용자 지정 도메인은 Pages 프로젝트의 **Custom domains**에서 추가합니다. DNS 설정은 대시보드 안내를 따릅니다. [사용자 지정 도메인 공식 문서](https://developers.cloudflare.com/pages/configuration/custom-domains/)
