# JAVE 프로젝트 개발 규칙

이 규칙은 `jave-website` 저장소 전체에 적용한다. 프로젝트 코드를 작성하거나 수정할 때 반드시 따른다.

## 프로젝트 기준

- Next.js App Router, React, TypeScript, Tailwind CSS를 사용한다.
- 소개 `/`, 틸드 `/tilde/`, 어썸 `/awesome/`, 문의 `/contact/`를 독립 라우트로 구성한다.
- 통합 약관은 `/policy/`, 약관별 상세는 `/policy/[slug]/`로 구성한다. `/policy/`에서는 첫 번째 이용약관을 표시하고, 등록된 항목은 `generateStaticParams`로 정적 생성한다.
- SSG와 `output: "export"`를 유지하고, 정적 빌드 결과인 `out/`을 Cloudflare Pages에 직접 업로드한다.
- 실행·빌드·배포 상세 절차는 [개발 및 배포 가이드](docs/development-and-deployment.md)를 기준으로 한다.
- 프로젝트 개요와 구조는 [README](README.md)를 참고한다.

## 필수 설계 원칙: SRP

- **SRP(단일 책임 원칙)를 반드시 준수한다.** 파일·컴포넌트·함수는 각각 하나의 명확한 책임을 가진다.
- 페이지 구성, 개별 UI 렌더링, 상호작용, 데이터 정의, 유틸리티 처리를 한 파일에 몰아넣지 않는다.
- **컴포넌트 하나당 파일 하나를 사용한다.** 분리 가능한 컴포넌트를 페이지 파일이나 다른 컴포넌트 파일 안에 함께 정의하지 않는다.
- 독립적으로 이름을 붙일 수 있는 화면 영역, 반복되는 UI, 자체 상태나 이벤트를 가진 UI는 별도 컴포넌트로 분리한다.
- 단순한 태그 하나를 기계적으로 파일로 나누기보다, 역할이 명확한 UI 단위로 분리한다.
- 파일 길이만으로 분리 여부를 판단하지 않는다. 서로 다른 변경 이유나 책임이 생기면 파일이 짧더라도 분리한다.
- 관련 없는 작업을 하나의 컴포넌트나 여러 모드를 가진 거대한 공통 컴포넌트로 합치지 않는다.

## 컴포넌트 위치 결정

### 공통 컴포넌트: `src/components/`

- 여러 라우트에서 실제로 재사용하는 컴포넌트는 `src/components/`에 둔다.
- 공통 레이아웃에서 모든 페이지에 제공하는 헤더, floating bar, 문의 버튼, 푸터도 공통 컴포넌트에 해당한다. 호출 위치가 한 곳이어도 공통 레이아웃의 일부라면 공통으로 분류한다.
- `components/` 바로 아래에 파일을 나열하지 않는다. **쓰임새를 나타내는 폴더를 먼저 만들고 그 안에 파일을 추가한다.**
- 예: `components/layout/header/Header.tsx`, `components/layout/footer/Footer.tsx`, `components/navigation/FloatingBar.tsx`, `components/page-intro/PageIntro.tsx`.
- `common`, `misc`처럼 역할을 알 수 없는 포괄적인 폴더에 모든 컴포넌트를 모으지 않는다. `ui` 역시 관련 없는 파일을 쌓는 용도로 사용하지 않는다.
- 아직 사용하지 않는 범용 컴포넌트나 폴더를 미리 만들지 않는다. 실제 재사용 필요가 생기면 공통으로 추출한다.

### 라우트 전용 컴포넌트: 해당 라우트의 `_components/`

- **특정 라우트에서만 사용하는 컴포넌트는 `src/components/`에 두지 않는다.** 재사용 가능한 형태로 작성했더라도 실제 사용 범위가 한 라우트라면 해당 라우트에 둔다.
- 해당 `page.tsx`와 같은 위치에 `_components/`를 만들고, 그 안에서 쓰임새별 폴더와 파일로 정리한다.
- 소개 페이지 `/` 전용 컴포넌트는 `src/app/_components/`에 둔다.
- 틸드 전용은 `src/app/tilde/_components/`, 어썸 전용은 `src/app/awesome/_components/`, 문의 전용은 `src/app/contact/_components/`에 둔다.
- 다른 라우트의 `_components/`를 직접 가져오지 않는다. 둘 이상의 라우트에서 필요해지면 적절한 `src/components/` 하위 폴더로 이동한다.
- `/policy/`와 `/policy/[slug]/`처럼 같은 부모 라우트 아래의 화면은 부모 라우트의 `_components/`, `_data/`, `_lib/`, `_types/`를 공유할 수 있다. 서로 독립된 다른 라우트의 내부 구현을 참조하는 용도로 사용하지 않는다.
- 공통 컴포넌트가 특정 라우트의 `_components/`나 라우트 전용 데이터에 의존하지 않게 한다. 필요한 값은 명시적인 props로 전달한다.

### 구조 예시

아래는 코드 추가·정리 시 따를 배치 예시다. 예시의 모든 폴더와 파일을 미리 생성할 필요는 없다.

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── _components/                    # 소개 페이지 전용
│   │   ├── hero/
│   │   │   └── HeroSection.tsx
│   │   └── company/
│   │       └── CompanySection.tsx
│   ├── tilde/
│   │   ├── page.tsx
│   │   └── _components/
│   │       ├── hero/
│   │       │   └── TildeHero.tsx
│   │       └── app-preview/
│   │           └── TildeMatchScreen.tsx
│   ├── awesome/
│   │   ├── page.tsx
│   │   └── _components/
│   │       ├── hero/
│   │       │   └── AwesomeHero.tsx
│   │       └── app-preview/
│   │           └── AwesomeDiscoverScreen.tsx
│   └── contact/
│       ├── page.tsx
│       └── _components/
│           └── contact-info/
│               └── ContactSection.tsx
├── components/                         # 여러 페이지에서 공유
│   ├── layout/
│   │   ├── header/
│   │   │   └── Header.tsx
│   │   └── footer/
│   │       └── Footer.tsx
│   ├── navigation/
│   │   └── FloatingBar.tsx
│   └── page-intro/
│       └── PageIntro.tsx
└── data/                               # 실제 공통 콘텐츠와 설정
```

기존 페이지 전용 섹션은 각 라우트의 `_components/`로, 공통 UI는 용도별 `src/components/` 하위 폴더로 정리되어 있다. 공통 헤더는 `FloatingBar`와 `ContactLink`를 조합하고, 활성 경로 표시는 Client Component인 `NavigationLink`에서 담당한다. 현재 전체 구조는 README를 참고하며, 이후에도 파일 이동 시 import와 관련 문서를 함께 갱신한다.

## 페이지·레이아웃·데이터의 책임

- `page.tsx`는 해당 라우트의 메타데이터 정의와 컴포넌트 조합을 담당한다. 상세 섹션 구현이나 대량의 콘텐츠 데이터를 직접 작성하지 않는다.
- 루트 `layout.tsx`는 문서 구조, 전역 스타일 연결, 공통 헤더·본문·푸터 구성을 담당한다. 특정 페이지의 세부 내용을 포함하지 않는다.
- 페이지 전용 컴포넌트는 공통 컴포넌트를 조합할 수 있다. 공통 컴포넌트는 라우트 구현을 알지 못하도록 작성한다.
- 여러 화면에서 쓰는 회사 정보·내비게이션 등은 `src/data/`에서 관리한다.
- 약관 항목·순서·경로 식별자는 푸터와 약관 화면이 공유하므로 `src/data/policies.ts`에서 관리한다. 실제 본문은 `src/app/policy/_data/documents/`에 문서별로 분리하고 `policy-content.ts`에서 연결한다. 공식 출처·초안 상태·기준일은 `policy-sources.ts`에서 관리한다.
- 약관은 실제 기능과 개인정보 처리 내역을 기준으로 작성하고 공개 의무·가입 동의·조건부 적용·안전 운영 기준을 구분한다. 미정인 사업자·담당자·연락처·수탁자·요금·시행일을 지어내지 않으며 초안 표시는 확정 전까지 유지한다. 세부 작성 기준은 `docs/policies.md`를 참고한다.
- 특정 라우트에서만 쓰는 데이터, 훅, 유틸리티, 타입이 필요하면 해당 라우트의 `_data/`, `_hooks/`, `_lib/`, `_types/`에 역할별로 분리한다. 필요할 때만 폴더를 만든다.
- 실제로 공통으로 사용되는 훅·유틸리티·타입은 각각 `src/hooks/`, `src/lib/`, `src/types/`에 둔다. UI가 아닌 코드를 `components/`에 모으지 않는다.

## 코드 작성 규칙

- React 컴포넌트는 TypeScript와 함수형 컴포넌트로 작성한다.
- 컴포넌트 파일과 이름은 `PascalCase`, 일반 함수·변수는 `camelCase`, 용도별 폴더와 라우트는 `kebab-case`를 사용한다. `page.tsx`, `layout.tsx`, `_components` 등 Next.js 규칙 이름은 그대로 따른다.
- props의 타입과 컴포넌트의 의도를 명확히 드러낸다. 불필요한 `any`, 타입 오류를 숨기는 단언, 검사 비활성화를 피한다.
- 상태와 이벤트 처리는 그 책임을 가진 가장 작은 컴포넌트에 둔다. 서로 다른 UI의 상태와 처리를 한 곳에 몰아넣지 않는다.
- Server Component를 기본으로 사용한다. 브라우저 API, 상태, 이벤트, 현재 경로 조회가 필요한 컴포넌트에만 `"use client"`를 선언한다.
- 클라이언트 기능 때문에 페이지 전체나 루트 레이아웃을 Client Component로 바꾸지 않는다.
- 내부 라우트 이동에는 `next/link`를 사용한다. 링크 이동은 링크, 상태 변경이나 동작 실행은 버튼으로 구현한다.
- 클래스와 스타일은 기존 Tailwind CSS 구성을 따른다. 전역 CSS에는 전역에 적용할 규칙만 작성한다.
- 여백·정렬·색상·타이포그래피·반응형 배치는 Tailwind 클래스를 우선한다. CSS Modules는 앱 디자인 시안의 복잡한 내부 표현이나 스크롤 변수와 연동되는 시각 효과 등 필요한 범위에 한정한다.
- CSS를 한 줄로 압축해서 작성하지 않는다. 선택자·속성·미디어 쿼리를 줄바꿈하고 프로젝트 Prettier 설정에 따라 들여쓴다. `npm run format`으로 정리하고 `npm run format:check`로 확인한다.
- 비밀값을 소스나 공개 콘텐츠에 넣지 않는다. 회사 정보·서비스 기능·연락처 등 확인되지 않은 내용을 실제 사실처럼 작성하지 않는다.

## 공통 화면 및 반응형 규칙

- 페이지는 화면의 전체 너비를 사용한다. 공통 레이아웃에 임의의 고정 최대 너비를 추가하지 않는다.
- 최소 높이는 `100dvh`를 기준으로 하고, 콘텐츠가 길어지면 자연스럽게 세로 스크롤한다. 고정 높이 때문에 본문이 잘리지 않게 한다.
- 중앙 floating bar의 `소개 / 틸드 / 어썸`, 우측 상단 문의 버튼, 공통 푸터를 유지하고 라우트별 본문을 조합한다.
- 모바일·태블릿·데스크톱에서 여백, 글자 크기, 열 수, 정렬을 조정한다. 좁은 화면에서는 메뉴와 문의 버튼이 겹치지 않도록 재배치한다.
- 콘텐츠의 줄 길이는 가독성을 위해 제한할 수 있지만, 전체 레이아웃을 고정 폭으로 제한하지 않는다.
- 가로 스크롤이나 잘림을 숨기는 대신 원인이 되는 크기·줄바꿈·배치를 수정한다.
- 시맨틱 HTML, 키보드 포커스, 현재 메뉴의 `aria-current`, 이미지 대체 텍스트 등 접근성을 고려한다.

## 정적 배포 및 검증 규칙

- `output: "export"`, `trailingSlash: true`와 현재 정적 이미지 처리 구성을 유지한다.
- 요청마다 실행되는 서버 기능, 인증 서버, Server Actions, ISR, 서버 전용 문의 처리를 정적 페이지 작업에 임의로 추가하지 않는다.
- 패키지 관리는 npm과 `package-lock.json`으로 통일한다. 현재 TypeScript 6.0 및 Webpack 설정의 호환성을 고려한다.
- 린트·타입검사·빌드·테스트는 사용자가 명시적으로 요청한 경우에만 실행한다. 소스 변경 후에도 자동으로 실행하지 않는다. 실행 방법을 문서에 안내하는 것은 가능하지만 안내를 실행 승인으로 간주하지 않는다.
- 문서를 변경하면 내용·경로·링크를 확인한다.
- 폴더나 파일을 이동하면 모든 import 경로와 관련 문서를 함께 수정한다.
- UI 변경 시 모바일·태블릿·데스크톱에서 메뉴 겹침, 가로 넘침, 콘텐츠 잘림, 푸터 배치를 확인한다.
- `node_modules/`, `.next/`, `out/` 등 생성물은 직접 수정하거나 커밋하지 않는다.
- 실행·빌드·배포 상세 절차는 `docs/development-and-deployment.md`에 모으고 README에는 중복해서 작성하지 않는다.
- 기존 사용자 변경사항을 보존하며, 요청과 관련 없는 리팩토링이나 의존성 변경을 섞지 않는다.
- 커밋할 때는 한글 Conventional Commits 형식인 `<type>: <변경사항 요약>`을 사용하고 제목 끝에 마침표를 붙이지 않는다.
