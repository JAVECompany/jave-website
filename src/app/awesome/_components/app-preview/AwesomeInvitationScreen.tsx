import Image from "next/image";
import DevicePreview from "../../../../components/device-preview/DevicePreview";
import styles from "./awesome-preview.module.css";

export default function AwesomeInvitationScreen() {
    return (
        <DevicePreview label="어썸 만남 초대장 디자인 예시 — 두 사람이 함께 정한 첫 약속" dark>
            <div className={styles.invitationScreen}>
                <div className={styles.screenTitle}>
                    <span>‹</span>
                    <strong>만남 초대장</strong>
                    <span>···</span>
                </div>
                <div className={styles.invitationPaper}>
                    <Image src="/images/awesome/brand/app-icon.png" width={48} height={48} alt="" />
                    <small>YOU ARE INVITED</small>
                    <h3>
                        가까워지는
                        <br />두 사람의 첫 약속
                    </h3>
                    <div className={styles.invitationRule} />
                    <p>토요일, 오후 3:00</p>
                    <strong>우리의 첫 만남</strong>
                    <span>예시 랜드마크 · 1층 정문 앞</span>
                    <div className={styles.invitationNames}>
                        지훈 <i>&</i> 서연
                    </div>
                    <small>AWESOME · YOUR NEXT CHAPTER</small>
                </div>
                <p className={styles.invitationHint}>
                    서로의 시간을 맞추고,
                    <br />첫 만남을 위한 약속을 준비해요.
                </p>
            </div>
        </DevicePreview>
    );
}
