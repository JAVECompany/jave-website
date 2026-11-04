"use client";

import Image from "next/image";
import { filmPoster } from "../../_data/film";
import { useTildeFilm } from "../../_hooks/use-tilde-film";

export default function TildeHeroFilm() {
    const { filmRef, ready, failed } = useTildeFilm();

    return (
        <figure className="absolute inset-0 overflow-hidden">
            <Image
                src={filmPoster}
                alt=""
                fill
                loading="eager"
                fetchPriority="high"
                sizes="100vw"
                className="object-cover"
            />
            <video
                ref={filmRef}
                id="tilde-film"
                aria-label="두 사람의 만남, 독서와 보드게임 모임, 도예와 운동, 친구들과의 모임에 이어 물결과 바닷가를 담은 틸드 소개 영상입니다."
                preload="none"
                loop
                muted
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                hidden={failed}
                className={`absolute inset-0 size-full object-cover ${ready ? "" : "opacity-0"}`}
            />
            {failed && (
                <span role="status" className="sr-only">
                    영상 대신 첫 장면 사진을 표시합니다.
                </span>
            )}
        </figure>
    );
}
