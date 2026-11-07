import { conversationStory } from "../../_data/stories";
import TildeReveal from "../motion/TildeReveal";
import ConversationGallery from "./ConversationGallery";
import StoryCopy from "./StoryCopy";

export default function TildeConversation() {
    return (
        <section
            id="tilde-connections"
            aria-labelledby="tilde-conversation-title"
            className="-mx-2 grid scroll-mt-12 items-start bg-transparent pt-12 pb-20 sm:-mx-3 sm:pt-20 sm:pb-28 lg:-mx-10 lg:pt-28 lg:pb-36"
        >
            <ConversationGallery />
            <TildeReveal
                className="mt-10 min-w-0 justify-self-end px-2 sm:mt-12 sm:px-3 lg:col-start-1 lg:row-start-1 lg:mt-[30.28%] lg:ml-[58.57%] lg:w-[41.43%] lg:justify-self-auto lg:px-0"
                delay={160}
            >
                <StoryCopy
                    id="tilde-conversation-title"
                    titleClassName="text-[clamp(2rem,2.6vw,3.25rem)]"
                    {...conversationStory}
                />
            </TildeReveal>
        </section>
    );
}
