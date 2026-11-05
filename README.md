# jave-website

JAVE 공식 기업 홈페이지. 기업 소개와 **틸드**, **어썸** 서비스 소개, 문의 안내를 각각의 페이지로 제공하는 **SSG 기반 정적 웹사이트**입니다.

> 어썸·틸드 소개는 제공된 기획서와 디자인 자료를 바탕으로 구성했습니다. 두 앱은 출시 준비 중이며 미리보기 화면은 디자인 예시입니다. 약관은 공식 법령·가이드를 참고해 작성한 출시 전 초안이며, 운영 정보와 시행일은 추후 확정합니다.

실행·빌드·Cloudflare Pages 직접 업로드 배포 절차는 [실행 및 배포 가이드](docs/development-and-deployment.md)에 정리했습니다.

SRP, 컴포넌트 분리, 폴더링 등 개발 규칙은 [AGENTS.md](AGENTS.md)를 따릅니다.

브랜드 자산 출처, 앱 디자인 미리보기, 스크롤 효과와 스타일 관리 방식은 [서비스 페이지 가이드](docs/service-pages.md)에 정리했습니다.

푸터 정책의 선정 근거, 공식 참고 자료와 출시 전 확정 사항은 [약관 작성 가이드](docs/policies.md)를 참고합니다.

## 페이지 구성

소개·틸드·어썸·문의는 각각의 라우팅 페이지로 구성합니다. 메뉴 이동 시 URL과 본문이 변경되며, 공통 레이아웃은 유지됩니다.

| 메뉴         | 주요 내용                               | 라우트            |
| ------------ | --------------------------------------- | ----------------- |
| 소개         | JAVE 소개, 비전, 핵심 가치              | `/`               |
| 틸드         | 영상과 소개, 대화·함께하는 시간·동아리  | `/tilde/`         |
| 어썸         | 서비스 설명, 주요 특징, 서비스 바로가기 | `/awesome/`       |
| 문의         | 회사 연락처와 제휴·문의 안내            | `/contact/`       |
| 약관 및 정책 | 이용약관을 기본 선택한 통합 약관 화면   | `/policy/`        |
| 약관별 상세  | 선택한 약관의 설명과 본문               | `/policy/[slug]/` |

푸터에는 틸드·어썸의 가입·개인정보·위치·유료 기능·안전을 위한 아래 7개 정책을 표시합니다. 개인정보 처리방침을 강조하고, 각 링크는 해당 상세 경로로 이동합니다. 기존 브랜드보호정책은 제외했습니다.

| 약관 구분               | 상세 경로            |
| ----------------------- | -------------------- |
| 이용약관 · 기본 항목    | `/policy/terms/`     |
| 개인정보 처리방침       | `/policy/privacy/`   |
| 위치기반서비스 이용약관 | `/policy/location/`  |
| 유료서비스·환불정책     | `/policy/payment/`   |
| 커뮤니티·안전정책       | `/policy/operation/` |
| 청소년보호정책          | `/policy/youth/`     |
| 권리침해 신고안내       | `/policy/rights/`    |

`/policy/`는 이용약관을 표시합니다. 구분 메뉴를 선택하면 상세 경로와 활성 항목·본문이 바뀝니다. 각 문서는 초안 상태·시행일 미정 안내, 조항별 목차, 본문과 공식 출처를 표시합니다. 본문은 `src/app/policy/_data/documents/`에 문서별로 분리하고 `policy-content.ts`에서 연결합니다. 위치정보·결제 관련 조항은 해당 기능 도입 시 적용하며, 푸터 공개만으로 실제 가입 동의나 법적 의무 이행을 대신하지 않습니다.

모든 페이지는 `src/app/layout.tsx`의 공통 레이아웃을 사용합니다.

- **상단 중앙:** `COMPANY / TILDE / AWESOME` 영문 메뉴를 공통으로 사용하며 현재 페이지에 얇은 밑줄을 표시합니다. 회사·틸드·어썸에서는 첫 화면 위에 흰 메뉴를 겹치고, 문의·약관에서는 어두운 메뉴를 사용합니다.
- **본문:** 현재 라우트에 해당하는 페이지 콘텐츠.
- **하단:** 어두운 배경에 약관 링크를 나열하고 저작권 문구를 아래에 배치한 공통 푸터. 본문이 짧으면 화면 하단에 위치하고, 길면 콘텐츠 아래에 이어집니다. 좁은 화면에서는 링크가 여러 줄로 배치됩니다.
- **모바일:** 세 메뉴를 중앙 한 줄에 배치하고, 틸드 영상은 브라우저의 실제 표시 높이와 너비를 꽉 채웁니다. 영상 비율은 유지하며 중앙을 기준으로 가장자리를 크롭합니다.

화면의 전체 너비를 사용하며 공통 레이아웃에 고정 최대 너비를 두지 않습니다. 전체 높이는 최소 `100dvh`로 설정해 모바일 주소창 변화에도 대응하고, 본문이 길어지면 세로 스크롤로 이어집니다. 화면 크기에 따라 좌우 여백·제목 크기·푸터 정렬을 조정하며, 긴 설명 문구는 가독성을 위해 줄 길이만 제한합니다.

서비스별 상세 문구, 이미지, 외부 링크는 콘텐츠 확정 후 반영합니다.

틸드는 기존 영상과 소개 문구 아래에 두 사람의 대화, 오늘 함께하는 시간, 꾸준히 이어지는 동아리를 순서대로 보여줍니다. 첫 섹션은 화면 가로 폭을 넓게 사용하는 13장 벽면 갤러리이며, 사진을 크게 하고 간격을 좁혀 배치합니다. 위 작은 사진은 폭을 좁히고 오른쪽 가로 사진들은 크기를 달리하며, 아래쪽 가운데 사진은 세로형으로 구성합니다. 넓은 화면의 문구는 오른쪽 위 사진들 아래, 갤러리 안쪽에 놓습니다. 1024px 이상은 13장을 유지하고, 768~1023px에서는 9장·3열, 480~767px에서는 7장·2열, 479px 이하에서는 선택한 5장·2열을 표시합니다. 사진 비율을 유지하면서 각 열의 시작 높이를 엇갈리게 하고, 표시한 사진만으로 높이를 계산해 문구가 바로 아래에 이어집니다. 두 번째 섹션은 오른쪽 사진 영역을 넓힌 6장 갤러리로, 중앙 세로 사진과 크기가 다른 주변 사진을 배치합니다. 오른쪽 아래의 좁은 세로 사진은 다른 사진보다 아래까지 이어지며, 사진 묶음이 문구보다 길어져도 자연스럽게 표시합니다. 세 번째 섹션은 중앙 문구 아래에 가로형 `clubActivity` 사진을 놓고, 양옆의 사진 네 장을 가까이 모은 콜라주입니다. 왼쪽 아래 사진은 세로형이며, 오른쪽 아래 세로 사진은 크게 표시합니다. 모든 사진은 16:9 또는 3:4 비율과 둥근 모서리를 사용합니다.

하단 사진 영역은 총 24곳(13·6·5장)입니다. 첫 갤러리 1~13번에는 제공된 1280×720 PNG 13개를 연결했고, 오늘·동아리의 14~24번은 단색 자리표시자입니다. 문구와 사진 슬롯은 `src/app/tilde/_data/stories.ts`, 첫 갤러리의 배치 정보는 `src/app/tilde/_data/conversation-gallery.ts`에서 관리합니다. 사진 원본은 `public/images/tilde/photography/conversation/`에 같은 파일명으로 복사했으며, 재압축하거나 새 이미지를 생성하지 않았습니다. 틸드 본문 배경은 따뜻한 흰색 `#FDFBF8`이며, 이야기 섹션에는 넓은 색 띠를 두지 않습니다. 첫 제목의 “같이”, 오늘 설명 둘째 줄의 “시간이”, 동아리 상단 문구의 “동아리” 뒤에는 서로 다른 연한 색의 장식 타원을 둡니다. 소개와 첫 갤러리, 각 이야기 섹션 사이에는 화면 크기에 맞춘 넉넉한 여백을 둡니다. 영상 아래 소개 문구와 타원은 함께, 각 이야기의 문구 묶음과 사진은 각각 화면에 진입할 때 부드럽게 나타납니다. 틸드 전용 `TildeReveal`이 공통 `ScrollReveal`을 감싸 세로 이동 전환을 보완하며, 동작 줄이기 설정과 JavaScript 미실행 환경에서는 내용을 숨기지 않습니다.

사진이 없는 14~24번 슬롯에는 중앙 번호를 표시해 수정 대상을 지정할 수 있습니다. 사진이 연결된 1~13번은 번호와 장식 테두리를 표시하지 않습니다. 모든 슬롯의 번호는 사진 데이터의 `slotNumber`로 관리하며, 이후 배치가 바뀌어도 같은 사진의 번호를 유지합니다.

## 기술 스택

Next.js를 기본 프레임워크로 사용합니다. 정확한 버전은 `package.json`과 `package-lock.json`에서 관리합니다.

현재 ESLint 구성과의 호환성을 위해 TypeScript 6.0을 사용합니다. 개발·빌드는 이 환경에서 발생한 Turbopack의 CSS 처리 프로세스 오류를 피하도록 Webpack으로 실행합니다.

| 구분          | 기술 / 방식                            | 용도                                                 |
| ------------- | -------------------------------------- | ---------------------------------------------------- |
| 프레임워크    | Next.js · App Router                   | 페이지, 레이아웃, 메타데이터 관리 및 정적 파일 생성  |
| UI            | React                                  | 기업·서비스 소개를 섹션별 컴포넌트로 구성            |
| 언어          | TypeScript                             | 컴포넌트 속성과 콘텐츠 데이터의 타입 관리            |
| 스타일        | Tailwind CSS 4 + 전역 CSS              | 반응형 레이아웃과 공통 스타일                        |
| CSS 빌드      | PostCSS · `@tailwindcss/postcss`       | Tailwind CSS 빌드 연결                               |
| 콘텐츠        | 로컬 TypeScript 데이터                 | 회사 정보, 서비스 소개 문구, 링크를 화면 코드와 분리 |
| 코드 검사     | ESLint                                 | 코드 품질과 작성 규칙 점검                           |
| 패키지 관리   | npm                                    | 의존성 설치와 개발·빌드 스크립트 실행                |
| 렌더링 / 배포 | SSG + Static Export + Cloudflare Pages | 빌드 시 페이지 생성 후 `out/`을 직접 업로드          |

초기 소개 콘텐츠는 저장소에서 관리하며, 별도 데이터베이스나 CMS는 도입하지 않습니다.

## Next.js를 사용하는 장점

소개 콘텐츠는 요청마다 달라지지 않으므로 **빌드할 때 각 라우트의 HTML을 미리 생성하는 SSG**가 적합합니다. **Static Export**는 생성한 결과물을 서버 없이 호스팅할 수 있는 정적 파일로 내보내는 배포 방식입니다.

### 1. 소개 콘텐츠를 미리 HTML로 생성

기업 소개와 서비스 설명처럼 요청마다 달라지지 않는 콘텐츠를 빌드 시 HTML로 생성할 수 있습니다. 방문 시 이미 생성된 파일을 제공하므로 콘텐츠를 요청마다 서버에서 렌더링할 필요가 없습니다. 정적 결과물은 CDN을 통해 전달하기에도 적합합니다. [정적 내보내기 공식 문서](https://nextjs.org/docs/app/guides/static-exports)

### 2. 검색 및 링크 공유 정보 관리

Metadata API로 페이지 제목, 설명, Open Graph 정보를 관리할 수 있습니다. 현재 소개·틸드·어썸·문의 페이지마다 제목과 설명을 정의했으며, 추후 공유 미리보기 이미지를 추가할 수 있습니다. [메타데이터 공식 문서](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)

### 3. 섹션별 유지보수

React 컴포넌트로 기업 소개, 틸드, 어썸 영역을 분리하면 각 영역의 내용과 디자인을 독립적으로 수정하기 쉽습니다. 공통 버튼과 헤더·푸터도 재사용할 수 있습니다. 소개 문구와 링크는 로컬 데이터 파일에 모아 관리합니다.

### 4. 정적 호스팅으로 운영 가능

`output: 'export'` 설정으로 HTML·CSS·JavaScript 파일을 생성하면, 운영 중인 Next.js 서버 없이 정적 파일을 제공하는 호스팅에 배포할 수 있습니다. 서버 운영 부담을 줄일 수 있으며, 실제 비용은 호스팅과 트래픽에 따라 달라집니다. 콘텐츠 변경 시에는 다시 빌드하고 배포합니다. [정적 배포 공식 문서](https://nextjs.org/docs/app/guides/static-exports)

### 5. 향후 페이지 확장

추후 서비스 상세, 채용, 공지사항 등이 필요하면 App Router 규칙에 따라 페이지를 추가할 수 있습니다. 공통 헤더·푸터를 재사용하면서 본문을 확장합니다. [프로젝트 구조 공식 문서](https://nextjs.org/docs/app/getting-started/project-structure)

## 폴더 구조

아래는 [AGENTS.md](AGENTS.md)의 규칙을 적용한 현재 폴더 구조입니다. 공통 컴포넌트는 `src/components/` 아래 용도별 폴더에, 특정 라우트 전용 컴포넌트는 해당 라우트의 `_components/` 아래 용도별 폴더에 배치합니다.

```text
jave-website/
├── docs/
│   ├── development-and-deployment.md # 실행·빌드·Cloudflare Pages 배포
│   ├── service-pages.md           # 서비스 콘텐츠·이미지 출처·미리보기·스타일
│   └── policies.md                # 약관 선정 근거·공식 출처·확정 전 항목
├── public/                       # URL로 직접 제공하는 정적 파일
│   ├── images/
│   │   ├── company/               # 기업 소개 이미지
│   │   ├── tilde/                 # brand/ 및 photography/ — 틸드 원본 자산
│   │   └── awesome/               # brand/ 및 photography/ — 어썸 추출 자산
│   ├── fonts/                     # services/ — 로컬 Pretendard·Noto Serif KR
│   ├── robots.txt                 # 크롤링 안내 자리표시자
│   └── sitemap.xml                # 사이트맵 자리표시자
├── src/
│   ├── app/
│   │   ├── layout.tsx             # 루트 레이아웃, 공통 헤더·푸터, 메타데이터
│   │   ├── page.tsx               # / — 기업 소개
│   │   ├── globals.css            # 스타일 초기화, 디자인 변수, 전역 스타일
│   │   ├── service-fonts.css      # 제공 HTML에서 추출한 로컬 폰트 선언
│   │   ├── _components/           # 소개 페이지(/) 전용 컴포넌트
│   │   │   ├── hero/
│   │   │   │   └── HeroSection.tsx
│   │   │   └── company/
│   │   │       ├── CompanySection.tsx
│   │   │       └── CompanyStory.tsx
│   │   ├── _data/
│   │   │   └── company.ts         # 소개 페이지 전용 기업 소개 문구
│   │   ├── tilde/
│   │   │   ├── page.tsx           # /tilde/
│   │   │   ├── _components/
│   │   │   │   ├── hero/          # 기존 영상과 소개 문구
│   │   │   │   ├── motion/
│   │   │   │   │   └── TildeReveal.tsx # 공통 ScrollReveal의 틸드 전용 전환 보완
│   │   │   │   ├── stories/       # 현재 하단의 세 가지 일상 이야기
│   │   │   │   │   ├── TildeConversation.tsx
│   │   │   │   │   ├── ConversationGallery.tsx # 가로 폭을 넓게 쓰는 13장 벽면 갤러리
│   │   │   │   │   ├── TildeToday.tsx
│   │   │   │   │   ├── TodayGallery.tsx # 중앙 세로형과 크기가 다른 주변 사진의 6장 갤러리
│   │   │   │   │   ├── TildeClubs.tsx
│   │   │   │   │   ├── StoryAccentText.tsx # 지정 문구 뒤의 반투명 타원
│   │   │   │   │   ├── StoryCopy.tsx
│   │   │   │   │   └── StoryPhoto.tsx
│   │   │   │   ├── connections/   # 이전 소개 카드 보관
│   │   │   │   ├── sports/        # 이전 테니스 섹션 보관
│   │   │   │   ├── mode/          # 이전 ON/OFF 미리보기 보관
│   │   │   │   ├── activities/    # 이전 활동 스크롤 장면 보관
│   │   │   │   └── app-preview/   # 이전 앱 디자인 시안 보관
│   │   │   ├── _data/
│   │   │   │   ├── service.ts     # 틸드 메타데이터·소개 및 이전 콘텐츠
│   │   │   │   ├── conversation-gallery.ts # 첫 갤러리 사진별 상대 위치·크기·비율
│   │   │   │   └── stories.ts     # 현재 하단 문구·장식과 사진 슬롯 24개(13·6·5장)
│   │   │   ├── _lib/
│   │   │   │   ├── create-gallery-columns.ts # 좁은 화면의 열 좌표·캔버스 높이 계산
│   │   │   │   └── create-gallery-selection.ts # 구간별 사진 선택·슬롯 좌표 연결
│   │   │   └── _types/
│   │   │       └── story-copy.ts # 이야기 문구와 강조 장식 타입
│   │   ├── awesome/
│   │   │   ├── page.tsx           # /awesome/
│   │   │   ├── _components/
│   │   │   │   ├── hero/          # AwesomeHero 및 장면 스타일
│   │   │   │   ├── statement/     # 브랜드 메시지
│   │   │   │   ├── letter/        # 편지 경험 소개
│   │   │   │   ├── journey/       # 첫 만남 초대장 스크롤 장면
│   │   │   │   ├── trust/         # 서비스 원칙 소개
│   │   │   │   └── app-preview/   # 탐색·편지·초대장 디자인 시안
│   │   │   └── _data/
│   │   │       └── service.ts     # 어썸 전용 콘텐츠
│   │   ├── policy/
│   │   │   ├── page.tsx           # /policy/ — 기본 이용약관
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx       # /policy/[slug]/ — SSG 약관 상세
│   │   │   ├── _components/
│   │   │   │   ├── intro/
│   │   │   │   │   └── PolicyIntro.tsx
│   │   │   │   ├── navigation/
│   │   │   │   │   └── PolicyNavigation.tsx
│   │   │   │   ├── article/
│   │   │   │   │   └── PolicyArticle.tsx
│   │   │   │   ├── notice/        # 초안 상태·시행일·확정 전 항목
│   │   │   │   ├── contents/      # 현재 문서의 조항별 목차
│   │   │   │   ├── section/       # 조항·문단·목록 렌더링
│   │   │   │   ├── references/    # 공식 참고 자료 링크
│   │   │   │   └── view/
│   │   │   │       └── PolicyView.tsx
│   │   │   ├── _data/
│   │   │   │   ├── documents/    # terms·privacy·location·payment·operation·youth·rights
│   │   │   │   ├── policy-content.ts # 문서별 본문 연결
│   │   │   │   └── policy-sources.ts # 공식 출처·초안 상태·기준일
│   │   │   ├── _lib/
│   │   │   │   └── get-policy.ts  # 약관 조회 및 알 수 없는 항목 처리
│   │   │   └── _types/
│   │   │       └── policy.ts
│   │   └── contact/
│   │       ├── page.tsx           # /contact/
│   │       ├── _components/
│   │       │   └── contact-info/
│   │       │       └── ContactSection.tsx
│   │       └── _data/
│   │           └── contact.ts     # 문의 페이지 전용 안내 문구
│   ├── components/                # 여러 라우트 또는 공통 레이아웃에서 공유
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   │   └── Header.tsx     # 공통 상단 영역 조합
│   │   │   └── footer/
│   │   │       ├── Footer.tsx     # 공통 푸터 조합·저작권 문구
│   │   │       └── FooterPolicyLinks.tsx # 공통 약관 링크 목록
│   │   ├── navigation/
│   │   │   ├── FloatingBar.tsx    # 중앙 floating bar
│   │   │   └── NavigationLink.tsx # 현재 경로에 따른 활성 메뉴 표시
│   │   ├── contact-link/
│   │   │   └── ContactLink.tsx    # 문의 링크 컴포넌트 (현재 헤더에서는 사용하지 않음)
│   │   ├── page-intro/
│   │   │   └── PageIntro.tsx      # 공통 페이지 제목·설명
│   │   ├── device-preview/        # 공통 휴대폰 미리보기 프레임
│   │   ├── motion/                # ScrollReveal·ScrollScene
│   │   ├── service-heading/       # 공통 서비스 섹션 제목
│   │   └── service-cta/           # 출시 준비·문의·다른 서비스 링크
│   └── data/                      # 여러 화면에서 공유하는 콘텐츠·설정
│       ├── company.ts             # 공통 회사 이름 및 기본 설명
│       ├── navigation.ts          # 메뉴 이름과 라우트 경로
│       └── policies.ts            # 푸터·약관 화면이 공유하는 항목·순서
├── next.config.ts                 # Next.js 및 정적 내보내기 설정
├── next-env.d.ts                  # Next.js가 자동 생성하는 타입 선언
├── tsconfig.json                  # TypeScript 설정
├── postcss.config.mjs             # Tailwind CSS PostCSS 설정
├── eslint.config.mjs              # ESLint 설정
├── .prettierrc.json               # 코드·CSS 줄바꿈·들여쓰기 규칙
├── .prettierignore                # 생성물·원본 자산 포맷 제외
├── package.json                   # 의존성 및 실행 스크립트
├── package-lock.json              # npm 의존성 버전 고정
├── .gitignore                     # 의존성·빌드 결과물 등 제외
├── AGENTS.md                      # SRP, 코드 작성 및 폴더링 규칙
└── README.md
```

일반 스타일은 Tailwind CSS, 브랜드별 복잡한 앱 시안과 스크롤 장면은 컴포넌트 옆의 CSS Modules를 사용합니다. 모든 소스 스타일은 Prettier 규칙으로 정리합니다. 서비스 이미지와 폰트는 제공 자료에서 추출해 로컬로 제공합니다. 파비콘과 Open Graph 이미지는 추후 `src/app/`에 추가합니다. `robots.txt`와 `sitemap.xml`은 배포 도메인과 공개 정책 확정 후 작성합니다. `out/`은 빌드로 생성되므로 소스 구조에 포함하지 않습니다.

틸드의 이전 카드·테니스·ON/OFF·활동·앱 시안 파일은 저장소에 보관하지만 현재 `/tilde/`에서는 렌더링하지 않습니다. 틸드 하단의 기존 `ServiceCta`도 표시하지 않으며, 어썸에서 사용하는 공통 컴포넌트와 기존 자산은 유지합니다. 현재 틸드 본문은 `TildeHero`, `TildeConversation`, `TildeToday`, `TildeClubs` 순서로 조합하고 공통 푸터로 이어집니다.

컴포넌트 하나당 파일 하나를 사용하고, `page.tsx`는 메타데이터와 컴포넌트 조합에 집중합니다. 한 라우트에서만 사용하는 컴포넌트를 공통 폴더에 넣지 않으며, 실제로 여러 라우트에서 필요해지면 공통으로 옮깁니다. 다른 라우트의 `_components/`를 직접 참조하지 않습니다.

페이지 전용 데이터·훅·유틸리티·타입은 필요할 때 해당 라우트의 `_data/`, `_hooks/`, `_lib/`, `_types/`로 분리합니다. 실제 공통 모듈은 `src/data/`, `src/hooks/`, `src/lib/`, `src/types/`에서 관리합니다.

헤더는 공통 상단 영역을 조합하고, `FloatingBar`는 영문 중앙 메뉴, `NavigationLink`는 현재 경로에 따른 활성 표시를 담당합니다. 모든 라우트에서 같은 메뉴 컴포넌트를 사용하고 별도 틸드 메뉴는 두지 않습니다. 문의는 어썸 본문의 안내 링크와 기존 `/contact/` 라우트에서 제공합니다. 회사의 `CompanyStory`는 브랜드 관점을, 틸드의 `TildeFilmControl`은 영상 일시정지·이어 재생 버튼을 담당합니다. 페이지별 소개 데이터는 각 라우트의 `_data/`에서 관리합니다.

## 라우팅 원칙

- `/`는 `src/app/page.tsx`가 담당하는 기업 소개 페이지입니다.
- `/tilde/`, `/awesome/`, `/contact/`는 각 폴더의 `page.tsx`가 담당하는 독립 페이지입니다.
- `/policy/`와 `/policy/[slug]/`는 통합 약관 화면을 공유합니다. `generateStaticParams`로 등록한 7개 항목을 빌드 시 생성하도록 구성하며, 등록하지 않은 항목은 404로 처리합니다. [정적 동적 라우트 생성 공식 문서](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
- 메뉴는 `next/link`로 연결합니다. URL이 바뀌고 공통 레이아웃 내부의 본문이 전환됩니다.
- `components/`와 `data/`, 각 라우트의 `_components/` 등 내부 구현 폴더는 URL을 생성하지 않습니다. 페이지 전용 컴포넌트는 해당 라우트에서 조합합니다.
- 활성 메뉴의 `NavigationLink`, 스크롤 효과의 `ScrollReveal`·`ScrollScene`, 틸드 영상 재생의 `TildeHeroFilm`에 Client Component를 사용합니다. 현재 틸드 하단의 이야기 섹션과 페이지 본문은 Server Component를 기본으로 하며 빌드 시 HTML로 생성합니다.
