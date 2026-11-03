import type { PolicySectionContent } from "../../_types/policy";

type PolicyDocumentSectionProps = {
    section: PolicySectionContent;
};

export default function PolicyDocumentSection({ section }: PolicyDocumentSectionProps) {
    const headingId = `policy-heading-${section.id}`;

    return (
        <section
            id={`policy-section-${section.id}`}
            aria-labelledby={headingId}
            className="scroll-mt-44 py-8 first:pt-0 sm:scroll-mt-32 sm:py-10"
        >
            <h2 id={headingId} className="text-base leading-7 font-semibold break-keep sm:text-lg">
                {section.title}
            </h2>
            <div className="mt-4 max-w-5xl space-y-4 text-sm leading-8 break-keep text-neutral-700 sm:text-base">
                {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && (
                    <ul className="list-disc space-y-3 pl-5 marker:text-neutral-400 sm:pl-6">
                        {section.items.map((item) => (
                            <li key={item} className="pl-1">
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}
