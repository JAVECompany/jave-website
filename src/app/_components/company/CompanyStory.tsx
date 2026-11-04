export default function CompanyStory() {
    return (
        <section
            id="company-story"
            aria-labelledby="company-story-title"
            className="grid gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[.8fr_1.5fr] lg:gap-20 lg:px-[6vw] lg:py-36"
        >
            <p lang="en" className="text-[11px] tracking-[.24em] text-[#6c786d]">
                OUR PERSPECTIVE
            </p>
            <div>
                <h2
                    id="company-story-title"
                    className="font-['Noto_Serif_KR',serif] text-[clamp(1.9rem,3.4vw,4.6rem)] leading-[1.5] tracking-[-.065em] break-keep"
                >
                    좋은 만남이 있는 일상은,
                    <br />
                    조금 다르게 흘러갑니다.
                </h2>
                <div className="mt-10 grid gap-6 text-sm leading-[2] break-keep text-[#657066] sm:grid-cols-2 sm:gap-12 sm:text-base">
                    <p>
                        함께 좋아하는 것을 발견하고, 나의 이야기를 건네고, 다음 만남을 기다리는 일.
                        우리는 그 작은 순간들이 일상을 더 풍성하게 만든다고 생각합니다.
                    </p>
                    <p>
                        JAVE는 같은 취향을 나누는 틸드와 한 통의 편지로 인연을 시작하는 어썸을
                        준비하고 있습니다. 서로 다른 방식으로, 사람과 사람 사이를 가깝게.
                    </p>
                </div>
            </div>
        </section>
    );
}
