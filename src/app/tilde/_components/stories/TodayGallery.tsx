import type { CSSProperties } from "react";
import {
    todayGalleryCanvas,
    todayGalleryFrames,
    todayGallerySelections,
} from "../../_data/today-gallery";
import { createGallerySelection } from "../../_lib/create-gallery-selection";
import TildeReveal from "../motion/TildeReveal";
import StoryPhoto from "./StoryPhoto";

type GalleryStyle = CSSProperties & Record<`--gallery-${string}`, string>;

const mobileGallery = createGallerySelection(todayGalleryFrames, todayGallerySelections.phone, 26);
const compactGallery = createGallerySelection(
    todayGalleryFrames,
    todayGallerySelections.compact,
    26,
);
const tabletGallery = createGallerySelection(todayGalleryFrames, todayGallerySelections.tablet, 22);

export default function TodayGallery() {
    const canvasStyle: GalleryStyle = {
        "--gallery-mobile-ratio": `${mobileGallery.canvas.width} / ${mobileGallery.canvas.height}`,
        "--gallery-compact-ratio": `${compactGallery.canvas.width} / ${compactGallery.canvas.height}`,
        "--gallery-tablet-ratio": `${tabletGallery.canvas.width} / ${tabletGallery.canvas.height}`,
        "--gallery-desktop-ratio": `${todayGalleryCanvas.width} / ${todayGalleryCanvas.height}`,
    };

    return (
        <div
            className="relative aspect-[var(--gallery-mobile-ratio)] w-full min-w-0 min-[30rem]:aspect-[var(--gallery-compact-ratio)] md:aspect-[var(--gallery-tablet-ratio)] lg:aspect-[var(--gallery-desktop-ratio)]"
            style={canvasStyle}
        >
            {todayGalleryFrames.map(({ photo, aspectRatio, className, desktop, revealDelay }) => {
                const mobileFrame = mobileGallery.frames.get(photo.slotNumber);
                const compactFrame = compactGallery.frames.get(photo.slotNumber);
                const tabletFrame = tabletGallery.frames.get(photo.slotNumber);
                const frameStyle: GalleryStyle = {
                    aspectRatio,
                    "--gallery-mobile-display": mobileFrame ? "block" : "none",
                    "--gallery-mobile-left": `${((mobileFrame?.x ?? 0) / mobileGallery.canvas.width) * 100}%`,
                    "--gallery-mobile-top": `${((mobileFrame?.y ?? 0) / mobileGallery.canvas.height) * 100}%`,
                    "--gallery-mobile-width": `${((mobileFrame?.width ?? 0) / mobileGallery.canvas.width) * 100}%`,
                    "--gallery-compact-display": compactFrame ? "block" : "none",
                    "--gallery-compact-left": `${((compactFrame?.x ?? 0) / compactGallery.canvas.width) * 100}%`,
                    "--gallery-compact-top": `${((compactFrame?.y ?? 0) / compactGallery.canvas.height) * 100}%`,
                    "--gallery-compact-width": `${((compactFrame?.width ?? 0) / compactGallery.canvas.width) * 100}%`,
                    "--gallery-tablet-display": tabletFrame ? "block" : "none",
                    "--gallery-tablet-left": `${((tabletFrame?.x ?? 0) / tabletGallery.canvas.width) * 100}%`,
                    "--gallery-tablet-top": `${((tabletFrame?.y ?? 0) / tabletGallery.canvas.height) * 100}%`,
                    "--gallery-tablet-width": `${((tabletFrame?.width ?? 0) / tabletGallery.canvas.width) * 100}%`,
                    "--gallery-desktop-left": `${(desktop.x / todayGalleryCanvas.width) * 100}%`,
                    "--gallery-desktop-top": `${(desktop.y / todayGalleryCanvas.height) * 100}%`,
                    "--gallery-desktop-width": `${(desktop.width / todayGalleryCanvas.width) * 100}%`,
                };

                return (
                    <div
                        key={photo.slotNumber}
                        className="absolute top-[var(--gallery-mobile-top)] left-[var(--gallery-mobile-left)] w-[var(--gallery-mobile-width)] [display:var(--gallery-mobile-display)] min-[30rem]:top-[var(--gallery-compact-top)] min-[30rem]:left-[var(--gallery-compact-left)] min-[30rem]:w-[var(--gallery-compact-width)] min-[30rem]:[display:var(--gallery-compact-display)] md:top-[var(--gallery-tablet-top)] md:left-[var(--gallery-tablet-left)] md:w-[var(--gallery-tablet-width)] md:[display:var(--gallery-tablet-display)] lg:top-[var(--gallery-desktop-top)] lg:left-[var(--gallery-desktop-left)] lg:block lg:w-[var(--gallery-desktop-width)]"
                        style={frameStyle}
                    >
                        <TildeReveal className="h-full" delay={revealDelay}>
                            <StoryPhoto
                                photo={photo}
                                className={`h-full ${className}`}
                                sizes={`(min-width: 1024px) ${Math.ceil((desktop.width / todayGalleryCanvas.width) * 68)}vw, 50vw`}
                                framed
                            />
                        </TildeReveal>
                    </div>
                );
            })}
        </div>
    );
}
