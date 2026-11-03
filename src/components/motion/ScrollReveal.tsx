"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (
            !element ||
            !("IntersectionObserver" in window) ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
            return;
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) return;

        element.dataset.motion = "ready";
        element.dataset.visible = "false";
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                element.dataset.visible = "true";
                observer.disconnect();
            },
            { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-[opacity,transform] duration-1000 ease-[cubic-bezier(.2,.65,.2,1)] data-[motion=ready]:data-[visible=false]:translate-y-9 data-[motion=ready]:data-[visible=false]:opacity-0 motion-reduce:translate-y-0! motion-reduce:opacity-100! motion-reduce:transition-none ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
