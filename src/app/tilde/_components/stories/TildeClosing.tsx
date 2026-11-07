import { tildeClosing } from "../../_data/closing";
import TildeReveal from "../motion/TildeReveal";

export default function TildeClosing() {
    return (
        <section
            aria-labelledby="tilde-closing-title"
            className="mt-10 border-t border-[#465543]/15 bg-[#fdfbf8] px-2 pt-20 pb-12 text-center sm:mt-16 sm:pt-24 sm:pb-16 lg:mt-20 lg:pt-28 lg:pb-20"
        >
            <TildeReveal>
                <h2
                    id="tilde-closing-title"
                    className="font-['Noto_Serif_KR',serif] text-[clamp(2.15rem,4vw,4.5rem)] leading-[1.4] font-normal tracking-[-.055em] whitespace-pre-line break-keep text-[#303b30]"
                >
                    {tildeClosing.title}
                </h2>
                <p className="mt-8 text-xs leading-relaxed tracking-[.025em] text-[#70756b] sm:mt-10 sm:text-sm">
                    {tildeClosing.description}
                </p>
                <p lang="en" className="mt-3 text-xs font-medium tracking-[.3em] text-[#465543]">
                    {tildeClosing.brand}
                </p>
            </TildeReveal>
        </section>
    );
}
