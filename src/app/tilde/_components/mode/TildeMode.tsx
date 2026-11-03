"use client";

import { useState } from "react";
import ScrollReveal from "../../../../components/motion/ScrollReveal";
import ServiceHeading from "../../../../components/service-heading/ServiceHeading";
import TildeMatchScreen from "../app-preview/TildeMatchScreen";

export default function TildeMode() {
    const [paused, setPaused] = useState(false);

    return (
        <section
            className="grid scroll-mt-[110px] grid-cols-2 items-center gap-[clamp(40px,6vw,100px)] overflow-hidden rounded-[42px] bg-[#e4e8da] px-[clamp(25px,6vw,110px)] py-20 max-[1000px]:grid-cols-1 max-[1000px]:gap-[25px] max-[1000px]:px-10 max-[1000px]:py-[55px] max-[600px]:rounded-[28px] max-[600px]:px-[23px] max-[600px]:py-10 [&>*]:min-w-0"
            id="tilde-mode"
        >
            <ScrollReveal className="z-1 max-[1000px]:[&>div]:max-w-[700px]">
                <ServiceHeading
                    eyebrow="MY PACE, MY CONNECTION"
                    title={"가까워지고 싶을 때도,\n잠시 쉬어가고 싶을 때도."}
                    description={
                        "만남의 속도는 내가 정하는 거니까요.\n만남을 쉬는 동안에도 번개와 동아리는 계속.\n틸드는 관계를 선택하는 나의 리듬을 존중합니다."
                    }
                />
                <div className="mt-[35px] flex items-center justify-between gap-5 border-y border-[#b9c2aa] py-[23px]">
                    <span className="text-sm font-medium text-[#465543] max-[600px]:text-xs">
                        만남 ON/OFF 미리보기
                    </span>
                    <button
                        type="button"
                        role="switch"
                        aria-checked={!paused}
                        aria-label="만남 추천 미리보기"
                        className={`relative flex h-[42px] w-[83px] shrink-0 cursor-pointer items-center rounded-full border-0 text-white transition-colors duration-350 focus-visible:outline-2 focus-visible:outline-offset-[5px] focus-visible:outline-[#465543] motion-reduce:transition-none ${paused ? "bg-[#9da58e]" : "bg-[#465543]"}`}
                        onClick={() => setPaused((value) => !value)}
                    >
                        <span
                            className={`text-[11px] tracking-[.03em] ${paused ? "ml-10" : "ml-[13px]"}`}
                        >
                            {paused ? "OFF" : "ON"}
                        </span>
                        <span
                            className={`absolute right-1.5 size-[30px] rounded-full bg-[#f5f3eb] shadow-[0_2px_6px_#0002] transition-transform duration-350 ease-[cubic-bezier(.2,.65,.2,1)] motion-reduce:transition-none ${paused ? "-translate-x-[41px]" : ""}`}
                        />
                    </button>
                </div>
                <p
                    className="mt-4 min-h-[45px] text-xs leading-[1.9] break-keep text-[#606859] max-[600px]:text-[11px]"
                    aria-live="polite"
                >
                    {paused
                        ? "잠시 나에게 집중하는 중. 모임과 동아리는 그대로예요."
                        : "나와 닮은 취향의 새로운 만남을 살펴보는 중이에요."}
                </p>
                <p className="mt-6 text-[10px] leading-[1.9] break-keep text-[#7b896a] max-[600px]:[&_br]:hidden">
                    출시 전 디자인 시안입니다. 표시된 인물·활동은 가상 예시이며,
                    <br />위 스위치는 소개 화면의 미리보기만 변경합니다.
                </p>
            </ScrollReveal>
            <ScrollReveal
                className="relative flex min-h-[660px] items-center justify-center max-[1000px]:min-h-[650px] max-[600px]:min-h-[565px]"
                delay={100}
            >
                <div
                    className="absolute aspect-square w-full rounded-full bg-[#d2dac4] max-[600px]:w-[110%]"
                    aria-hidden="true"
                />
                <div className="relative rotate-[5deg] [--device-width:285px] max-[600px]:[--device-width:245px]">
                    <TildeMatchScreen paused={paused} />
                </div>
                <span className="absolute right-0 bottom-0 left-0 text-center text-[9px] tracking-[.13em] text-[#7b896a] max-[600px]:text-[8px]">
                    {paused ? "A LITTLE PAUSE, STILL CONNECTED." : "A CONNECTION AT YOUR OWN PACE."}
                </span>
            </ScrollReveal>
        </section>
    );
}
