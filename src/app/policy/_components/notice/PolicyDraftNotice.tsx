import { policyDraft } from "../../_data/policy-sources";

type PolicyDraftNoticeProps = {
    reviewNeeded: readonly string[];
};

export default function PolicyDraftNotice({ reviewNeeded }: PolicyDraftNoticeProps) {
    return (
        <aside
            aria-label="약관 초안 상태와 확정 전 안내"
            className="mt-7 rounded-2xl border border-amber-200 bg-amber-50/70 px-5 py-6 sm:px-8"
        >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs leading-6">
                <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-950">
                    출시 전 검토용 · {policyDraft.version}
                </span>
                <span className="text-neutral-600">
                    작성 기준일{" "}
                    <time dateTime={policyDraft.updatedAt}>{policyDraft.updatedAt}</time>
                </span>
                <span className="text-neutral-600">시행일: {policyDraft.effectiveDate}</span>
            </div>
            <p className="mt-4 max-w-5xl text-sm leading-7 break-keep text-neutral-700">
                {policyDraft.notice}
            </p>
            <details className="mt-4 border-t border-amber-200 pt-4">
                <summary className="w-fit cursor-pointer text-xs font-semibold leading-6 text-amber-950 focus-visible:outline-2 focus-visible:outline-offset-4">
                    정식 공개 전 확정할 사항
                </summary>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-xs leading-6 break-keep text-neutral-600">
                    {reviewNeeded.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </details>
        </aside>
    );
}
