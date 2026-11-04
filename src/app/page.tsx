import type { Metadata } from "next";
import HeroSection from "./_components/hero/HeroSection";
import CompanySection from "./_components/company/CompanySection";
import CompanyStory from "./_components/company/CompanyStory";

export const metadata: Metadata = {
    title: "소개",
    description:
        "JAVE가 준비하는 두 만남 서비스, 취향으로 이어지는 틸드와 편지로 시작하는 어썸을 소개합니다.",
};

export default function CompanyPage() {
    return (
        <div
            data-immersive-page
            className="-mx-5 -mt-44 -mb-16 min-w-0 bg-[#f4f2eb] text-[#26372e] sm:-mx-8 sm:-mt-40 sm:-mb-24 lg:-mx-16"
        >
            <HeroSection />
            <CompanyStory />
            <CompanySection />
        </div>
    );
}
