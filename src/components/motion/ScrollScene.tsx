"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type ScrollSceneProps = {
    children: ReactNode;
    className?: string;
    pinned?: boolean;
};

export default function ScrollScene({
    children,
    className = "",
    pinned = false,
}: ScrollSceneProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let frame = 0;
        let active = true;
        const update = () => {
            frame = 0;
            if (!active) return;
            const rect = element.getBoundingClientRect();
            const travel = pinned
                ? Math.max(rect.height - window.innerHeight, 1)
                : rect.height + window.innerHeight;
            const progress = Math.min(
                1,
                Math.max(
                    0,
                    pinned ? (112 - rect.top) / travel : (window.innerHeight - rect.top) / travel,
                ),
            );
            element.style.setProperty("--scroll-progress", progress.toFixed(4));
            element.style.setProperty("--scroll-offset", `${(0.5 - progress) * 100}px`);
            element.style.setProperty("--scroll-rotate", `${(progress - 0.5) * 8}deg`);
        };
        const schedule = () => {
            if (!frame && active) frame = window.requestAnimationFrame(update);
        };
        const observer = new IntersectionObserver(
            ([entry]) => {
                active = entry.isIntersecting;
                if (active) schedule();
            },
            { rootMargin: "200px" },
        );
        observer.observe(element);
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        update();
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
            window.cancelAnimationFrame(frame);
        };
    }, [pinned]);

    return (
        <div ref={ref} className={className} data-scroll-scene>
            {children}
        </div>
    );
}
