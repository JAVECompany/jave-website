import type { CSSProperties } from "react";
import { clubsGalleryLayouts } from "../../_data/clubs-gallery";
import ClubsGalleryPhoto from "./ClubsGalleryPhoto";

type CanvasStyle = CSSProperties & Record<`--club-${string}`, string>;

export default function ClubsGallery() {
    const canvasStyle: CanvasStyle = {};

    for (const [breakpoint, layout] of Object.entries(clubsGalleryLayouts)) {
        canvasStyle[`--club-${breakpoint}-ratio`] =
            `${layout.canvas.width} / ${layout.canvas.height}`;
    }

    return (
        <div
            className="relative aspect-[var(--club-phone-ratio)] w-full min-w-0 min-[30rem]:aspect-[var(--club-compact-ratio)] md:aspect-[var(--club-tablet-ratio)] lg:contents"
            style={canvasStyle}
        >
            <div className="contents lg:relative lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:block lg:aspect-[var(--club-desktop-ratio)] lg:min-w-0 lg:self-start">
                <ClubsGalleryPhoto name="detail" />
                <ClubsGalleryPhoto name="activity" />
                <ClubsGalleryPhoto name="reading" />
                <ClubsGalleryPhoto name="making" />
            </div>
            <ClubsGalleryPhoto name="outdoor" />
        </div>
    );
}
