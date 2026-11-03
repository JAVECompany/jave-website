import type { PolicySectionContent } from "../../_types/policy";

type PolicyContentsProps = {
    sections: readonly PolicySectionContent[];
};

export default function PolicyContents({ sections }: PolicyContentsProps) {
    return (
        <nav aria-label="선택한 약관의 목차" className="mt-8 border-y border-neutral-200 py-6">
            <p className="text-xs font-semibold text-neutral-900">목차</p>
            <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
                {sections.map(({ id, title }) => (
                    <li key={id} className="min-w-0">
                        <a
                            href={`#policy-section-${id}`}
                            className="text-xs leading-6 break-keep text-neutral-600 underline-offset-4 hover:text-neutral-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
