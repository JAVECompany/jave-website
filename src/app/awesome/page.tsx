import type { Metadata } from "next";
import AwesomeHero from "./_components/hero/AwesomeHero";
import AwesomeStatement from "./_components/statement/AwesomeStatement";
import AwesomeLetter from "./_components/letter/AwesomeLetter";
import AwesomeJourney from "./_components/journey/AwesomeJourney";
import AwesomeTrust from "./_components/trust/AwesomeTrust";
import ServiceCta from "../../components/service-cta/ServiceCta";
import { awesomeService } from "./_data/service";

export const metadata: Metadata = {
    title: "어썸",
    description: awesomeService.description,
};

export default function AwesomePage() {
    return (
        <div
            data-immersive-page
            className="-mx-5 -mt-44 -mb-16 min-w-0 bg-[#f6f2eb] [--service-ink:#182033] [--service-accent:#9a7655] [--service-muted:#756d64] [--service-tint:#ece3d6] sm:-mx-8 sm:-mt-40 sm:-mb-24 lg:-mx-16"
        >
            <AwesomeHero />
            <AwesomeStatement />
            <AwesomeLetter />
            <AwesomeJourney />
            <AwesomeTrust />
            <div className="border-t border-[#d8d0c5] px-6 pb-12 sm:px-10 sm:pb-20 lg:px-[7vw]">
                <ServiceCta
                    name="어썸"
                    logo="/images/awesome/brand/app-icon.png"
                    title={awesomeService.ctaTitle}
                    otherName="틸드"
                    otherHref="/tilde/"
                />
            </div>
        </div>
    );
}
