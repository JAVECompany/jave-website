import Image from "next/image";
import ScrollReveal from "../../../../components/motion/ScrollReveal";
import ServiceHeading from "../../../../components/service-heading/ServiceHeading";
import { awesomePrinciples } from "../../_data/service";

export default function AwesomeTrust() {
    return (
        <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,.85fr)] items-center gap-[clamp(40px,8vw,150px)] px-[4vw] pt-[140px] pb-5 max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[900px]:px-[15px] max-[900px]:pt-[85px] max-[900px]:pb-0 max-[600px]:px-[3px] max-[600px]:pt-[75px]">
            <ScrollReveal>
                <ServiceHeading
                    eyebrow="03 · TRUST BEFORE EVERYTHING"
                    title={"설렘의 바탕에는,\n편안한 신뢰가 있도록."}
                    description="좋은 연결은 서로를 존중하는 마음에서 시작됩니다. 어썸이 만남을 준비하는 세 가지 원칙을 소개합니다."
                />
                <div className="mt-[45px] max-[900px]:mt-[30px]">
                    {awesomePrinciples.map((item, index) => (
                        <div
                            key={item.title}
                            className="grid grid-cols-[26px_1fr] gap-x-[18px] gap-y-[9px] border-t border-[#ddd4cb] py-[22px]"
                        >
                            <span className="pt-[3px] text-[10px] text-[#a27a54]">
                                0{index + 1}
                            </span>
                            <h3 className="text-[17px] font-[550] tracking-[-.025em] text-[#182033] max-[600px]:text-base">
                                {item.title}
                            </h3>
                            <p className="col-start-2 max-w-[38ch] text-sm leading-[1.8] break-keep text-[#827569] max-[600px]:text-[13px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
            <ScrollReveal
                className="relative overflow-hidden rounded-[32px] bg-[#e8d7c5] max-[900px]:mx-auto max-[900px]:w-full max-[900px]:max-w-[480px] max-[600px]:rounded-3xl"
                delay={100}
            >
                <Image
                    src="/images/awesome/photography/app-design-preview.webp"
                    width={531}
                    height={732}
                    sizes="(max-width: 900px) 90vw, 40vw"
                    alt="제공된 어썸 브랜드 보드에서 추출한 앱 디자인 예시"
                    className="block h-auto w-full"
                />
                <span className="absolute right-5 bottom-[23px] left-5 text-center text-[13px] text-[#f9eee1] [font-family:'Noto_Serif_KR',serif] [text-shadow:0_2px_10px_#0009]">
                    가까운 듯, 더 좋은 인연으로.
                </span>
            </ScrollReveal>
        </section>
    );
}
