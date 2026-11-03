import Image from "next/image";
import DevicePreview from "../../../../components/device-preview/DevicePreview";
import styles from "./tilde-preview.module.css";

export default function TildeClubScreen() {
    return (
        <DevicePreview label="틸드 동아리 디자인 예시 — 같은 취미로 꾸준히 만나는 사람들">
            <div className={styles.app}>
                <div className={styles.brand}>
                    <Image
                        src="/images/tilde/brand/tilde-symbol.webp"
                        width={50}
                        height={18}
                        alt=""
                    />
                    <strong>틸드</strong>
                    <span>⌕</span>
                </div>
                <div className={styles.titleRow}>
                    <h3>동아리</h3>
                    <span>♧</span>
                </div>
                <p className={styles.subtitle}>취향을 이어가는 곳</p>
                <div className={styles.chips}>
                    <span>전체</span>
                    <span>스포츠</span>
                    <span>문화 · 취미</span>
                </div>
                <div className={styles.clubCard}>
                    <div className={styles.clubPhoto}>
                        <Image
                            src="/images/tilde/photography/football.webp"
                            fill
                            sizes="280px"
                            alt=""
                        />
                    </div>
                    <div className={styles.clubCopy}>
                        <small>축구 · 서울</small>
                        <h3>토요일의 풋살 친구들</h3>
                        <p>실력보다 함께 뛰는 즐거움.</p>
                        <span>매주 토요일 · 멤버 12명</span>
                    </div>
                </div>
                <div className={styles.clubCard}>
                    <div className={`${styles.clubPhoto} ${styles.shortPhoto}`}>
                        <Image
                            src="/images/tilde/photography/community.webp"
                            fill
                            sizes="280px"
                            alt=""
                        />
                    </div>
                    <div className={styles.clubCopy}>
                        <small>취미 · 서울</small>
                        <h3>느린 주말의 모임</h3>
                        <p>이번 주말도 함께해요.</p>
                    </div>
                </div>
                <div className={styles.bottomNav}>
                    <span>
                        ♡<small>만남</small>
                    </span>
                    <span>
                        ϟ<small>번개</small>
                    </span>
                    <span className={styles.selected}>
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
