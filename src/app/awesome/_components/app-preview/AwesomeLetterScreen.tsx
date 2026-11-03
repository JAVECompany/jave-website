import DevicePreview from "../../../../components/device-preview/DevicePreview";
import styles from "./awesome-preview.module.css";

export default function AwesomeLetterScreen() {
    return (
        <DevicePreview label="어썸 편지 작성 디자인 예시 — 마음에 남은 이야기에 진심을 담아 전하는 첫 편지">
            <div className={styles.letterScreen}>
                <div className={styles.screenTitle}>
                    <span>‹</span>
                    <strong>편지 쓰기</strong>
                    <small>미리보기</small>
                </div>
                <div className={styles.letterPaper}>
                    <span className={styles.letterOverline}>A LETTER FOR YOU</span>
                    <h3>서연님께</h3>
                    <p>안녕하세요, 지훈이라고 해요.</p>
                    <p>
                        ‘좋아하는 카페에서 천천히’라는 말이 마음에 남아서 용기 내어 편지를 보내요.
                    </p>
                    <p>저도 성수동 작은 로스터리를 자주 가는데, 언젠가 같이 가보면 좋겠어요.</p>
                    <span className={styles.signature}>진심을 담아, 지훈</span>
                    <span className={styles.waxSeal}>≈</span>
                </div>
                <div className={styles.letterHint}>
                    만남권은 서로 수락하고
                    <br />
                    연결될 때만 사용돼요.
                </div>
                <div className={styles.sendLetter}>
                    편지 보내기 <span>↗</span>
                </div>
            </div>
        </DevicePreview>
    );
}
