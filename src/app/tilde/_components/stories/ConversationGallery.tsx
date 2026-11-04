import {
    conversationGalleryCanvas,
    conversationGalleryFrames,
} from "../../_data/conversation-gallery";
import TildeReveal from "../motion/TildeReveal";
import StoryPhoto from "./StoryPhoto";

export default function ConversationGallery() {
    return (
        <div
            className="relative w-full min-w-0"
            style={{
                aspectRatio: `${conversationGalleryCanvas.width} / ${conversationGalleryCanvas.height}`,
            }}
        >
            {conversationGalleryFrames.map(({ photo, x, y, width, className }, index) => (
                <div
                    key={photo.alt}
                    className="absolute"
                    style={{
                        left: `${(x / conversationGalleryCanvas.width) * 100}%`,
                        top: `${(y / conversationGalleryCanvas.height) * 100}%`,
                        width: `${(width / conversationGalleryCanvas.width) * 100}%`,
                    }}
                >
                    <TildeReveal delay={(index % 4) * 40}>
                        <StoryPhoto
                            photo={photo}
                            framed
                            className={className}
                            sizes={`(min-width: 1024px) ${Math.ceil((width / conversationGalleryCanvas.width) * 63)}vw, ${Math.ceil((width / conversationGalleryCanvas.width) * 100)}vw`}
                        />
                    </TildeReveal>
                </div>
            ))}
        </div>
    );
}
