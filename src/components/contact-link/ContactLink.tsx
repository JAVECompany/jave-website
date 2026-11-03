import { contactNavigation } from "../../data/navigation";
import NavigationLink from "../navigation/NavigationLink";

export default function ContactLink() {
    return (
        <NavigationLink
            href={contactNavigation.href}
            label={contactNavigation.label}
            className="pointer-events-auto inline-flex min-h-11 items-center justify-self-end rounded-full border px-2.5 text-[13px] font-medium whitespace-nowrap transition-colors sm:px-5 sm:text-sm"
            activeClassName="border-neutral-900 bg-neutral-900 text-white"
            inactiveClassName="border-black/10 bg-white/95 hover:bg-neutral-100"
        />
    );
}
