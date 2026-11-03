import type { ReactNode } from "react";

type DevicePreviewProps = {
    children: ReactNode;
    label: string;
    className?: string;
    dark?: boolean;
};

export default function DevicePreview({
    children,
    label,
    className = "",
    dark = false,
}: DevicePreviewProps) {
    return (
        <div
            role="img"
            aria-label={label}
            className={`relative flex aspect-[375/812] w-[var(--device-width,280px)] max-w-full shrink-0 flex-col overflow-hidden rounded-[42px] border-[7px] border-[#232323] shadow-[0_28px_70px_-20px_#0005,inset_0_0_0_1px_#ffffff45] max-[600px]:rounded-[34px] max-[600px]:border-[6px] ${dark ? "bg-[#0e1428] text-[#f6ece6]" : "bg-[#fbf8f5] text-[#182033]"} ${className}`}
        >
            <div
                className="relative flex h-[30px] shrink-0 items-center justify-between px-[17px] pt-1 text-[9px] font-[650] max-[600px]:h-[27px] max-[600px]:px-3.5 max-[600px]:text-[8px]"
                aria-hidden="true"
            >
                <span>9:41</span>
                <span className="absolute top-[5px] left-1/2 h-[17px] w-[76px] -translate-x-1/2 rounded-full bg-[#171717] max-[600px]:h-[15px] max-[600px]:w-16" />
                <span>••• ▰</span>
            </div>
            <div
                className="min-h-0 flex-1 overflow-hidden [container-type:inline-size]"
                aria-hidden="true"
            >
                {children}
            </div>
            <span
                className="absolute bottom-1.5 left-1/2 h-[3px] w-[34%] -translate-x-1/2 rounded-[10px] bg-current opacity-70"
                aria-hidden="true"
            />
        </div>
    );
}
