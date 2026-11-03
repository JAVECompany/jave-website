import type { PolicySlug } from "../../../data/policies";

export type PolicySectionContent = {
    id: string;
    title: string;
    paragraphs?: readonly string[];
    items?: readonly string[];
};

export type PolicyReference = {
    label: string;
    href: string;
    note: string;
};

export type PolicyDocumentContent = {
    description: string;
    scope: string;
    reviewNeeded: readonly string[];
    sections: readonly PolicySectionContent[];
    references: readonly PolicyReference[];
};

export type PolicyDocument = PolicyDocumentContent & {
    slug: PolicySlug;
    label: string;
};
