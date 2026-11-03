export const policyItems = [
    { slug: "terms", label: "이용약관", emphasized: false },
    { slug: "location", label: "위치정보 이용약관", emphasized: true },
    { slug: "privacy", label: "개인정보 처리방침", emphasized: true },
    { slug: "operation", label: "운영정책", emphasized: false },
    { slug: "brand", label: "브랜드보호정책", emphasized: false },
    { slug: "rights", label: "권리침해신고안내", emphasized: false },
] as const;

export type PolicySlug = (typeof policyItems)[number]["slug"];

export const defaultPolicy = policyItems[0];
