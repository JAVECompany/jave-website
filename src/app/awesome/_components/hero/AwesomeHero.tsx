import Image from "next/image";
import { awesomeService } from "../../_data/service";
import ScrollScene from "../../../../components/motion/ScrollScene";
import AwesomeDiscoverScreen from "../app-preview/AwesomeDiscoverScreen";
import AwesomeInvitationScreen from "../app-preview/AwesomeInvitationScreen";
import styles from "./awesome-hero.module.css";

export default function AwesomeHero() {
    return (
        <section
            aria-labelledby="awesome-title"
            className="relative isolate min-h-dvh bg-[#131b2c] text-[#f4eee5]"
        >
            <ScrollScene className="grid min-h-dvh min-w-0 items-center gap-12 px-6 pt-36 pb-12 sm:px-10 sm:pt-40 sm:pb-16 min-[1101px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-[1101px]:gap-[5vw] lg:px-[7vw]">
                <div className="relative z-10 min-w-0">
                    <p className="mb-8 flex items-center gap-3 text-[10px] tracking-[.22em] text-[#d1b795] sm:mb-12">
                        <Image
                            src="/images/awesome/brand/app-icon.png"
                            width={32}
                            height={32}
                            priority
                            alt="어썸 브랜드 로고"
                            className="rounded-lg"
                        />
                        A LETTER. A NEW BEGINNING.
                    </p>
                    <p
                        lang="en"
                        className="mb-5 font-['Noto_Serif_KR',serif] text-[clamp(2.4rem,5.8vw,7rem)] font-normal leading-none tracking-[-.065em]"
                    >
                        Awesome.
                    </p>
                    <h1
                        id="awesome-title"
                        className="font-['Noto_Serif_KR',serif] text-[clamp(2.25rem,4vw,5.25rem)] leading-[1.35] font-normal tracking-[-.065em] whitespace-pre-line break-keep"
                    >
                        {awesomeService.tagline}
                    </h1>
                    <p className="mt-7 text-[clamp(.95rem,1.2vw,1.25rem)] leading-[1.9] whitespace-pre-line text-[#c2c5cb] sm:mt-9">
                        {awesomeService.heroDescription}
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 sm:mt-12">
                        <a
                            href="#awesome-experience"
                            className="inline-flex min-h-11 items-center gap-12 border-b border-[#d1b795]/60 text-sm text-[#ead5b9] transition-colors hover:border-[#ead5b9] hover:text-white"
                        >
                            어썸 알아보기 <span aria-hidden="true">↓</span>
                        </a>
                        <span className="text-[11px] text-[#a7aeba]">출시 준비 중</span>
                    </div>
                </div>
                <div className={styles.visual}>
                    <span className={styles.light} aria-hidden="true" />
                    <span className={styles.rule} aria-hidden="true" />
                    <div className={styles.backPhone}>
                        <AwesomeInvitationScreen />
                    </div>
                    <div className={styles.frontPhone}>
                        <AwesomeDiscoverScreen />
                    </div>
                    <p className={styles.note}>마음이 닿는, 우리의 다음 장.</p>
                </div>
            </ScrollScene>
            <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 px-6 py-5 text-[9px] tracking-[.2em] text-[#a7aeba] sm:px-10 sm:text-[10px] lg:px-[7vw]">
                <span lang="en">AWESOME — A CONNECTION WITH INTENTION</span>
                <span>어썸 · JAVE</span>
            </div>
        </section>
    );
}
