import { notFound } from "next/navigation";
import { policyItems } from "../../../data/policies";
import { policyContent } from "../_data/policy-content";
import type { PolicyDocument } from "../_types/policy";

export function getPolicy(slug: string): PolicyDocument {
    const policy = policyItems.find((item) => item.slug === slug);

    if (!policy) {
        notFound();
    }

    return { ...policy, ...policyContent[policy.slug] };
}
