import { useEffect, useRef, useState } from "react";
import { filmSources, smallFilmQuery } from "../_data/film";

function playFilm(film: HTMLVideoElement) {
    if (!film.hasAttribute("src")) {
        const smallScreen = window.matchMedia(smallFilmQuery).matches;
        film.src = smallScreen ? filmSources.mobile : filmSources.desktop;
    } else if (film.error) {
        film.load();
    }
    void film.play().catch(() => {});
}

export function useTildeFilm() {
    const filmRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const [ready, setReady] = useState(false);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        const film = filmRef.current;
        if (!film) return;
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const controller = new AbortController();
        const { signal } = controller;
        film.addEventListener("play", () => setPlaying(true), { signal });
        film.addEventListener("pause", () => setPlaying(false), { signal });
        film.addEventListener("loadeddata", () => setReady(true), { signal });
        film.addEventListener(
            "error",
            () => {
                setPlaying(false);
                setReady(false);
                setFailed(true);
            },
            { signal },
        );
        motion.addEventListener(
            "change",
            () => {
                if (motion.matches) film.pause();
            },
            { signal },
        );
        if (!motion.matches) playFilm(film);
        return () => {
            controller.abort();
            film.pause();
        };
    }, []);

    function togglePlayback() {
        const film = filmRef.current;
        if (!film) return;
        if (!film.paused && !failed) {
            film.pause();
        } else {
            setFailed(false);
            playFilm(film);
        }
    }

    return { filmRef, playing, ready, failed, togglePlayback };
}
