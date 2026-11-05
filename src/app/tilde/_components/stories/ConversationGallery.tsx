import type { CSSProperties } from "react";
import {
    conversationGalleryCanvas,
    conversationGalleryFrames,
    conversationGalleryPhoneAspectRatios,
    conversationGallerySelections,
} from "../../_data/conversation-gallery";
import { createGallerySelection } from "../../_lib/create-gallery-selection";
import TildeReveal from "../motion/TildeReveal";
import StoryPhoto from "./StoryPhoto";

type GalleryStyle = CSSProperties & Record<`--gallery-${string}`, string>;

const mobileGallery = createGallerySelection(
    conversationGalleryFrames.map((frame) => ({
        ...frame,
        aspectRatio:
            conversationGalleryPhoneAspectRatios[frame.photo.slotNumber] ?? frame.aspectRatio,
    })),
    conversationGallerySelections.phone,
    26,
);

const compactGallery = createGallerySelection(
    conversationGalleryFrames,
    conversationGallerySelections.compact,
    26,
);

const tabletGallery = createGallerySelection(
    conversationGalleryFrames,
    conversationGallerySelections.tablet,
    22,
);

export default function ConversationGallery() {
    const canvasStyle: GalleryStyle = {
        "--gallery-mobile-ratio": `${mobileGallery.canvas.width} / ${mobileGallery.canvas.height}`,
        "--gallery-compact-ratio": `${compactGallery.canvas.width} / ${compactGallery.canvas.height}`,
        "--gallery-tablet-ratio": `${tabletGallery.canvas.width} / ${tabletGallery.canvas.height}`,
        "--gallery-desktop-ratio": `${conversationGalleryCanvas.width} / ${conversationGalleryCanvas.height}`,
    };

    return (
        <div
            className="relative aspect-[var(--gallery-mobile-ratio)] w-full min-w-0 min-[30rem]:aspect-[var(--gallery-compact-ratio)] md:aspect-[var(--gallery-tablet-ratio)] lg:col-start-1 lg:row-start-1 lg:aspect-[var(--gallery-desktop-ratio)]"
            style={canvasStyle}
        >
            {conversationGalleryFrames.map(
                ({ photo, x, y, width, aspectRatio, className, revealDelay }) => {
                    const mobileFrame = mobileGallery.frames.get(photo.slotNumber);
                    const compactFrame = compactGallery.frames.get(photo.slotNumber);
                    const tabletFrame = tabletGallery.frames.get(photo.slotNumber);
                    const frameStyle: GalleryStyle = {
                        "--gallery-mobile-photo-ratio": mobileFrame
                            ? `${mobileFrame.width} / ${mobileFrame.height}`
                            : `${aspectRatio}`,
                        "--gallery-photo-ratio": `${aspectRatio}`,
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
                        "--gallery-desktop-left": `${(x / conversationGalleryCanvas.width) * 100}%`,
                        "--gallery-desktop-top": `${(y / conversationGalleryCanvas.height) * 100}%`,
                        "--gallery-desktop-width": `${(width / conversationGalleryCanvas.width) * 100}%`,
                    };

                    return (
                        <div
                            key={photo.slotNumber}
                            className="absolute top-[var(--gallery-mobile-top)] left-[var(--gallery-mobile-left)] aspect-[var(--gallery-mobile-photo-ratio)] w-[var(--gallery-mobile-width)] [display:var(--gallery-mobile-display)] min-[30rem]:top-[var(--gallery-compact-top)] min-[30rem]:left-[var(--gallery-compact-left)] min-[30rem]:aspect-[var(--gallery-photo-ratio)] min-[30rem]:w-[var(--gallery-compact-width)] min-[30rem]:[display:var(--gallery-compact-display)] md:top-[var(--gallery-tablet-top)] md:left-[var(--gallery-tablet-left)] md:w-[var(--gallery-tablet-width)] md:[display:var(--gallery-tablet-display)] lg:top-[var(--gallery-desktop-top)] lg:left-[var(--gallery-desktop-left)] lg:block lg:w-[var(--gallery-desktop-width)]"
                            style={frameStyle}
                        >
                            <TildeReveal className="h-full" delay={revealDelay}>
                                <StoryPhoto
                                    photo={photo}
                                    framed
                                    className={`h-full ${className}`}
                                    sizes={`(min-width: 1024px) ${Math.ceil((width / conversationGalleryCanvas.width) * 100)}vw, (min-width: 768px) 33vw, 50vw`}
                                />
                            </TildeReveal>
                        </div>
                    );
                },
            )}
        </div>
    );
}
