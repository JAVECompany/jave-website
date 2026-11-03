import Link from "next/link";
import { policyItems } from "../../../../data/policies";
import type { PolicySlug } from "../../../../data/policies";

type PolicyNavigationProps = {
    selectedSlug: PolicySlug;
};

export default function PolicyNavigation({ selectedSlug }: PolicyNavigationProps) {
    return (
        <nav aria-label="약관 구분">
            <p className="mb-3 text-xs font-medium text-neutral-500">구분</p>
            <ul className="grid grid-cols-2 border-t border-l border-neutral-300 md:grid-cols-3 xl:grid-cols-4 2xl:auto-cols-fr 2xl:grid-flow-col 2xl:grid-cols-none">
                {policyItems.map(({ slug, label }) => (
                    <li key={slug} className="min-w-0 border-r border-b border-neutral-300">
                        <Link
                            href={`/policy/${slug}/`}
                            aria-current={selectedSlug === slug ? "page" : undefined}
                            className={`flex h-full min-h-14 items-center justify-center px-3 py-3 text-center text-xs leading-6 transition-colors sm:text-sm ${selectedSlug === slug ? "bg-[#1f1f1f] font-medium text-white" : "bg-white text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"}`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
