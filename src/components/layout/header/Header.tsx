import Link from "next/link";
import { company } from "../../../data/company";
import ContactLink from "../../contact-link/ContactLink";
import FloatingBar from "../../navigation/FloatingBar";

export default function Header() {
    return (
        <header className="pointer-events-none fixed inset-x-0 top-0 z-50 h-36 sm:h-24">
            <div className="relative h-full w-full">
                <Link href="/" aria-label="JAVE 소개 홈" className="pointer-events-auto absolute top-6 left-5 py-3 text-lg font-bold tracking-tight sm:left-8 lg:left-16">
                    {company.name}
                </Link>
                <FloatingBar />
                <ContactLink />
            </div>
        </header>
    );
}
