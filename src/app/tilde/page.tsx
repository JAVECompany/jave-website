import type { Metadata } from "next";
import TildeSection from "./_components/service-intro/TildeSection";

export const metadata: Metadata = {
    title: "틸드",
    description: "JAVE의 틸드 서비스를 소개합니다.",
};

export default function TildePage() {
    return <TildeSection />;
}
