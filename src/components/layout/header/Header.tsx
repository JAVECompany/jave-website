import Link from "next/link";
import { company } from "../../../data/company";
import ContactLink from "../../contact-link/ContactLink";
import FloatingBar from "../../navigation/FloatingBar";

export default function Header() {
    return (
        <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.85rem,env(safe-area-inset-top))] sm:px-8 sm:pt-6 lg:px-16">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1.5">
                <Link
                    href="/"
                    aria-label="JAVE 소개 홈"
                    className="pointer-events-auto inline-flex min-h-11 items-center justify-self-start rounded-full border border-black/10 bg-white/95 px-2.5 text-base font-bold tracking-tight text-neutral-900 shadow-sm backdrop-blur sm:px-4 sm:text-lg"
                >
                    {company.name}
                </Link>
                <FloatingBar />
                <ContactLink />
            </div>
        </header>
    );
}
