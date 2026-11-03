import Image from "next/image";
import DevicePreview from "../../../../components/device-preview/DevicePreview";
import styles from "./awesome-preview.module.css";

export default function AwesomeDiscoverScreen() {
    return (
        <DevicePreview label="어썸 탐색 홈 디자인 예시 — 프로필과 일상을 보고 편지 보내기">
            <div className={styles.discover}>
                <div className={styles.brand}>
                    <Image src="/images/awesome/brand/app-icon.png" width={25} height={25} alt="" />
                    <span>어썸</span>
                    <span className={styles.menuIcon}>☷</span>
                </div>
                <div className={styles.stories}>
                    {["내 스토리", "하린", "지민", "유나"].map((name, i) => (
                        <div key={name}>
                            <span className={styles.storyAvatar}>{i === 0 ? "+" : name[0]}</span>
                            <small>{name}</small>
                        </div>
                    ))}
                </div>
                <div className={styles.sectionLabel}>
                    <strong>새로운 인연</strong>
                    <span>오늘 소개 3 / 12</span>
                </div>
                <div className={styles.profile}>
                    <div className={styles.profilePhoto}>
                        <Image
                            src="/images/awesome/photography/profile-sample.webp"
                            fill
                            sizes="280px"
                            alt=""
                        />
                        <span className={styles.photoBadge}>본인·사진 확인 ✓</span>
                    </div>
                    <div className={styles.profileCopy}>
                        <strong>
                            서연 <span>29</span>
                        </strong>
                        <small>서울 강남 · 다이아</small>
                        <p>차분하게 오래 알아가고 싶어요.</p>
                        <div className={styles.sendLetter}>
                            편지 보내기 <span>↗</span>
                        </div>
                    </div>
                </div>
                <div className={styles.tabBar}>
                    <span className={styles.activeTab}>
                        ⌂<small>탐색</small>
                    </span>
                    <span>
                        ✉<small>편지함</small>
                    </span>
                    <span>
                        ♙<small>내 정보</small>
                    </span>
                </div>
            </div>
        </DevicePreview>
    );
}
