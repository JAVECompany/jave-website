import TildeReveal from "../motion/TildeReveal";
import { conversationStory, storyPhotos } from "../../_data/stories";
import StoryCopy from "./StoryCopy";
import StoryPhoto from "./StoryPhoto";

export default function TildeConversation() {
    return (
        <section
            id="tilde-connections"
            aria-labelledby="tilde-conversation-title"
            className="grid scroll-mt-12 items-center gap-10 pb-24 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-12 md:pb-32 lg:gap-[7vw] lg:pb-40"
        >
            <TildeReveal>
                <StoryPhoto
                    photo={storyPhotos.conversation}
                    className="aspect-[4/3] bg-[#e1e5d9]"
                    sizes="(min-width: 768px) 55vw, 100vw"
                />
            </TildeReveal>
            <TildeReveal delay={100}>
                <StoryCopy id="tilde-conversation-title" {...conversationStory} />
            </TildeReveal>
        </section>
    );
}
