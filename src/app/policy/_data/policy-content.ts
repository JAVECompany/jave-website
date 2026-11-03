import type { PolicySlug } from "../../../data/policies";
import type { PolicyDocument } from "../_types/policy";

const pendingBody = "본문은 현재 준비 중입니다. 내용이 확정되는 대로 이 페이지에 안내하겠습니다.";

export const policyContent: Record<PolicySlug, Pick<PolicyDocument, "description" | "body">> = {
    terms: {
        description: "JAVE 서비스 이용에 관한 약관을 안내할 예정입니다.",
        body: pendingBody,
    },
    location: {
        description: "위치정보 이용과 관련된 약관을 안내할 예정입니다.",
        body: pendingBody,
    },
    privacy: {
        description: "개인정보의 수집·이용·보관·파기에 관한 처리방침을 안내할 예정입니다.",
        body: pendingBody,
    },
    operation: {
        description: "서비스 운영 기준과 이용 시 참고할 정책을 안내할 예정입니다.",
        body: pendingBody,
    },
    brand: {
        description: "JAVE와 서비스 브랜드의 보호 및 사용에 관한 정책을 안내할 예정입니다.",
        body: pendingBody,
    },
    rights: {
        description: "권리침해 신고와 관련된 안내를 제공할 예정입니다.",
        body: pendingBody,
    },
};
