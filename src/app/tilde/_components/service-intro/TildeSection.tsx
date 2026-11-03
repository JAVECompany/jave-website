import { tildeService } from "../../_data/service";
import PageIntro from "../../../../components/page-intro/PageIntro";

export default function TildeSection() {
    return <PageIntro eyebrow="TILDE" title={tildeService.name} description={tildeService.description} />;
}
