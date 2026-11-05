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
            className="relative aspect-[var(--club-phone-ratio)] w-full min-w-0 min-[30rem]:aspect-[var(--club-compact-ratio)] md:aspect-[var(--club-tablet-ratio)] lg:col-start-1 lg:row-start-1 lg:aspect-[var(--club-desktop-ratio)]"
            style={canvasStyle}
        >
            <ClubsGalleryPhoto name="detail" />
            <ClubsGalleryPhoto name="activity" />
            <ClubsGalleryPhoto name="reading" />
            <ClubsGalleryPhoto name="making" />
            <ClubsGalleryPhoto name="outdoor" />
        </div>
    );
}
