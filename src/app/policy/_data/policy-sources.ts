import type { PolicyReference } from "../_types/policy";

export const policySources = {
    privacy: {
        label: "개인정보 보호법",
        href: "https://www.law.go.kr/LSW/lsInfoP.do?lsId=011357",
        note: "수집·이용, 최소 수집, 별도 동의, 파기, 처리방침 공개 및 정보주체의 권리",
    },
    privacyGuide: {
        label: "개인정보보호위원회 개인정보 처리방침 작성지침 (2026.4.)",
        href: "https://pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS217&mCode=D010030000.Updated&nttId=12018",
        note: "목적·항목·보유기간, 위탁·국외이전, 권리행사 창구 등 공개 항목 구성",
    },
    location: {
        label: "위치정보의 보호 및 이용 등에 관한 법률",
        href: "https://www.law.go.kr/lsInfoP.do?lsId=009882",
        note: "제16조, 제19조, 제21조의2, 제23조 및 제24조의 보호·동의·파기·권리행사 기준",
    },
    commerce: {
        label: "전자상거래 등에서의 소비자보호에 관한 법률",
        href: "https://law.go.kr/LSW/lsInfoP.do?chrClsCd=010102&lsId=009318&lsiSeq=125882&viewCls=lsPtnThdCmp",
        note: "계약 전 거래조건 안내, 청약철회, 디지털콘텐츠 예외 및 환급",
    },
    retention: {
        label: "전자상거래법 시행령 제6조",
        href: "https://www.law.go.kr/LSW/lsSideInfoP.do?docCls=jo&joBrNo=00&joNo=0006&lsiSeq=269055&urlMode=lsScJoRltInfoR",
        note: "해당 거래가 발생한 경우 보존해야 하는 거래기록의 종류와 기간",
    },
    digitalContent: {
        label: "디지털콘텐츠 표준약관",
        href: "https://www.law.go.kr/LSW/admRulLsInfoP.do?admRulSeq=2100000216089",
        note: "이용계약, 서비스 제공, 계약 해지 및 과도한 환불 제한 방지의 참고 기준",
    },
    youth: {
        label: "정보통신망법 제42조의3 및 청소년 보호 관련 조항",
        href: "https://www.law.go.kr/LSW/lsInfoP.do?ancYnChk=0&chrClsCd=010202&efYd=20261002&lsiSeq=290001",
        note: "청소년 유해정보 보호와 법정 요건에 해당하는 사업자의 보호책임자 지정",
    },
    takedown: {
        label: "정보통신망법 제44조의2",
        href: "https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=900628377",
        note: "공개 정보에 의한 권리침해의 삭제 요청·임시조치·통지 절차",
    },
    copyright: {
        label: "저작권법 제103조",
        href: "https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1033064063",
        note: "저작권 침해의 복제·전송 중단과 재개 요청 절차",
    },
} satisfies Record<string, PolicyReference>;

export const policyDraft = {
    version: "초안 v0.1",
    updatedAt: "2026-11-03",
    effectiveDate: "미정 · 정식 약관 공개 시 안내",
    notice: "틸드·어썸 출시를 준비하며 작성한 검토용 초안입니다. 현재 홈페이지에서 앱 가입·결제·위치정보 수집은 제공하지 않습니다. 운영 주체와 실제 처리 내역, 상품 조건을 확정하고 법률 검토를 거쳐 정식 시행일을 안내합니다. 이 페이지 열람만으로 약관 동의가 이루어지지 않습니다.",
};
