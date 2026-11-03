import type { Metadata } from "next";
import AwesomeSection from "./_components/service-intro/AwesomeSection";

export const metadata: Metadata = {
    title: "어썸",
    description: "JAVE의 어썸 서비스를 소개합니다.",
};

export default function AwesomePage() {
    return <AwesomeSection />;
}
