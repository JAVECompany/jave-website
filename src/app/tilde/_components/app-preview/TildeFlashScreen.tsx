import Image from "next/image";
import DevicePreview from "../../../../components/device-preview/DevicePreview";
import styles from "./tilde-preview.module.css";

export default function TildeFlashScreen() {
    return (
        <DevicePreview label="틸드 번개모임 디자인 예시 — 오늘 시간이 맞는 사람들과 가볍게 만드는 약속">
            <div className={styles.app}>
                <div className={styles.brand}>
                    <Image
                        src="/images/tilde/brand/tilde-symbol.webp"
                        width={50}
                        height={18}
                        alt=""
                    />
                    <strong>틸드</strong>
                    <span>＋</span>
                </div>
                <div className={styles.titleRow}>
                    <h3>번개모임</h3>
                    <span>ϟ</span>
                </div>
                <p className={styles.subtitle}>오늘의 가벼운 약속</p>
                <div className={styles.chips}>
                    <span>서울</span>
                    <span>오늘</span>
                    <span>취향 찾기</span>
                </div>
                <div className={styles.eventImage}>
                    <Image src="/images/tilde/photography/reading.webp" fill sizes="280px" alt="" />
                    <span>오늘 오후 7:00</span>
                </div>
                <div className={styles.eventCopy}>
                    <small>독서 · 서울</small>
                    <h3>책 한 권, 커피 한 잔</h3>
                    <p>
                        각자 읽던 책을 가져와
                        <br />
                        함께 읽는 저녁이에요.
                    </p>
                    <div>
                        함께할 사람 <strong>3 / 6명</strong>
                    </div>
                </div>
                <div className={styles.eventMini}>
                    <span>☕</span>
                    <div>
                        <strong>퇴근 후, 동네 한 바퀴</strong>
                        <small>산책 · 오늘 오후 8:00</small>
                    </div>
                    <span>↗</span>
                </div>
                <div className={styles.bottomNav}>
                    <span>
                        ♡<small>만남</small>
                    </span>
                    <span className={styles.selected}>
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
