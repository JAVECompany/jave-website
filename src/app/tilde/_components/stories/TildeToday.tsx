import TildeReveal from "../motion/TildeReveal";
import { todayStory } from "../../_data/stories";
import StoryCopy from "./StoryCopy";
import TodayGallery from "./TodayGallery";

export default function TildeToday() {
    return (
        <section
            id="tilde-today"
            aria-labelledby="tilde-today-title"
            className="-mx-5 grid scroll-mt-12 items-start gap-12 px-5 pt-12 pb-16 sm:-mx-8 sm:px-8 sm:pt-16 sm:pb-20 lg:-mx-16 lg:grid-cols-[minmax(0,.65fr)_minmax(0,1.35fr)] lg:gap-[4vw] lg:px-16 lg:pt-20 lg:pb-24"
        >
            <TildeReveal className="min-w-0 lg:pt-[7vw]">
                <StoryCopy id="tilde-today-title" {...todayStory} />
            </TildeReveal>
            <TodayGallery />
        </section>
    );
}
