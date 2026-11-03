import Link from "next/link";
import { policyItems } from "../../../data/policies";

export default function FooterPolicyLinks() {
    return (
        <nav aria-label="약관 및 정책 바로가기">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs leading-6">
                {policyItems.map(({ slug, label, emphasized }) => (
                    <li key={slug}>
                        <Link
                            href={`/policy/${slug}/`}
                            className={`inline-block underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:text-white ${emphasized ? "font-semibold text-white" : "text-neutral-400"}`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
