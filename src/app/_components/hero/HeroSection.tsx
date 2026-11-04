import Image from "next/image";
import { company } from "../../../data/company";

export default function HeroSection() {
    return (
        <section
            className="relative isolate flex min-h-dvh flex-col justify-end bg-[#263a30] px-6 pt-36 pb-9 text-[#faf8f0] sm:px-10 sm:pb-12 lg:px-[6vw] lg:pt-32 lg:pb-14"
            aria-labelledby="company-title"
        >
            <div className="absolute inset-0 -z-10 lg:left-[28%]">
                <Image
                    src="/images/tilde/photography/community.webp"
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 72vw, 100vw"
                    className="object-cover object-[58%_center] lg:object-[62%_center]"
                />
                <div className="absolute inset-0 bg-[#14251b]/35" />
                <div className="absolute inset-0 bg-linear-to-t from-[#172b21] via-[#172b21]/35 to-transparent lg:bg-linear-to-r lg:from-[#263a30] lg:via-[#263a30]/30 lg:to-transparent" />
            </div>
            <div className="relative mt-12 mb-12 sm:mb-16 lg:mt-0 lg:mb-[6vh]">
                <p lang="en" className="mb-6 text-[10px] tracking-[.26em] text-white/70 sm:text-xs">
                    A LITTLE CLOSER TO EACH OTHER
                </p>
                <p
                    lang="en"
                    className="mb-6 text-[clamp(5.5rem,12vw,13rem)] leading-[.8] font-light tracking-[-.075em] sm:mb-10"
                >
                    {company.name}
                </p>
                <h1
                    id="company-title"
                    className="font-['Noto_Serif_KR',serif] text-[clamp(2.3rem,3.7vw,5.6rem)] leading-[1.45] font-normal tracking-[-.07em] break-keep"
                >
                    사람과 사람이
                    <br />
                    가까워지는 방식.
                </h1>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-7 border-t border-white/30 pt-6">
                <p className="max-w-[30em] text-sm leading-[1.9] break-keep text-white/80 sm:text-base">
                    취향을 나누는 순간부터, 진심을 전하는 첫 편지까지.
                    <br className="hidden sm:block" />
                    JAVE는 일상 속 새로운 연결을 준비합니다.
                </p>
                <a
                    href="#company-story"
                    className="inline-flex min-h-11 items-center gap-8 text-[11px] tracking-[.18em] text-white/90 transition-colors hover:text-white"
                >
                    OUR STORY{" "}
                    <span aria-hidden="true" className="text-lg">
                        ↓
                    </span>
                </a>
            </div>
        </section>
    );
}
