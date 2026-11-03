import { company } from "../../../data/company";

export default function HeroSection() {
    return (
        <section className="pb-12 sm:pb-16 lg:pb-20" aria-labelledby="company-title">
            <p className="flex items-center gap-3 text-xs font-medium tracking-[.16em] text-[#566250]">
                {company.name}
                <span aria-hidden="true" className="h-px w-8 bg-[#acb4a6]" />
                <span className="tracking-normal">회사소개</span>
            </p>
            <div className="mt-6 grid items-end gap-7 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
                <h1
                    id="company-title"
                    className="font-['Noto_Serif_KR',serif] text-[clamp(2.8rem,5.3vw,6.5rem)] leading-[1.28] font-normal tracking-[-.075em] break-keep text-[#27342d]"
                >
                    사람과 사람이
                    <br />
                    가까워지는 방식.
                </h1>
                <p className="max-w-[30em] text-base leading-[1.9] break-keep text-[#535b55] sm:text-lg lg:pb-2">
                    JAVE는 같은 취향을 나누는 틸드와 한 통의 편지로 인연을 시작하는 어썸을 준비하고
                    있습니다.
                </p>
            </div>
        </section>
    );
}
