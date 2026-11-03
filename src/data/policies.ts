export const policyItems = [
    { slug: "terms", label: "이용약관", emphasized: false },
    { slug: "privacy", label: "개인정보 처리방침", emphasized: true },
    { slug: "location", label: "위치기반서비스 이용약관", emphasized: false },
    { slug: "payment", label: "유료서비스·환불정책", emphasized: false },
    { slug: "operation", label: "커뮤니티·안전정책", emphasized: false },
    { slug: "youth", label: "청소년보호정책", emphasized: false },
    { slug: "rights", label: "권리침해 신고안내", emphasized: false },
] as const;

export type PolicySlug = (typeof policyItems)[number]["slug"];

export const defaultPolicy = policyItems[0];
