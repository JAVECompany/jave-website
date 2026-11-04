import { storyPhotos } from "../../_data/stories";
import TildeReveal from "../motion/TildeReveal";
import StoryPhoto from "./StoryPhoto";

export default function TodayGallery() {
    return (
        <div className="grid min-w-0 grid-cols-12 items-start gap-2 sm:gap-3 lg:gap-4">
            <TildeReveal className="col-span-3 col-start-4 row-start-1 min-w-0">
                <StoryPhoto
                    photo={storyPhotos.todayDetail}
                    className="aspect-[16/9] rounded-[10px]! bg-[#d7cabb] sm:rounded-[14px]!"
                    sizes="(min-width: 768px) 17vw, 23vw"
                    framed
                />
            </TildeReveal>
            <div className="col-span-4 col-start-1 row-start-2 grid min-w-0 gap-2 sm:gap-3 lg:gap-4">
                <TildeReveal className="w-full" delay={80}>
                    <StoryPhoto
                        photo={storyPhotos.todayWalk}
                        className="aspect-[16/9] bg-[#d8dfd2]"
                        sizes="(min-width: 768px) 23vw, 31vw"
                        framed
                    />
                </TildeReveal>
                <TildeReveal className="w-[82%] justify-self-end" delay={140}>
                    <StoryPhoto
                        photo={storyPhotos.todayCoffee}
                        className="aspect-[16/9] bg-[#e4dace]"
                        sizes="(min-width: 768px) 19vw, 25vw"
                        framed
                    />
                </TildeReveal>
            </div>
            <TildeReveal className="col-span-4 col-start-5 row-start-2 min-w-0" delay={40}>
                <StoryPhoto
                    photo={storyPhotos.todayGroup}
                    className="aspect-[3/4] bg-[#e2d9cb]"
                    sizes="(min-width: 768px) 23vw, 31vw"
                    framed
                />
            </TildeReveal>
            <div className="col-span-4 col-start-9 row-start-2 mt-[12%] grid min-w-0 gap-2 sm:gap-3 lg:gap-4">
                <TildeReveal className="w-[94%]" delay={120}>
                    <StoryPhoto
                        photo={storyPhotos.todaySunset}
                        className="aspect-[16/9] bg-[#d5d6c9]"
                        sizes="(min-width: 768px) 22vw, 29vw"
                        framed
                    />
                </TildeReveal>
                <TildeReveal className="w-[64%]" delay={200}>
                    <StoryPhoto
                        photo={storyPhotos.todayLaugh}
                        className="aspect-[3/4] bg-[#e2ded2]"
                        sizes="(min-width: 768px) 15vw, 20vw"
                        framed
                    />
                </TildeReveal>
            </div>
        </div>
    );
}
