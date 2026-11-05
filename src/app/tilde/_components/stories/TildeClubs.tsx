import TildeReveal from "../motion/TildeReveal";
import { clubsStory } from "../../_data/stories";
import ClubsGallery from "./ClubsGallery";
import StoryCopy from "./StoryCopy";

export default function TildeClubs() {
    return (
        <section
            id="tilde-clubs"
            aria-labelledby="tilde-clubs-title"
            className="scroll-mt-12 pt-32 pb-8 sm:pt-44 sm:pb-12 lg:pt-64 lg:pb-16"
        >
            <div className="grid min-w-0 grid-cols-1 items-start gap-10 p-2 sm:p-3 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-center lg:gap-[5vw] lg:p-4">
                <TildeReveal className="mx-auto w-fit max-w-full lg:col-start-2 lg:row-start-1 lg:mx-0">
                    <StoryCopy id="tilde-clubs-title" {...clubsStory} />
                </TildeReveal>
                <ClubsGallery />
            </div>
        </section>
    );
}
