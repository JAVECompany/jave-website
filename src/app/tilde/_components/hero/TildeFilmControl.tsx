"use client";

type TildeFilmControlProps = {
    playing: boolean;
    onToggle: () => void;
};

export default function TildeFilmControl({ playing, onToggle }: TildeFilmControlProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={playing ? "틸드 소개 영상 일시정지" : "틸드 소개 영상 재생"}
            aria-controls="tilde-film"
            className="group absolute bottom-[calc(0.5rem+env(safe-area-inset-bottom))] left-3 z-20 flex size-11 items-center justify-center rounded-full text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:left-6"
        >
            <span className="flex size-8 items-center justify-center rounded-full border border-white/45 bg-black/15 shadow-[0_2px_12px_#00000012] backdrop-blur-md transition-[background,border-color] group-hover:border-white/75 group-hover:bg-black/30 group-active:bg-black/40 sm:size-9 motion-reduce:transition-none">
                <svg
                    viewBox="0 0 20 20"
                    className="size-3.5"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    {playing ? (
                        <path d="M5.5 4.5h3v11h-3zm6 0h3v11h-3z" />
                    ) : (
                        <path d="M6.5 4.2a.6.6 0 0 1 .9-.52l9 5.8a.6.6 0 0 1 0 1.04l-9 5.8a.6.6 0 0 1-.9-.52z" />
                    )}
                </svg>
            </span>
        </button>
    );
}
