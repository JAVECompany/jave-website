import type { CSSProperties } from "react";
import {
    conversationGalleryCanvas,
    conversationGalleryFrames,
} from "../../_data/conversation-gallery";
import { createGalleryColumns } from "../../_lib/create-gallery-columns";
import TildeReveal from "../motion/TildeReveal";
import StoryPhoto from "./StoryPhoto";

type GalleryStyle = CSSProperties & Record<`--gallery-${string}`, string>;

const mobileGallery = createGalleryColumns(
    conversationGalleryFrames,
    [
        { count: 6, offset: 0 },
        { count: 7, offset: 120 },
    ],
    26,
);

const tabletGallery = createGalleryColumns(
    conversationGalleryFrames,
    [
        { count: 4, offset: 40 },
        { count: 4, offset: 0 },
        { count: 5, offset: 120 },
    ],
    22,
);

export default function ConversationGallery() {
    const canvasStyle: GalleryStyle = {
        "--gallery-mobile-ratio": `${mobileGallery.canvas.width} / ${mobileGallery.canvas.height}`,
        "--gallery-tablet-ratio": `${tabletGallery.canvas.width} / ${tabletGallery.canvas.height}`,
        "--gallery-desktop-ratio": `${conversationGalleryCanvas.width} / ${conversationGalleryCanvas.height}`,
    };

    return (
        <div
            className="relative aspect-[var(--gallery-mobile-ratio)] w-full min-w-0 sm:aspect-[var(--gallery-tablet-ratio)] lg:col-start-1 lg:row-start-1 lg:aspect-[var(--gallery-desktop-ratio)]"
            style={canvasStyle}
        >
            {conversationGalleryFrames.map(
                ({ photo, x, y, width, aspectRatio, className, revealDelay }, index) => {
                    const mobileFrame = mobileGallery.frames[index];
                    const tabletFrame = tabletGallery.frames[index];
                    const frameStyle: GalleryStyle = {
                        aspectRatio,
                        "--gallery-mobile-left": `${(mobileFrame.x / mobileGallery.canvas.width) * 100}%`,
                        "--gallery-mobile-top": `${(mobileFrame.y / mobileGallery.canvas.height) * 100}%`,
                        "--gallery-mobile-width": `${(mobileFrame.width / mobileGallery.canvas.width) * 100}%`,
                        "--gallery-tablet-left": `${(tabletFrame.x / tabletGallery.canvas.width) * 100}%`,
                        "--gallery-tablet-top": `${(tabletFrame.y / tabletGallery.canvas.height) * 100}%`,
                        "--gallery-tablet-width": `${(tabletFrame.width / tabletGallery.canvas.width) * 100}%`,
                        "--gallery-desktop-left": `${(x / conversationGalleryCanvas.width) * 100}%`,
                        "--gallery-desktop-top": `${(y / conversationGalleryCanvas.height) * 100}%`,
                        "--gallery-desktop-width": `${(width / conversationGalleryCanvas.width) * 100}%`,
                    };

                    return (
                        <div
                            key={photo.slotNumber}
                            className="absolute top-[var(--gallery-mobile-top)] left-[var(--gallery-mobile-left)] w-[var(--gallery-mobile-width)] sm:top-[var(--gallery-tablet-top)] sm:left-[var(--gallery-tablet-left)] sm:w-[var(--gallery-tablet-width)] lg:top-[var(--gallery-desktop-top)] lg:left-[var(--gallery-desktop-left)] lg:w-[var(--gallery-desktop-width)]"
                            style={frameStyle}
                        >
                            <TildeReveal className="h-full" delay={revealDelay}>
                                <StoryPhoto
                                    photo={photo}
                                    framed
                                    className={`h-full ${className}`}
                                    sizes={`(min-width: 1024px) ${Math.ceil((width / conversationGalleryCanvas.width) * 100)}vw, (min-width: 640px) 33vw, 50vw`}
                                />
                            </TildeReveal>
                        </div>
                    );
                },
            )}
        </div>
    );
}
