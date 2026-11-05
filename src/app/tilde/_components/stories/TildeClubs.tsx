import type { CSSProperties } from "react";
import TildeReveal from "../motion/TildeReveal";
import { clubsStory } from "../../_data/stories";
import { clubsGalleryLayouts } from "../../_data/clubs-gallery";
import ClubsGalleryPhoto from "./ClubsGalleryPhoto";
import StoryCopy from "./StoryCopy";

type CanvasStyle = CSSProperties & Record<`--club-${string}`, string>;

export default function TildeClubs() {
    const canvasStyle: CanvasStyle = {};

    for (const [breakpoint, layout] of Object.entries(clubsGalleryLayouts)) {
        canvasStyle[`--club-${breakpoint}-ratio`] =
            `${layout.canvas.width} / ${layout.canvas.height}`;
    }

    return (
        <section
            id="tilde-clubs"
            aria-labelledby="tilde-clubs-title"
            className="scroll-mt-12 pt-32 pb-8 sm:pt-44 sm:pb-12 lg:pt-64 lg:pb-16"
        >
            <div
                className="relative grid min-w-0 grid-cols-1 items-start gap-y-10 p-2 sm:p-3 lg:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,3fr)] lg:gap-x-6 lg:gap-y-0 lg:p-4"
                style={canvasStyle}
            >
                <div className="contents lg:col-start-2 lg:row-start-1 lg:block lg:min-w-0">
                    <TildeReveal className="mx-auto w-fit max-w-full">
                        <StoryCopy id="tilde-clubs-title" {...clubsStory} />
                    </TildeReveal>
                    <ClubsGalleryPhoto
                        name="activity"
                        desktopClassName="lg:mt-12 lg:w-full"
                        sizes="(min-width: 1024px) 45vw, 50vw"
                    />
                </div>
                <div className="contents lg:col-start-1 lg:row-start-1 lg:mt-[16%] lg:block lg:min-w-0">
                    <ClubsGalleryPhoto
                        name="detail"
                        desktopClassName="lg:ml-auto lg:w-[90%]"
                        sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                    <ClubsGalleryPhoto
                        name="reading"
                        desktopClassName="lg:mt-6 lg:ml-auto lg:w-[58%]"
                        sizes="(min-width: 1024px) 16vw, 50vw"
                    />
                </div>
                <div className="contents lg:col-start-3 lg:row-start-1 lg:block lg:min-w-0">
                    <ClubsGalleryPhoto
                        name="outdoor"
                        desktopClassName="lg:w-[90%]"
                        sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                    <ClubsGalleryPhoto
                        name="making"
                        desktopClassName="lg:mt-6 lg:ml-auto lg:w-full"
                        sizes="(min-width: 1024px) 27vw, 50vw"
                    />
                </div>
                <div
                    aria-hidden="true"
                    className="col-start-1 row-start-2 aspect-[var(--club-phone-ratio)] w-full min-[30rem]:aspect-[var(--club-compact-ratio)] md:aspect-[var(--club-tablet-ratio)] lg:hidden"
                />
            </div>
        </section>
    );
}
