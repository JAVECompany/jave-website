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
    const [ready, setReady] = useState(false);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        const film = filmRef.current;
        if (!film) return;
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const controller = new AbortController();
        const { signal } = controller;
        film.addEventListener("loadeddata", () => setReady(!motion.matches), { signal });
        film.addEventListener("playing", () => setReady(!motion.matches), { signal });
        film.addEventListener(
            "error",
            () => {
                setReady(false);
                setFailed(true);
            },
            { signal },
        );
        motion.addEventListener(
            "change",
            () => {
                if (motion.matches) {
                    film.pause();
                    setReady(false);
                } else {
                    setFailed(false);
                    playFilm(film);
                }
            },
            { signal },
        );
        if (!motion.matches) playFilm(film);
        return () => {
            controller.abort();
            film.pause();
        };
    }, []);

    return { filmRef, ready, failed };
}
