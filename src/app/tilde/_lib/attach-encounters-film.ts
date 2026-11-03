import { filmEditions, filmTiming, portraitFilmQuery } from "../_data/film";
import { readFilmStream } from "./read-film-stream";

const { mainSeconds, endingSeconds } = filmTiming;
const codec = 'video/mp4; codecs="avc1.64001f"';

// The last six seconds use a closed motion cycle and start on a keyframe.
export function attachEncountersFilm(
    film: HTMLVideoElement,
    resumeIfRequested: () => void,
    onFailure: () => void,
) {
    const controller = new AbortController();
    const { signal } = controller;
    const edition = window.matchMedia(portraitFilmQuery).matches
        ? filmEditions.portrait
        : filmEditions.landscape;
    let objectUrl: string | undefined;
    let nativeMode = false;

    function releaseUrl() {
        if (objectUrl) URL.revokeObjectURL(objectUrl);
        objectUrl = undefined;
    }

    function useNativeMovie() {
        if (signal.aborted || nativeMode) return;
        nativeMode = true;
        const position = film.currentTime;
        film.addEventListener(
            "loadedmetadata",
            () => {
                if (position > 0 && film.duration > mainSeconds) {
                    film.currentTime =
                        position <= mainSeconds
                            ? position
                            : mainSeconds + ((position - mainSeconds) % endingSeconds);
                }
                resumeIfRequested();
            },
            { once: true, signal },
        );
        film.addEventListener(
            "ended",
            () => {
                if (film.duration <= mainSeconds) return;
                film.currentTime = mainSeconds;
                resumeIfRequested();
            },
            { signal },
        );
        film.src = `${edition.video}.mp4`;
        releaseUrl();
    }

    async function stream(source: MediaSource) {
        const response = await fetch(`${edition.video}-stream.mp4`, { signal });
        if (!response.ok) throw new Error("Film unavailable");
        if (signal.aborted || nativeMode) return;
        const buffer = source.addSourceBuffer(codec);
        buffer.mode = "sequence";
        const opening = readFilmStream(response);
        let ending: ArrayBuffer | undefined;
        let reading = false;

        async function fill() {
            if (
                signal.aborted ||
                nativeMode ||
                reading ||
                buffer.updating ||
                source.readyState !== "open"
            )
                return;
            try {
                if (!ending) {
                    reading = true;
                    const part = await opening.next();
                    if (signal.aborted || nativeMode) return;
                    if (!part.done) {
                        buffer.appendBuffer(part.value);
                        return;
                    }
                    ending = part.value;
                }
                const position = film.currentTime;
                const ranges = buffer.buffered;
                if (ranges.length && position - ranges.start(0) > 42) {
                    buffer.remove(ranges.start(0), position - 24);
                } else if (!ranges.length || ranges.end(ranges.length - 1) - position < 18) {
                    buffer.appendBuffer(ending);
                }
            } catch {
                useNativeMovie();
            } finally {
                reading = false;
            }
        }

        buffer.addEventListener("error", useNativeMovie, { signal });
        buffer.addEventListener("updateend", fill, { signal });
        film.addEventListener("timeupdate", fill, { signal });
        fill();
    }

    film.addEventListener(
        "error",
        () => {
            if (nativeMode) onFailure();
            else useNativeMovie();
        },
        { signal },
    );

    const streamingWindow: Window & { ManagedMediaSource?: typeof MediaSource } = window;
    const Source = window.MediaSource ?? streamingWindow.ManagedMediaSource;
    if (Source?.isTypeSupported(codec)) {
        const source = new Source();
        objectUrl = URL.createObjectURL(source);
        source.addEventListener(
            "sourceopen",
            () => {
                releaseUrl();
                void stream(source).catch(useNativeMovie);
            },
            { once: true, signal },
        );
        film.src = objectUrl;
    } else {
        useNativeMovie();
    }

    return () => {
        controller.abort();
        releaseUrl();
        film.pause();
        film.removeAttribute("src");
        film.load();
    };
}
