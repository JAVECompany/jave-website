import { tildeService } from "../../_data/service";
import TildeHeroFilm from "./TildeHeroFilm";

export default function TildeHero() {
    return (
        <section
            aria-labelledby="tilde-title"
            className="-mx-5 -mt-44 sm:-mx-8 sm:-mt-40 lg:-mx-16"
        >
            <div data-cinematic-hero className="relative h-dvh w-full bg-[#d8ded3]">
                <TildeHeroFilm />
            </div>
            <div className="px-5 pt-14 sm:px-8 sm:pt-20 lg:px-16">
                <p className="flex items-center gap-3 text-sm font-semibold text-[var(--service-ink)]">
                    {tildeService.name}
                    <span lang="en" className="text-xs font-medium tracking-[.24em]">
                        TILDE
                    </span>
                    <span className="border-l border-current/45 pl-3 text-xs">출시 준비 중</span>
                </p>
                <h1
                    id="tilde-title"
                    className="my-5 font-['Noto_Serif_KR',serif] text-[clamp(2.6rem,6vw,5.75rem)] leading-[1.16] tracking-[-.07em] whitespace-pre-line"
                >
                    {tildeService.tagline}
                </h1>
                <p className="text-base leading-relaxed whitespace-pre-line text-[var(--service-muted)]">
                    {tildeService.heroDescription}
                </p>
                <a
                    href="#tilde-connections"
                    className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-current text-sm text-[var(--service-ink)]"
                >
                    세 가지 만남 살펴보기 <span aria-hidden="true">↓</span>
                </a>
            </div>
        </section>
    );
}
