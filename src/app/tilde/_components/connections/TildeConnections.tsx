import ScrollReveal from "../../../../components/motion/ScrollReveal";
import { tildeConnections } from "../../_data/service";
import TildeConnectionCard from "./TildeConnectionCard";

export default function TildeConnections() {
    return (
        <section
            aria-labelledby="tilde-connections-title"
            className="scroll-mt-28 pb-20 sm:pb-24 lg:pb-28"
            id="tilde-connections"
        >
            <h2 id="tilde-connections-title" className="sr-only">
                틸드의 1:1 만남, 번개모임, 동아리
            </h2>
            <div className="grid grid-cols-3 gap-7 max-[900px]:gap-[18px] max-[700px]:grid-cols-1 max-[700px]:gap-10">
                {tildeConnections.map((item, index) => (
                    <ScrollReveal key={item.label} delay={index * 100}>
                        <TildeConnectionCard {...item} number={`0${index + 1}`} />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
