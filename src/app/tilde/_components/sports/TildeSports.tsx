import Image from "next/image";

export default function TildeSports() {
    return (
        <section
            id="tilde-sports"
            aria-labelledby="tilde-sports-title"
            className="mb-[clamp(4.25rem,8vw,8rem)] grid overflow-hidden rounded-[28px] bg-[#233e33] text-[#fbf8ec] md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] md:rounded-[42px]"
        >
            <div className="flex flex-col items-start px-[clamp(1.5rem,4.6vw,5.5rem)] py-[clamp(2.25rem,5vw,6rem)]">
                <p className="flex items-center gap-2.5 text-sm font-medium text-[#e1eda7]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <circle cx="10" cy="10" r="9" fill="currentColor" />
                        <path
                            d="M3 4.5c4.1 1.1 5.7 5.5 3.7 9.1a7 7 0 0 1-2.1 2.5M16.8 15.6c-4.1-1.1-5.8-5.5-3.8-9.2a7 7 0 0 1 2.4-2.5"
                            stroke="#233e33"
                            strokeWidth="1.2"
                        />
                    </svg>
                    스포츠 · 테니스
                </p>
                <h2
                    id="tilde-sports-title"
                    className="mt-[clamp(2.25rem,4.5vw,5rem)] font-['Noto_Serif_KR',serif] text-[clamp(2.45rem,4.1vw,5.3rem)] leading-[1.3] tracking-[-.07em] break-keep"
                >
                    다음 주에도
                    <br />
                    같이 칠래요?
                </h2>
                <p className="mt-5 max-w-[24em] leading-[1.9] break-keep text-[#e0e7d8]">
                    퇴근 후 한 시간, 번개로 만나 가볍게 공을 주고받아요. 한 게임이 아쉬웠다면
                    동아리에서 다음 주 약속을 잡아 봐요.
                </p>
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-8 text-sm font-medium">
                    <a
                        href="#tilde-flash-preview"
                        className="inline-flex min-h-11 items-center gap-2 border-b border-[#dce4d1]/50 hover:border-current focus-visible:outline-white"
                    >
                        번개 미리보기 <span aria-hidden="true">↓</span>
                    </a>
                    <a
                        href="#tilde-club-preview"
                        className="inline-flex min-h-11 items-center gap-2 border-b border-[#dce4d1]/50 hover:border-current focus-visible:outline-white"
                    >
                        동아리 미리보기 <span aria-hidden="true">↓</span>
                    </a>
                </div>
            </div>
            <div className="relative aspect-[3/2] min-h-full bg-[#819376] md:aspect-auto">
                <Image
                    src="/images/tilde/photography/tennis-court.webp"
                    alt="함께 테니스를 즐기는 코트 풍경"
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                />
            </div>
        </section>
    );
}
