import type { Metadata } from "next";
import TildeHero from "./_components/hero/TildeHero";
import TildeConnections from "./_components/connections/TildeConnections";
import TildeMode from "./_components/mode/TildeMode";
import TildeActivities from "./_components/activities/TildeActivities";
import ServiceCta from "../../components/service-cta/ServiceCta";
import { tildeService } from "./_data/service";

export const metadata: Metadata = {
    title: "틸드",
    description: tildeService.description,
};

export default function TildePage() {
    return (
        <div className="w-full min-w-0 [--service-ink:#465543] [--service-accent:#697e56] [--service-muted:#606859] [--service-tint:#dce4d1]">
            <TildeHero />
            <TildeConnections />
            <TildeMode />
            <TildeActivities />
            <ServiceCta
                name="틸드"
                logo="/images/tilde/brand/tilde-symbol.webp"
                title={tildeService.ctaTitle}
                otherName="어썸"
                otherHref="/awesome/"
            />
        </div>
    );
}
