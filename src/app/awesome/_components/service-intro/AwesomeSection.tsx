import { awesomeService } from "../../_data/service";
import PageIntro from "../../../../components/page-intro/PageIntro";

export default function AwesomeSection() {
    return <PageIntro eyebrow="AWESOME" title={awesomeService.name} description={awesomeService.description} />;
}
