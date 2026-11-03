import ScrollScene from "../../../../components/motion/ScrollScene";
import ServiceHeading from "../../../../components/service-heading/ServiceHeading";
import TildeFlashScreen from "../app-preview/TildeFlashScreen";
import TildeClubScreen from "../app-preview/TildeClubScreen";
import styles from "./tilde-activities.module.css";

export default function TildeActivities() {
    return (
        <ScrollScene className={styles.scene} pinned>
            <section className={styles.sticky} id="tilde-activities">
                <div className={styles.visual}>
                    <div id="tilde-flash-preview" tabIndex={-1} className={styles.flash}>
                        <TildeFlashScreen />
                    </div>
                    <div id="tilde-club-preview" tabIndex={-1} className={styles.club}>
                        <TildeClubScreen />
                    </div>
                    <span className={styles.caption}>
                        TODAY&apos;S PLANS, TOMORROW&apos;S FRIENDS.
                    </span>
                </div>
                <div className={styles.copy}>
                    <ServiceHeading
                        eyebrow="FROM A MOMENT TO EVERYDAY"
                        title={"오늘의 작은 약속이,\n오래가는 취향으로."}
                        description={
                            "처음에는 시간이 맞아서,\n그다음에는 취향이 맞아서.\n가벼운 번개에서 꾸준한 동아리까지\n다시 만나고 싶은 일상을 만들어갑니다."
                        }
                    />
                    <div className={styles.details}>
                        <div>
                            <span>ϟ</span>
                            <h3>오늘, 가볍게 만나는 번개</h3>
                            <p>시간과 장소, 함께할 활동을 보고 부담 없이 작은 모임을 발견해요.</p>
                        </div>
                        <div>
                            <span>~</span>
                            <h3>다음 주도 기다려지는 동아리</h3>
                            <p>같은 취미를 가진 사람들과, 우리의 일상을 차곡차곡 쌓아가요.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollScene>
    );
}
