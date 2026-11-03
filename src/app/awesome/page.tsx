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
        <div className="w-full min-w-0 [--service-ink:#0e1428] [--service-accent:#a27a54] [--service-muted:#827569] [--service-tint:#f2e9df]">
            <AwesomeHero />
            <AwesomeStatement />
            <AwesomeLetter />
            <AwesomeJourney />
            <AwesomeTrust />
            <ServiceCta
                name="어썸"
                logo="/images/awesome/brand/app-icon.png"
                title={awesomeService.ctaTitle}
                otherName="틸드"
                otherHref="/tilde/"
            />
        </div>
    );
}
