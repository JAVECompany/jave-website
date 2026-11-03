import { contactNavigation } from "../../data/navigation";
import NavigationLink from "../navigation/NavigationLink";

export default function ContactLink() {
    return (
        <NavigationLink
            href={contactNavigation.href}
            label={contactNavigation.label}
            className="pointer-events-auto absolute top-6 right-5 rounded-full border px-5 py-3 text-sm font-medium transition-colors sm:right-8 lg:right-16"
            activeClassName="border-neutral-900 bg-neutral-900 text-white"
            inactiveClassName="border-black/10 bg-white/95 hover:bg-neutral-100"
        />
    );
}
