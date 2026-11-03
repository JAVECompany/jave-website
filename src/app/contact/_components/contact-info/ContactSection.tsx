import { contact } from "../../_data/contact";
import PageIntro from "../../../../components/page-intro/PageIntro";

export default function ContactSection() {
    return <PageIntro eyebrow="CONTACT" title="문의" description={contact.description} />;
}
