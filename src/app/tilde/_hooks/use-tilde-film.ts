import { useCallback, useEffect, useRef, useState } from "react";
import { attachEncountersFilm } from "../_lib/attach-encounters-film";

export function useTildeFilm() {
    const filmRef = useRef<HTMLVideoElement>(null);
    const detach = useRef<(() => void) | null>(null);
    const wantsPlayback = useRef(false);
    const [playing, setPlaying] = useState(false);
    const [ready, setReady] = useState(false);
    const [failed, setFailed] = useState(false);

    const start = useCallback(() => {
        const film = filmRef.current;
        if (!film) return;
        wantsPlayback.current = true;
        function resumeIfRequested() {
            if (wantsPlayback.current) void film.play().catch(() => {});
        }
        if (!detach.current) {
            detach.current = attachEncountersFilm(film, resumeIfRequested, () => {
                wantsPlayback.current = false;
                setPlaying(false);
                setFailed(true);
            });
        }
        resumeIfRequested();
    }, []);

    useEffect(() => {
        const film = filmRef.current;
        if (!film) return;
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const controller = new AbortController();
        const { signal } = controller;
        film.addEventListener("play", () => setPlaying(true), { signal });
        film.addEventListener("loadeddata", () => setReady(true), { signal });
        film.addEventListener("pause", () => setPlaying(false), { signal });
        motion.addEventListener(
            "change",
            () => {
                if (motion.matches) {
                    wantsPlayback.current = false;
                    film.pause();
                }
            },
            { signal },
        );
        if (!motion.matches) start();
        return () => {
            controller.abort();
            wantsPlayback.current = false;
            detach.current?.();
            detach.current = null;
        };
    }, [start]);

    function togglePlayback() {
        const film = filmRef.current;
        if (!film) return;
        if (!film.paused) {
            wantsPlayback.current = false;
            film.pause();
            return;
        }
        if (failed) {
            detach.current?.();
            detach.current = null;
            setFailed(false);
            setReady(false);
        }
        start();
    }

    return { filmRef, playing, ready, failed, togglePlayback };
}
