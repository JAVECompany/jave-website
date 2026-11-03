import ScrollScene from "../../../../components/motion/ScrollScene";
import ServiceHeading from "../../../../components/service-heading/ServiceHeading";
import { awesomeJourney } from "../../_data/service";
import AwesomeInvitationScreen from "../app-preview/AwesomeInvitationScreen";
import styles from "./awesome-journey.module.css";

export default function AwesomeJourney() {
    return (
        <ScrollScene className={styles.scene} pinned>
            <section className={styles.sticky}>
                <div className={styles.copy}>
                    <ServiceHeading
                        eyebrow="02 · YOUR NEXT CHAPTER"
                        title={"마음이 닿은 다음,\n우리의 첫 약속."}
                        description={
                            "서로 만나기로 결정한 두 사람을 위해.\n가능한 일정과 출발 지역을 바탕으로\n첫 만남의 순간까지 이어지는 경험을 준비합니다."
                        }
                        light
                    />
                    <ol className={styles.steps}>
                        {awesomeJourney.map((step) => (
                            <li key={step.number}>
                                <span>{step.number}</span>
                                <div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className={styles.visual}>
                    <span className={styles.orbit} aria-hidden="true" />
                    <div className={styles.phone}>
                        <AwesomeInvitationScreen />
                    </div>
                    <span className={styles.dateNote}>
                        A NEW STORY
                        <br />
                        BEGINS WITH YOU.
                    </span>
                </div>
            </section>
        </ScrollScene>
    );
}
