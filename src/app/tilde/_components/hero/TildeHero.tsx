import Image from "next/image";
import ScrollScene from "../../../../components/motion/ScrollScene";
import { tildeService } from "../../_data/service";
import TildeMatchScreen from "../app-preview/TildeMatchScreen";
import styles from "./tilde-hero.module.css";

export default function TildeHero() {
    return (
        <ScrollScene className={styles.hero}>
            <div className={styles.copy}>
                <div className={styles.brand}>
                    <Image
                        src="/images/tilde/brand/tilde-symbol.webp"
                        width={100}
                        height={27}
                        priority
                        alt="틸드 물결 심볼"
                    />
                    <span>
                        틸드 <small>TILDE</small>
                    </span>
                </div>
                <p className={styles.eyebrow}>SAME TASTE. NEW EVERYDAY.</p>
                <h1>{tildeService.tagline}</h1>
                <p className={styles.description}>{tildeService.heroDescription}</p>
                <div className={styles.actions}>
                    <a href="#tilde-connections">
                        틸드의 연결을 만나보세요 <span aria-hidden="true">↓</span>
                    </a>
                    <span>출시 준비 중</span>
                </div>
            </div>
            <div className={styles.visual}>
                <div className={styles.photo}>
                    <Image
                        src="/images/tilde/photography/community.webp"
                        fill
                        sizes="(max-width: 900px) 85vw, 35vw"
                        priority
                        alt="닮은 취향으로 함께 시간을 보내는 모임의 예시"
                    />
                </div>
                <div className={styles.phone}>
                    <TildeMatchScreen />
                </div>
                <div className={styles.bubble}>
                    <span>작은 취향 하나가</span>
                    <strong>새로운 일상의 시작.</strong>
                </div>
                <span className={styles.circle} aria-hidden="true">
                    ~
                </span>
            </div>
        </ScrollScene>
    );
}
