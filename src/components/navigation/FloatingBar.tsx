import { navigation } from "../../data/navigation";
import NavigationLink from "./NavigationLink";

export default function FloatingBar() {
    return (
        <nav aria-label="주요 메뉴" className="pointer-events-auto absolute top-22 left-1/2 flex -translate-x-1/2 gap-1 rounded-full border border-black/10 bg-white/95 p-1.5 shadow-sm backdrop-blur sm:top-6">
            {navigation.map(({ label, href }) => (
                <NavigationLink
                    key={href}
                    href={href}
                    label={label}
                    className="rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors sm:px-5"
                    activeClassName="bg-neutral-900 text-white"
                    inactiveClassName="text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                />
            ))}
        </nav>
    );
}
