"use client";

import Image from "next/image";
import { filmPoster } from "../../_data/film";
import { useTildeFilm } from "../../_hooks/use-tilde-film";

export default function TildeHeroFilm() {
    const { filmRef, playing, ready, failed, togglePlayback } = useTildeFilm();
    const controlLabel = playing ? "틸드 소개 영상 일시정지" : "틸드 소개 영상 재생";

    return (
        <figure>
            <div className="w-full bg-neutral-950">
                <div className="relative mx-auto aspect-video w-full lg:max-w-[calc((100dvh-var(--inline-header-height)-3rem)*16/9)]">
                    <Image
                        src={filmPoster}
                        alt=""
                        fill
                        loading="eager"
                        fetchPriority="high"
                        sizes="100vw"
                        className="object-contain"
                    />
                    <video
                        ref={filmRef}
                        id="tilde-film"
                        aria-label="카페에서 처음 만난 두 사람부터 함께 뛰고 웃는 친구들까지, 틸드에서 시작하는 여러 만남을 담은 영상입니다."
                        preload="none"
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                        disableRemotePlayback
                        hidden={failed}
                        className={`absolute inset-0 size-full object-contain ${ready ? "" : "opacity-0"}`}
                    />
                </div>
            </div>
            <div className="flex h-12 items-center justify-end bg-neutral-950 px-5 text-white sm:px-8 lg:px-16">
                {failed && (
                    <span role="status" className="sr-only">
                        영상 대신 첫 장면 사진을 표시합니다.
                    </span>
                )}
                <button
                    type="button"
                    aria-controls="tilde-film"
                    aria-label={controlLabel}
                    onClick={togglePlayback}
                    className="grid size-11 cursor-pointer place-items-center rounded-full text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-white [@media(scripting:none)]:hidden"
                >
                    <svg
                        width="15"
                        height="15"
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
            </div>
        </figure>
    );
}
