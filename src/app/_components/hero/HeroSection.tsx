import { company } from "../../../data/company";
import PageIntro from "../../../components/page-intro/PageIntro";

export default function HeroSection() {
    return <PageIntro eyebrow="COMPANY" title={company.name} description={company.description} />;
}
