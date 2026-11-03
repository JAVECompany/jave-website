# 어썸·틸드 서비스 소개 페이지

제공된 기획서·브랜드 가이드·화면 디자인 HTML을 바탕으로 `/awesome/`, `/tilde/`를 구현했습니다. 두 서비스는 출시 준비 중이며, 소개 화면의 인물·일정·활동·회원 수는 디자인 예시입니다. 실제 가입·인증·매칭·결제는 실행하지 않습니다.

## 브랜드와 콘텐츠 기준

| 서비스 | 제공 자료                                                                                                             | 페이지 구성                                                |
| ------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 어썸   | `제품 기획서 초안(기능명세, 화면정의).html`, `어썸_화면디자인_정의서_초안.html`, `어썸, 가까움에서 피어나는 인연.png` | 네이비·골드, 확인된 프로필, 편지, 상호 동의, 만남 초대장   |
| 틸드   | `브랜드 가이드.html`, `서비스 기획서.html`, `screens/`, `brand-assets/`, `design-assets/photography/`                 | 올리브·오트, 취향 기반 만남, 번개모임, 동아리, 만남 ON/OFF |

확정되지 않은 심사 가격·자산 기준·운영 수치나 사업 실적은 홍보 문구로 사용하지 않았습니다. 자료에 나온 임시 법인명을 현재 회사명으로 사용하지 않았으며, 공통 사이트의 JAVE 표기를 유지합니다.

[카카오 홈페이지](https://www.kakaocorp.com/page/)는 큰 비주얼과 여백, 순차적인 스크롤 스토리텔링의 참고로 사용했습니다. 로고·사진·문구는 카카오에서 가져오지 않았습니다.

## 추출한 이미지와 폰트

사용할 브랜드 자산과 샘플 이미지는 원본 폴더에서 분리해 서비스별 `public/images/`에 배치했습니다. 원본 HTML 전체나 내부 사업 기획서를 공개 자산으로 복사하지 않았습니다.

```text
public/
├── images/
│   ├── awesome/
│   │   ├── brand/
│   │   │   ├── brand-board.png
│   │   │   └── app-icon.png
│   │   └── photography/
│   │       ├── profile-sample.webp
│   │       ├── app-design-preview.webp
│   │       └── connection-scene.webp
│   └── tilde/
│       ├── brand/
│       │   ├── tilde-symbol.webp
│       │   ├── tilde-symbol.svg
│       │   ├── tilde-app-icon.svg
│       │   ├── tilde-lockup.svg
│       │   ├── tilde-lockup.png
│       │   └── brand-tokens.json
│       └── photography/
│           ├── community.webp
│           ├── football.webp
│           ├── reading.webp
│           ├── portrait-woman.webp
│           └── portrait-man.webp
└── fonts/
    └── services/                  # 제공 HTML에 포함된 WOFF2 33개
```

- 어썸의 `brand-board.png`는 제공된 물결형 브랜드 보드 원본입니다. `app-icon.png`는 디자인 HTML의 `logo-data.wave.crop` 좌표에 맞춰 추출했습니다.
- 어썸의 사진과 앱 디자인 예시는 같은 브랜드 보드의 해당 영역을 잘라 WebP로 저장했습니다. 새로운 인물 사진을 생성한 것이 아닙니다.
- 틸드의 브랜드 SVG·PNG·색상 토큰과 사진 5개는 제공 자료에서 복사했습니다. `tilde-symbol.webp`는 원본 SVG의 래스터와 viewBox 영역을 사용한 가벼운 표시용 이미지입니다.
- Pretendard Variable과 Noto Serif KR는 어썸 HTML의 `font-data`에서 추출했습니다. `src/app/service-fonts.css`는 원본의 글꼴 선언과 Unicode 범위를 유지하고 로컬 WOFF2 경로를 연결합니다. 실행 시 외부 폰트 서버에 의존하지 않습니다.

## 앱 화면의 컴포넌트화

| 서비스 | 원본 디자인 화면        | 소개 페이지의 컴포넌트                                        |
| ------ | ----------------------- | ------------------------------------------------------------- |
| 어썸   | AW-11 탐색 홈           | `awesome/_components/app-preview/AwesomeDiscoverScreen.tsx`   |
| 어썸   | AW-15 편지 작성         | `awesome/_components/app-preview/AwesomeLetterScreen.tsx`     |
| 어썸   | AW-31 만남 초대장       | `awesome/_components/app-preview/AwesomeInvitationScreen.tsx` |
| 틸드   | `screens/05-match.html` | `tilde/_components/app-preview/TildeMatchScreen.tsx`          |
| 틸드   | `screens/18-flash.html` | `tilde/_components/app-preview/TildeFlashScreen.tsx`          |
| 틸드   | `screens/22-clubs.html` | `tilde/_components/app-preview/TildeClubScreen.tsx`           |

위 경로의 시작점은 `src/app/`입니다. 원본 디자인의 색상·주요 문구·정보 흐름을 참고해 소개용 React 미리보기로 재구성했습니다. 원본 HTML을 iframe이나 실행 스크립트로 삽입하지 않습니다. 휴대폰 프레임은 공통 `src/components/device-preview/DevicePreview.tsx`를 사용합니다.

휴대폰 안의 화면은 정적 디자인 예시입니다. 틸드의 만남 ON/OFF 스위치만 소개용 상태를 변경하며 계정 설정을 저장하지 않습니다. 페이지의 실제 행동 버튼은 섹션 이동·문의 페이지·다른 서비스 페이지로 연결됩니다.

## 스크롤 효과와 접근성

- `ScrollReveal`: 화면 진입 시 콘텐츠를 한 번 부드럽게 표시합니다. 처음부터 화면에 있는 콘텐츠와 JavaScript를 실행하지 않는 환경에서는 본문을 숨기지 않습니다.
- `ScrollScene`: `requestAnimationFrame`으로 스크롤 진행률을 CSS 변수에 전달해 휴대폰과 사진을 천천히 이동합니다. React 상태를 매 프레임 갱신하지 않으며 화면 밖에서는 업데이트를 줄입니다.
- 넓고 충분히 높은 화면에서는 어썸의 초대장 장면과 틸드의 활동 장면을 sticky 방식으로 보여줍니다. 모바일·좁은 화면·낮은 화면에서는 자연스러운 세로 배치로 전환합니다.
- `prefers-reduced-motion: reduce`에서는 연속 이동과 전환 효과를 줄이고 콘텐츠를 표시합니다.
- 모든 서비스 본문은 Server Component를 기본으로 하며, 스크롤 제어와 ON/OFF 미리보기만 Client Component로 사용합니다. 기존 SSG 배포 방식을 유지합니다.

## 스타일 관리

일반 레이아웃·타이포그래피·색상·반응형 배치는 Tailwind를 우선합니다. 공통 제목·휴대폰 프레임·출시 안내와 일반 콘텐츠 영역은 Tailwind 클래스로 작성했습니다.

CSS Modules는 브랜드별 겹친 비주얼, sticky 스크롤 장면, 원본 앱 시안의 세밀한 내부 디자인에 사용합니다. 컴포넌트 옆에 두고 선택자와 속성을 읽기 쉬운 여러 줄 형식으로 작성합니다. Prettier 설정과 실행 방법은 [개발 및 배포 가이드](development-and-deployment.md)를 참고합니다.

소개 문구와 항목은 각 서비스의 `_data/service.ts`, 사진과 로고는 `public/images/<서비스>/`에서 교체합니다. 공통 화면 구조와 로컬 자산은 [README](../README.md#폴더-구조)를 참고합니다.
