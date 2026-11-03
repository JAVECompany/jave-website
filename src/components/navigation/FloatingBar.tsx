import { navigation } from "../../data/navigation";
import NavigationLink from "./NavigationLink";

export default function FloatingBar() {
    return (
        <nav
            aria-label="주요 메뉴"
            className="pointer-events-auto flex gap-0.5 rounded-full border border-black/10 bg-white/95 p-1 shadow-sm backdrop-blur sm:gap-1 sm:p-1.5"
        >
            {navigation.map(({ label, href }) => (
                <NavigationLink
                    key={href}
                    href={href}
                    label={label}
                    className="rounded-full px-2.5 py-2 text-[13px] font-medium whitespace-nowrap transition-colors sm:px-5 sm:text-sm"
                    activeClassName="bg-neutral-900 text-white"
                    inactiveClassName="text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                />
            ))}
        </nav>
    );
}
