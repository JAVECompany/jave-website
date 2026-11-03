import type { PolicySlug } from "../../../data/policies";

export type PolicyDocument = {
    slug: PolicySlug;
    label: string;
    description: string;
    body: string;
};
