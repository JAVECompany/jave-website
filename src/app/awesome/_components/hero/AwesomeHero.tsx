import Image from "next/image";
import { awesomeService } from "../../_data/service";
import ScrollScene from "../../../../components/motion/ScrollScene";
import AwesomeDiscoverScreen from "../app-preview/AwesomeDiscoverScreen";
import AwesomeInvitationScreen from "../app-preview/AwesomeInvitationScreen";
import styles from "./awesome-hero.module.css";

export default function AwesomeHero() {
    return (
        <ScrollScene className={styles.hero}>
            <div className={styles.copy}>
                <div className={styles.brand}>
                    <Image
                        src="/images/awesome/brand/app-icon.png"
                        width={48}
                        height={48}
                        priority
                        alt="어썸 브랜드 로고"
                    />
                    <span>
                        어썸 <small>AWESOME</small>
                    </span>
                </div>
                <p className={styles.eyebrow}>A LITTLE CLOSER, A BETTER CONNECTION</p>
                <h1>{awesomeService.tagline}</h1>
                <p className={styles.description}>{awesomeService.heroDescription}</p>
                <div className={styles.actions}>
                    <a href="#awesome-experience">
                        어썸 알아보기 <span aria-hidden="true">↓</span>
                    </a>
                    <span className={styles.status}>출시 준비 중</span>
                </div>
            </div>
            <div className={styles.visual}>
                <span className={styles.glow} aria-hidden="true" />
                <div className={styles.backPhone}>
                    <AwesomeInvitationScreen />
                </div>
                <div className={styles.frontPhone}>
                    <AwesomeDiscoverScreen />
                </div>
                <span className={styles.note}>마음이 닿는, 우리의 다음 장.</span>
            </div>
        </ScrollScene>
    );
}
