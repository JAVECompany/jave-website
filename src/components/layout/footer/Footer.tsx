import { company } from "../../../data/company";
import FooterPolicyLinks from "./FooterPolicyLinks";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1f1f1f] text-neutral-400">
            <div className="w-full px-5 py-8 sm:px-8 sm:py-10 lg:px-16">
                <FooterPolicyLinks />
                <p className="mt-4 text-xs leading-6">© {company.name}. All rights reserved.</p>
            </div>
        </footer>
    );
}
