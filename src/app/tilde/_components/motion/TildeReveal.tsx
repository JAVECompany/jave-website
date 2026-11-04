import type { ReactNode } from "react";
import ScrollReveal from "../../../../components/motion/ScrollReveal";

type TildeRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

export default function TildeReveal({ children, className = "", delay = 0 }: TildeRevealProps) {
    return (
        <ScrollReveal
            className={`transition-[opacity,transform,translate]! motion-reduce:transition-none! ${className}`}
            delay={delay}
        >
            {children}
        </ScrollReveal>
    );
}
