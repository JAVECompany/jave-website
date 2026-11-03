import ScrollReveal from "../../../../components/motion/ScrollReveal";

export default function AwesomeStatement() {
    return (
        <section
            className="scroll-mt-[110px] px-5 py-[150px] text-center text-[#182033] max-[600px]:px-1 max-[600px]:py-[86px]"
            id="awesome-experience"
        >
            <ScrollReveal>
                <p className="mb-[34px] text-[10px] tracking-[.17em] text-[#9f8164] max-[600px]:mb-6 max-[600px]:text-[8px] max-[600px]:leading-[1.8]">
                    NOT JUST A MATCH. A MEANINGFUL BEGINNING.
                </p>
                <h2 className="text-[clamp(27px,3.5vw,58px)] leading-[1.7] font-normal tracking-[-.065em] text-balance [font-family:'Noto_Serif_KR',serif] max-[600px]:text-[clamp(24px,6.5vw,32px)]">
                    마음을 알아가는 시간은
                    <br />
                    <em className="text-[#a27a54] not-italic">조금 더 다정해도</em> 괜찮으니까.
                </h2>
                <p className="mt-[35px] text-base leading-[2] break-keep text-[#827569] max-[600px]:mt-6 max-[600px]:text-sm max-[600px]:[&_br]:hidden">
                    스쳐 가는 호감을 넘어, 한 사람의 이야기를 천천히.
                    <br />
                    어썸은 진심이 더 잘 전해지는 만남을 준비합니다.
                </p>
            </ScrollReveal>
        </section>
    );
}
