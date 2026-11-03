import { company } from "../../../../data/company";
import type { PolicyDocument } from "../../_types/policy";

type PolicyArticleProps = {
    policy: PolicyDocument;
};

export default function PolicyArticle({ policy }: PolicyArticleProps) {
    return (
        <article aria-labelledby="policy-title" className="mt-12 sm:mt-20">
            <div className="border-b border-neutral-700 pb-6 sm:pb-8">
                <h1 id="policy-title" className="text-2xl leading-snug font-semibold tracking-tight sm:text-3xl">
                    {company.name} {policy.label}
                </h1>
            </div>
            <div className="mt-8 space-y-6 sm:mt-12">
                <p className="text-sm leading-8 text-neutral-700 sm:text-base">{policy.description}</p>
                <section aria-labelledby="policy-status-title" className="border border-neutral-200 bg-neutral-100 px-5 py-6 sm:px-8 sm:py-8">
                    <h2 id="policy-status-title" className="text-sm font-semibold text-neutral-900">준비 중</h2>
                    <p className="mt-3 max-w-prose text-sm leading-8 whitespace-pre-line text-neutral-600">{policy.body}</p>
                </section>
            </div>
        </article>
    );
}
