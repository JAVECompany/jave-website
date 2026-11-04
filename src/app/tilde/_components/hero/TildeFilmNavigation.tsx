import NavigationLink from "../../../../components/navigation/NavigationLink";
import { navigation } from "../../../../data/navigation";

export default function TildeFilmNavigation() {
    return (
        <nav
            aria-label="주요 메뉴"
            lang="en"
            className="absolute inset-x-0 top-0 z-20 flex justify-center gap-5 bg-linear-to-b from-black/45 to-transparent px-4 pt-[max(1.25rem,env(safe-area-inset-top))] pb-14 sm:gap-12 sm:pt-8 sm:pb-20"
        >
            {navigation.map(({ englishLabel, href }) => (
                <NavigationLink
                    key={href}
                    href={href}
                    label={englishLabel}
                    className="inline-flex min-h-11 items-center border-b px-1 text-[11px] font-medium tracking-[.16em] whitespace-nowrap transition-colors focus-visible:outline-white sm:text-[13px] sm:tracking-[.22em]"
                    activeClassName="border-white/80 text-white"
                    inactiveClassName="border-transparent text-white/80 hover:border-white/60 hover:text-white"
                />
            ))}
        </nav>
    );
}
