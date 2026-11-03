import { company } from "../../../../data/company";
import type { PolicyDocument } from "../../_types/policy";
import PolicyDraftNotice from "../notice/PolicyDraftNotice";
import PolicyContents from "../contents/PolicyContents";
import PolicyDocumentSection from "../section/PolicyDocumentSection";
import PolicyReferences from "../references/PolicyReferences";

type PolicyArticleProps = {
    policy: PolicyDocument;
};

export default function PolicyArticle({ policy }: PolicyArticleProps) {
    return (
        <article aria-labelledby="policy-title" className="mt-12 sm:mt-20">
            <div className="border-b border-neutral-700 pb-6 sm:pb-8">
                <p className="mb-3 text-xs leading-6 text-neutral-500">{policy.scope}</p>
                <h1
                    id="policy-title"
                    className="text-2xl leading-snug font-semibold tracking-tight sm:text-3xl"
                >
                    {company.name} {policy.label}
                </h1>
            </div>
            <div className="mt-8 sm:mt-12">
                <p className="max-w-4xl text-sm leading-8 break-keep text-neutral-700 sm:text-base">
                    {policy.description}
                </p>
                <PolicyDraftNotice reviewNeeded={policy.reviewNeeded} />
                <PolicyContents sections={policy.sections} />
                <div className="mt-10 divide-y divide-neutral-200 sm:mt-14">
                    {policy.sections.map((section) => (
                        <PolicyDocumentSection key={section.id} section={section} />
                    ))}
                </div>
                <PolicyReferences references={policy.references} />
            </div>
        </article>
    );
}
