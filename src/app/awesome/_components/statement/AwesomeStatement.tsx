import ScrollReveal from "../../../../components/motion/ScrollReveal";

export default function AwesomeStatement() {
    return (
        <section
            className="scroll-mt-8 border-b border-[#d8d0c5] px-6 py-24 text-center text-[#182033] sm:px-10 sm:py-36 lg:px-[7vw] lg:py-44"
            id="awesome-experience"
        >
            <ScrollReveal>
                <p className="mb-8 text-[10px] tracking-[.22em] text-[#947454] sm:mb-12">
                    A MEANINGFUL BEGINNING
                </p>
                <h2 className="text-[clamp(1.65rem,3.6vw,4.25rem)] leading-[1.65] font-normal tracking-[-.065em] text-balance [font-family:'Noto_Serif_KR',serif]">
                    마음을 알아가는 시간은
                    <br />
                    <em className="text-[#a27a54] not-italic">조금 더 다정해도</em> 괜찮으니까.
                </h2>
                <p className="mx-auto mt-8 max-w-[40em] text-sm leading-[2] break-keep text-[#756d64] sm:mt-10 sm:text-base">
                    스쳐 가는 호감을 넘어, 한 사람의 이야기를 천천히.
                    <br />
                    어썸은 진심이 더 잘 전해지는 만남을 준비합니다.
                </p>
            </ScrollReveal>
        </section>
    );
}
