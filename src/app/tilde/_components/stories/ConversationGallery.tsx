import type { CSSProperties } from "react";
import {
    conversationGalleryCanvas,
    conversationGalleryFrames,
} from "../../_data/conversation-gallery";
import TildeReveal from "../motion/TildeReveal";
import StoryPhoto from "./StoryPhoto";

type GalleryStyle = CSSProperties & Record<`--gallery-${string}`, string>;

export default function ConversationGallery() {
    const canvasStyle: GalleryStyle = {
        "--gallery-ratio": `${conversationGalleryCanvas.width} / ${conversationGalleryCanvas.height}`,
    };

    return (
        <div
            className="w-full min-w-0 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:relative lg:col-start-1 lg:row-start-1 lg:aspect-[var(--gallery-ratio)] lg:columns-auto"
            style={canvasStyle}
        >
            {conversationGalleryFrames.map(({ photo, x, y, width, className }, index) => {
                const frameStyle: GalleryStyle = {
                    "--gallery-left": `${(x / conversationGalleryCanvas.width) * 100}%`,
                    "--gallery-top": `${(y / conversationGalleryCanvas.height) * 100}%`,
                    "--gallery-width": `${(width / conversationGalleryCanvas.width) * 100}%`,
                };

                return (
                    <div
                        key={photo.alt}
                        className="mb-3 min-w-0 break-inside-avoid sm:mb-4 lg:absolute lg:top-[var(--gallery-top)] lg:left-[var(--gallery-left)] lg:mb-0 lg:w-[var(--gallery-width)]"
                        style={frameStyle}
                    >
                        <TildeReveal delay={(index % 4) * 40}>
                            <StoryPhoto
                                photo={photo}
                                framed
                                className={className}
                                sizes={`(min-width: 1024px) ${Math.ceil((width / conversationGalleryCanvas.width) * 100)}vw, (min-width: 640px) 33vw, 50vw`}
                            />
                        </TildeReveal>
                    </div>
                );
            })}
        </div>
    );
}
