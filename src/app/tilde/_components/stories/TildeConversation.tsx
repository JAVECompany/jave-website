import { conversationStory } from "../../_data/stories";
import TildeReveal from "../motion/TildeReveal";
import ConversationGallery from "./ConversationGallery";
import StoryCopy from "./StoryCopy";

export default function TildeConversation() {
    return (
        <section
            id="tilde-connections"
            aria-labelledby="tilde-conversation-title"
            className="grid scroll-mt-12 items-end gap-12 bg-transparent pt-12 pb-24 sm:gap-16 sm:pt-20 sm:pb-32 lg:grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)] lg:gap-[4vw] lg:pt-28 lg:pb-40"
        >
            <ConversationGallery />
            <TildeReveal className="min-w-0 justify-self-end lg:justify-self-auto" delay={160}>
                <StoryCopy
                    id="tilde-conversation-title"
                    titleClassName="text-[clamp(2rem,2.6vw,3.25rem)]"
                    {...conversationStory}
                />
            </TildeReveal>
        </section>
    );
}
