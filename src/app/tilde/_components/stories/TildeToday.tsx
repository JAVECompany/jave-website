import TildeReveal from "../motion/TildeReveal";
import { storyPhotos, todayStory } from "../../_data/stories";
import StoryCopy from "./StoryCopy";
import StoryPhoto from "./StoryPhoto";

export default function TildeToday() {
    return (
        <section
            id="tilde-today"
            aria-labelledby="tilde-today-title"
            className="-mx-5 grid scroll-mt-12 items-center gap-12 bg-[#f0f0e8] px-5 py-20 sm:-mx-8 sm:px-8 sm:py-28 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] md:gap-12 lg:-mx-16 lg:gap-[7vw] lg:px-16 lg:py-36"
        >
            <TildeReveal>
                <StoryCopy id="tilde-today-title" {...todayStory} />
            </TildeReveal>
            <div className="grid min-w-0 grid-cols-[minmax(0,.7fr)_minmax(0,1fr)] items-start gap-4 sm:gap-6">
                <TildeReveal className="mt-16 sm:mt-24 lg:mt-32" delay={160}>
                    <StoryPhoto
                        photo={storyPhotos.todayDetail}
                        className="aspect-[3/4] bg-[#d7cabb]"
                        sizes="(min-width: 768px) 22vw, 40vw"
                    />
                </TildeReveal>
                <TildeReveal delay={80}>
                    <StoryPhoto
                        photo={storyPhotos.todayGroup}
                        className="aspect-[4/5] bg-[#e2d9cb]"
                        sizes="(min-width: 768px) 30vw, 55vw"
                    />
                </TildeReveal>
            </div>
        </section>
    );
}
