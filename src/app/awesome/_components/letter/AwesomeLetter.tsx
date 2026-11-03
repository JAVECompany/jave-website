import ScrollReveal from "../../../../components/motion/ScrollReveal";
import ServiceHeading from "../../../../components/service-heading/ServiceHeading";
import AwesomeLetterScreen from "../app-preview/AwesomeLetterScreen";
import styles from "./awesome-letter.module.css";

export default function AwesomeLetter() {
    return (
        <section className={styles.section}>
            <ScrollReveal className={styles.visual}>
                <div className={styles.paper} aria-hidden="true" />
                <div className={styles.phone}>
                    <AwesomeLetterScreen />
                </div>
                <span className={styles.label}>마음에 남은 한 문장으로부터.</span>
            </ScrollReveal>
            <ScrollReveal className={styles.copy} delay={100}>
                <ServiceHeading
                    eyebrow="01 · A LETTER, NOT A SWIPE"
                    title={"첫인사는 짧아도,\n마음은 깊을 수 있도록."}
                    description={
                        "누군가의 취향과 일상에 마음이 머물렀다면,\n사진과 편지로 나의 이야기를 전해보세요.\n어썸은 서로를 알아가는 첫 문장을 소중히 여깁니다."
                    }
                />
                <div className={styles.details}>
                    <p>
                        <span>01</span>프로필과 일상을 천천히 살펴보고
                    </p>
                    <p>
                        <span>02</span>마음에 남은 이야기에 편지를 보내고
                    </p>
                    <p>
                        <span>03</span>서로의 마음이 닿으면 다음 단계로
                    </p>
                </div>
                <p className={styles.note}>
                    화면은 제공된 디자인 문서를 바탕으로 재구성한 예시입니다.
                    <br />
                    아직 출시 전이며, 표시된 인물과 내용은 실제 회원 정보가 아닙니다.
                </p>
            </ScrollReveal>
        </section>
    );
}
