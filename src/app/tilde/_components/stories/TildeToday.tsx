import TildeReveal from "../motion/TildeReveal";
import { todayStory } from "../../_data/stories";
import StoryCopy from "./StoryCopy";
import TodayGallery from "./TodayGallery";

export default function TildeToday() {
    return (
        <section
            id="tilde-today"
            aria-labelledby="tilde-today-title"
            className="-mx-5 grid scroll-mt-12 items-center gap-12 px-5 py-20 sm:-mx-8 sm:px-8 sm:py-28 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] md:gap-12 lg:-mx-16 lg:gap-[7vw] lg:px-16 lg:py-36"
        >
            <TildeReveal>
                <StoryCopy id="tilde-today-title" {...todayStory} />
            </TildeReveal>
            <TodayGallery />
        </section>
    );
}
