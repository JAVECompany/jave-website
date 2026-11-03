import type { Metadata } from "next";
import ContactSection from "./_components/contact-info/ContactSection";

export const metadata: Metadata = {
    title: "문의",
    description: "JAVE 문의 및 제휴 안내 페이지입니다.",
};

export default function ContactPage() {
    return <ContactSection />;
}
