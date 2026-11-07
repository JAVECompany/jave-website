import { todayCyclingPhoto } from "../../_data/today-gallery";
import TildeReveal from "../motion/TildeReveal";
import StoryPhoto from "./StoryPhoto";

export default function TodayCyclingPhoto() {
    return (
        <div className="mt-16 ml-auto hidden w-[90%] lg:block xl:mt-20">
            <TildeReveal delay={140}>
                <StoryPhoto
                    photo={todayCyclingPhoto}
                    className="aspect-video bg-[#e4dace]"
                    sizes="30vw"
                    framed
                />
            </TildeReveal>
        </div>
    );
}
