import type { CSSProperties } from "react";
import { clubsGalleryLayouts, clubsGalleryPhotos } from "../../_data/clubs-gallery";
import TildeReveal from "../motion/TildeReveal";
import StoryPhoto from "./StoryPhoto";

type ClubsGalleryPhotoProps = {
    name: keyof typeof clubsGalleryPhotos;
};

type FrameStyle = CSSProperties & Record<`--club-${string}`, string>;

export default function ClubsGalleryPhoto({ name }: ClubsGalleryPhotoProps) {
    const { photo, aspectRatio, className, revealDelay, desktop } = clubsGalleryPhotos[name];
    const frameStyle: FrameStyle = { "--club-ratio": `${aspectRatio}` };

    for (const [breakpoint, layout] of Object.entries(clubsGalleryLayouts)) {
        const frame = layout.frames.get(photo.slotNumber);
        frameStyle[`--club-${breakpoint}-display`] = frame ? "block" : "none";
        frameStyle[`--club-${breakpoint}-left`] =
            `${((frame?.x ?? 0) / layout.canvas.width) * 100}%`;
        frameStyle[`--club-${breakpoint}-top`] =
            `${((frame?.y ?? 0) / layout.canvas.height) * 100}%`;
        frameStyle[`--club-${breakpoint}-width`] =
            `${((frame?.width ?? 0) / layout.canvas.width) * 100}%`;
    }

    return (
        <div
            className="absolute top-[var(--club-phone-top)] left-[var(--club-phone-left)] aspect-[var(--club-ratio)] w-[var(--club-phone-width)] [display:var(--club-phone-display)] min-[30rem]:top-[var(--club-compact-top)] min-[30rem]:left-[var(--club-compact-left)] min-[30rem]:w-[var(--club-compact-width)] min-[30rem]:[display:var(--club-compact-display)] md:top-[var(--club-tablet-top)] md:left-[var(--club-tablet-left)] md:w-[var(--club-tablet-width)] md:[display:var(--club-tablet-display)] lg:top-[var(--club-desktop-top)] lg:left-[var(--club-desktop-left)] lg:block lg:w-[var(--club-desktop-width)]"
            style={frameStyle}
        >
            <TildeReveal className="h-full" delay={revealDelay}>
                <StoryPhoto
                    photo={photo}
                    className={`h-full ${className}`}
                    sizes={`(min-width: 1024px) ${Math.ceil((desktop.width / clubsGalleryLayouts.desktop.canvas.width) * 67)}vw, 50vw`}
                    framed
                />
            </TildeReveal>
        </div>
    );
}
