import { tildeService } from "../../_data/service";
import TildeHeroFilm from "./TildeHeroFilm";
import styles from "./tilde-hero.module.css";

export default function TildeHero() {
    return (
        <section
            aria-labelledby="tilde-title"
            className={`${styles.hero} -mx-5 -mt-44 sm:-mx-8 sm:-mt-40 lg:-mx-16`}
        >
            <div className={styles.copy}>
                <p className="flex items-center gap-3">
                    <span className="text-[15px] font-semibold">{tildeService.name}</span>
                    <span lang="en" className="text-[11px] font-medium tracking-[.24em]">
                        TILDE
                    </span>
                    <span className="border-l border-current/45 pl-3 text-xs">출시 준비 중</span>
                </p>
                <h1 id="tilde-title" className={styles.title}>
                    {tildeService.tagline}
                </h1>
                <p className={styles.description}>{tildeService.heroDescription}</p>
            </div>
            <a href="#tilde-connections" className={styles.explore}>
                세 가지 만남 살펴보기
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 2v11m-5-5 5 5 5-5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
            </a>
            <TildeHeroFilm />
        </section>
    );
}
