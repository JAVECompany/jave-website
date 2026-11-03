"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./tilde-hero.module.css";

const poster = "/images/tilde/photography/encounters-poster.webp";

export default function TildeHeroFilm() {
    const filmRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        const film = filmRef.current;
        if (!film) return;

        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const pauseForReducedMotion = () => {
            if (motion.matches) film.pause();
        };
        if (!motion.matches) {
            // A blocked autoplay leaves the poster and manual play control in place.
            void film.play().catch(() => {
                if (film.error) setFailed(true);
            });
        }
        motion.addEventListener("change", pauseForReducedMotion);
        return () => {
            motion.removeEventListener("change", pauseForReducedMotion);
            film.pause();
        };
    }, []);

    function togglePlayback() {
        const film = filmRef.current;
        if (!film) return;
        if (!film.paused) {
            film.pause();
            return;
        }
        void film.play().catch((error: unknown) => {
            if (error instanceof DOMException && error.name === "AbortError") return;
            setFailed(true);
        });
    }

    return (
        <>
            <div
                aria-hidden="true"
                className={styles.backdrop}
                style={{ backgroundImage: `url("${poster}")` }}
            >
                <video
                    ref={filmRef}
                    id="tilde-film"
                    src="/videos/tilde/encounters.mp4"
                    poster={poster}
                    preload="none"
                    muted
                    playsInline
                    loop
                    hidden={failed}
                    onPlaying={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onError={() => setFailed(true)}
                />
            </div>
            {failed ? (
                <p className={styles.filmStatus} role="status">
                    영상 대신 사진을 표시하고 있어요.
                </p>
            ) : (
                <button
                    type="button"
                    aria-controls="tilde-film"
                    aria-label={playing ? "틸드 소개 영상 일시정지" : "틸드 소개 영상 재생"}
                    title={playing ? "영상 일시정지" : "영상 재생"}
                    onClick={togglePlayback}
                    className={styles.playback}
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        {playing ? (
                            <path d="M4 2.5h2.7v11H4zm5.3 0H12v11H9.3z" />
                        ) : (
                            <path d="M4 2.8a.5.5 0 0 1 .75-.43l8.2 5.2a.5.5 0 0 1 0 .86l-8.2 5.2a.5.5 0 0 1-.75-.43z" />
                        )}
                    </svg>
                </button>
            )}
        </>
    );
}
