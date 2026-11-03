import Image from "next/image";
import DevicePreview from "../../../../components/device-preview/DevicePreview";
import styles from "./tilde-preview.module.css";

type TildeMatchScreenProps = { paused?: boolean };

export default function TildeMatchScreen({ paused = false }: TildeMatchScreenProps) {
    return (
        <DevicePreview
            label={`틸드 만남 탭 디자인 예시 — ${paused ? "만남을 쉬는 중에도 모임은 계속" : "취향과 이야기로 발견하는 새로운 사람"}`}
        >
            <div className={styles.app}>
                <div className={styles.brand}>
                    <Image
                        src="/images/tilde/brand/tilde-symbol.webp"
                        width={50}
                        height={18}
                        alt=""
                    />
                    <strong>틸드</strong>
                    <span>♡ 5</span>
                </div>
                <div className={styles.titleRow}>
                    <h3>만남</h3>
                    <span className={styles.toggle}>{paused ? "OFF" : "ON"}</span>
                </div>
                <p className={styles.subtitle}>나와 닮은 취향, 새로운 이야기.</p>
                <div className={styles.chips}>
                    <span>서울</span>
                    <span>관심사</span>
                    <span>필터 ≡</span>
                </div>
                <div className={styles.matchCard}>
                    <div className={styles.portrait}>
                        <Image
                            src="/images/tilde/photography/portrait-woman.webp"
                            fill
                            sizes="280px"
                            alt=""
                        />
                    </div>
                    <div className={styles.person}>
                        <strong>서윤, 27</strong>
                        <small>서울 · 산책과 작은 서점</small>
                        <p>
                            주말의 작은 즐거움을
                            <br />
                            함께 나누고 싶어요.
                        </p>
                        <span>산책</span>
                        <span>독서</span>
                        <span>커피</span>
                    </div>
                    {paused && (
                        <div className={styles.pauseOverlay}>
                            <span>Ⅱ</span>
                            <h3>잠시, 나의 시간</h3>
                            <p>
                                만남은 쉬어가도
                                <br />
                                취향은 계속 이어져요.
                            </p>
                            <small>번개와 동아리는 그대로 이용해요.</small>
                        </div>
                    )}
                </div>
                <div className={styles.bottomNav}>
                    <span className={styles.selected}>
                        ♡<small>만남</small>
                    </span>
                    <span>
                        ϟ<small>번개</small>
                    </span>
                    <span>
                        ♧<small>동아리</small>
                    </span>
                    <span>
                        ♙<small>내 정보</small>
                    </span>
                </div>
            </div>
        </DevicePreview>
    );
}
