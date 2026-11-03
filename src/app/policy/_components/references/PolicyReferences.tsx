import type { PolicyReference } from "../../_types/policy";
import { policyDraft } from "../../_data/policy-sources";

type PolicyReferencesProps = {
    references: readonly PolicyReference[];
};

export default function PolicyReferences({ references }: PolicyReferencesProps) {
    return (
        <aside
            aria-labelledby="policy-references-title"
            className="mt-8 rounded-2xl bg-neutral-100 px-5 py-6 sm:px-8 sm:py-8"
        >
            <h2 id="policy-references-title" className="text-sm font-semibold text-neutral-900">
                작성 참고 자료
            </h2>
            <p className="mt-2 text-xs leading-6 text-neutral-500">
                {policyDraft.updatedAt} 기준으로 확인한 공식 법령·가이드입니다. 서비스별 운영안은 이
                자료를 참고해 재구성한 초안이며 법령 원문 자체가 아닙니다.
            </p>
            <ul className="mt-5 space-y-4">
                {references.map(({ href, label, note }) => (
                    <li key={href}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs leading-6 font-medium break-keep text-neutral-800 underline underline-offset-4 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
                        >
                            {label}
                            <span className="sr-only"> (새 창)</span>
                        </a>
                        <p className="mt-1 text-xs leading-6 break-keep text-neutral-500">{note}</p>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
