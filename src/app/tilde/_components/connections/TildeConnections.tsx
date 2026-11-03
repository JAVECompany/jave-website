import ScrollReveal from "../../../../components/motion/ScrollReveal";
import ServiceHeading from "../../../../components/service-heading/ServiceHeading";
import { tildeConnections } from "../../_data/service";
import TildeConnectionCard from "./TildeConnectionCard";

export default function TildeConnections() {
    return (
        <section
            className="scroll-mt-[110px] px-2.5 pt-[140px] pb-[110px] max-[900px]:px-2 max-[900px]:py-[85px] max-[700px]:px-[3px] max-[700px]:pb-[70px]"
            id="tilde-connections"
        >
            <ScrollReveal>
                <ServiceHeading
                    eyebrow="THREE WAYS TO CONNECT"
                    title={"어떤 관계든,\n나의 속도로."}
                    description={
                        "마음이 끌리는 대화도, 오늘의 작은 약속도,\n매주 기다려지는 취미도. 틸드 안에서 자연스럽게 이어집니다."
                    }
                />
            </ScrollReveal>
            <div className="mt-[55px] grid grid-cols-3 gap-7 max-[900px]:gap-[18px] max-[700px]:mt-[35px] max-[700px]:grid-cols-1 max-[700px]:gap-10">
                {tildeConnections.map((item, index) => (
                    <ScrollReveal key={item.label} delay={index * 100}>
                        <TildeConnectionCard {...item} number={`0${index + 1}`} />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
