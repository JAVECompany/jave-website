import type { Metadata } from "next";
import HeroSection from "./_components/hero/HeroSection";
import CompanySection from "./_components/company/CompanySection";

export const metadata: Metadata = {
    title: "소개",
    description: "JAVE 기업 소개 페이지입니다.",
};

export default function CompanyPage() {
    return <><HeroSection /><CompanySection /></>;
}
