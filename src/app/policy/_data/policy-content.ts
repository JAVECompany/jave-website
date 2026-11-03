import type { PolicySlug } from "../../../data/policies";
import type { PolicyDocumentContent } from "../_types/policy";
import { termsPolicy } from "./documents/terms";
import { privacyPolicy } from "./documents/privacy";
import { locationPolicy } from "./documents/location";
import { paymentPolicy } from "./documents/payment";
import { operationPolicy } from "./documents/operation";
import { youthPolicy } from "./documents/youth";
import { rightsPolicy } from "./documents/rights";

export const policyContent: Record<PolicySlug, PolicyDocumentContent> = {
    terms: termsPolicy,
    privacy: privacyPolicy,
    location: locationPolicy,
    payment: paymentPolicy,
    operation: operationPolicy,
    youth: youthPolicy,
    rights: rightsPolicy,
};
