import { navigation } from "../../data/navigation";
import NavigationLink from "./NavigationLink";

export default function FloatingBar() {
    return (
        <nav
            aria-label="주요 메뉴"
            lang="en"
            className="pointer-events-auto mx-auto flex w-fit items-center justify-center gap-5 sm:gap-12"
        >
            {navigation.map(({ englishLabel, href }) => (
                <NavigationLink
                    key={href}
                    href={href}
                    label={englishLabel}
                    className="inline-flex min-h-11 items-center border-b px-1 text-[11px] font-medium tracking-[.16em] whitespace-nowrap transition-[opacity,border-color] duration-200 sm:text-[13px] sm:tracking-[.22em] motion-reduce:transition-none"
                    activeClassName="border-current opacity-100"
                    inactiveClassName="border-transparent opacity-75 hover:border-current hover:opacity-100"
                />
            ))}
        </nav>
    );
}
