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
            <div className="mt-12 grid min-w-0 grid-cols-12 items-start gap-x-2 gap-y-7 p-2 sm:mt-16 sm:gap-x-4 sm:gap-y-10 sm:p-3 md:gap-y-0 lg:gap-x-6 lg:p-4">
                <TildeReveal className="col-span-10 col-start-2 row-start-1 min-w-0 md:col-span-5 md:col-start-4 md:mt-[40%]">
                    <StoryPhoto
                        photo={storyPhotos.clubActivity}
                        className="aspect-[16/9] bg-[#d5ded4]"
                        sizes="(min-width: 768px) 40vw, 78vw"
                        framed
                    />
                </TildeReveal>
                <TildeReveal
                    className="col-span-6 col-start-1 row-start-2 min-w-0 md:col-span-3 md:col-start-1 md:row-start-1 md:mt-[20%]"
                    delay={80}
                >
                    <StoryPhoto
                        photo={storyPhotos.clubDetail}
                        className="aspect-[3/4] bg-[#e4e6de]"
                        sizes="(min-width: 768px) 24vw, 46vw"
                        framed
                    />
                </TildeReveal>
                <TildeReveal
                    className="col-span-5 col-start-8 row-start-2 mt-[25%] min-w-0 md:col-span-2 md:col-start-2 md:row-start-1 md:mt-[250%]"
                    delay={160}
                >
                    <StoryPhoto
                        photo={storyPhotos.clubReading}
                        className="aspect-[16/9] bg-[#dfd5c7]"
                        sizes="(min-width: 768px) 16vw, 38vw"
                        framed
                    />
                </TildeReveal>
                <TildeReveal
                    className="col-span-5 col-start-2 row-start-3 min-w-0 md:col-span-3 md:col-start-10 md:row-start-1"
                    delay={120}
                >
                    <StoryPhoto
                        photo={storyPhotos.clubMaking}
                        className="aspect-[16/9] bg-[#d2d6cc]"
                        sizes="(min-width: 768px) 24vw, 38vw"
                        framed
                    />
                </TildeReveal>
                <TildeReveal
                    className="col-span-6 col-start-7 row-start-3 mt-[20%] min-w-0 md:col-span-2 md:col-start-10 md:row-start-1 md:mt-[165%]"
                    delay={200}
                >
                    <StoryPhoto
                        photo={storyPhotos.clubOutdoor}
                        className="aspect-[3/4] bg-[#c6d0c2]"
                        sizes="(min-width: 768px) 16vw, 46vw"
                        framed
                    />
                </TildeReveal>
            </div>
        </section>
    );
}
