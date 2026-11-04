import TildeReveal from "../motion/TildeReveal";
import { clubsStory, storyPhotos } from "../../_data/stories";
import StoryCopy from "./StoryCopy";
import StoryPhoto from "./StoryPhoto";

export default function TildeClubs() {
    return (
        <section
            id="tilde-clubs"
            aria-labelledby="tilde-clubs-title"
            className="scroll-mt-12 pt-20 pb-8 sm:pt-28 sm:pb-12 lg:pt-36 lg:pb-16"
        >
            <TildeReveal>
                <StoryCopy id="tilde-clubs-title" {...clubsStory} />
            </TildeReveal>
            <div className="mt-12 grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] items-end gap-4 sm:mt-16 sm:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] sm:gap-8 lg:gap-12">
                <TildeReveal>
                    <StoryPhoto
                        photo={storyPhotos.clubActivity}
                        className="aspect-[16/10] bg-[#d5ded4]"
                        sizes="(min-width: 640px) 60vw, 55vw"
                    />
                </TildeReveal>
                <TildeReveal delay={120}>
                    <StoryPhoto
                        photo={storyPhotos.clubDetail}
                        className="aspect-[4/5] bg-[#e4e6de]"
                        sizes="(min-width: 640px) 35vw, 40vw"
                    />
                </TildeReveal>
            </div>
        </section>
    );
}
