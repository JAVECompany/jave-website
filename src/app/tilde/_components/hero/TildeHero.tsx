import TildeReveal from "../motion/TildeReveal";
import { tildeService } from "../../_data/service";
import TildeHeroFilm from "./TildeHeroFilm";

export default function TildeHero() {
    return (
        <section
            aria-labelledby="tilde-title"
            className="-mx-5 -mt-44 sm:-mx-8 sm:-mt-40 lg:-mx-16"
        >
            <div
                data-cinematic-hero
                className="relative aspect-video w-full bg-[#d8ded3] lg:[@media(min-aspect-ratio:16/9)]:aspect-auto lg:[@media(min-aspect-ratio:16/9)]:h-dvh"
            >
                <TildeHeroFilm />
            </div>
            <TildeReveal className="relative isolate px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16 lg:px-16 lg:pt-28 lg:pb-20">
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-10 left-3 -z-10 h-24 w-36 rotate-[55deg] rounded-[50%] bg-[#879775]/20 sm:top-14 sm:left-4 sm:h-32 sm:w-44 lg:top-16 lg:left-6 lg:h-40 lg:w-52"
                />
                <p className="text-xs leading-relaxed font-medium tracking-[.045em] text-[var(--service-ink)]">
                    {tildeService.heroEyebrow}
                </p>
                <h1
                    id="tilde-title"
                    className="-ml-[.045em] mt-3 mb-10 font-['Noto_Serif_KR',serif] text-[clamp(2.25rem,6vw,5.75rem)] leading-[1.22] font-normal tracking-[-.055em] whitespace-pre-line break-keep"
                >
                    {tildeService.tagline}
                </h1>
                <p className="text-sm leading-[1.9] whitespace-pre-line break-keep text-[var(--service-muted)] sm:text-base">
                    {tildeService.heroDescription}
                </p>
            </TildeReveal>
        </section>
    );
}
