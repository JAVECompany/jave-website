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
            <div className="grid min-w-0 grid-cols-12 items-start gap-x-3 gap-y-10 p-2 sm:gap-x-4 sm:p-3 md:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,3fr)] md:gap-y-0 lg:gap-x-6 lg:p-4">
                <div className="col-span-10 col-start-2 row-start-1 min-w-0 md:col-span-1 md:col-start-2">
                    <TildeReveal className="mx-auto w-fit max-w-full">
                        <StoryCopy id="tilde-clubs-title" {...clubsStory} />
                    </TildeReveal>
                    <TildeReveal className="mt-8 sm:mt-10" delay={80}>
                        <StoryPhoto
                            photo={storyPhotos.clubActivity}
                            className="aspect-[16/9] bg-[#d5ded4]"
                            sizes="(min-width: 768px) 45vw, 78vw"
                            framed
                        />
                    </TildeReveal>
                </div>
                <div className="col-span-6 col-start-1 row-start-2 min-w-0 md:col-span-1 md:col-start-1 md:row-start-1 md:mt-[20%]">
                    <TildeReveal delay={80}>
                        <StoryPhoto
                            photo={storyPhotos.clubDetail}
                            className="aspect-[3/4] bg-[#e4e6de]"
                            sizes="(min-width: 768px) 27vw, 46vw"
                            framed
                        />
                    </TildeReveal>
                    <TildeReveal className="mt-4 ml-auto w-[68%] sm:mt-6" delay={160}>
                        <StoryPhoto
                            photo={storyPhotos.clubReading}
                            className="aspect-[3/4] bg-[#dfd5c7]"
                            sizes="(min-width: 768px) 19vw, 32vw"
                            framed
                        />
                    </TildeReveal>
                </div>
                <div className="col-span-6 col-start-7 row-start-2 mt-[20%] min-w-0 md:col-span-1 md:col-start-3 md:row-start-1 md:mt-0">
                    <TildeReveal delay={120}>
                        <StoryPhoto
                            photo={storyPhotos.clubMaking}
                            className="aspect-[16/9] bg-[#d2d6cc]"
                            sizes="(min-width: 768px) 27vw, 46vw"
                            framed
                        />
                    </TildeReveal>
                    <TildeReveal className="mt-[45%] w-[82%]" delay={200}>
                        <StoryPhoto
                            photo={storyPhotos.clubOutdoor}
                            className="aspect-[3/4] bg-[#c6d0c2]"
                            sizes="(min-width: 768px) 23vw, 38vw"
                            framed
                        />
                    </TildeReveal>
                </div>
            </div>
        </section>
    );
}
