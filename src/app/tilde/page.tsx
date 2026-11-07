import type { Metadata } from "next";
import TildeHero from "./_components/hero/TildeHero";
import TildeConversation from "./_components/stories/TildeConversation";
import TildeToday from "./_components/stories/TildeToday";
import TildeClubs from "./_components/stories/TildeClubs";
import TildeClosing from "./_components/stories/TildeClosing";
import { tildeService } from "./_data/service";

export const metadata: Metadata = {
    title: "틸드",
    description: tildeService.description,
};

export default function TildePage() {
    return (
        <div
            data-immersive-page
            data-tilde-page
            className="w-full min-w-0 [--service-ink:#465543] [--service-accent:#697e56] [--service-muted:#606859] [--service-tint:#dce4d1]"
        >
            <TildeHero />
            <TildeConversation />
            <TildeToday />
            <TildeClubs />
            <TildeClosing />
        </div>
    );
}
