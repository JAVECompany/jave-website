type ServiceHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    light?: boolean;
    centered?: boolean;
};

export default function ServiceHeading({
    eyebrow,
    title,
    description,
    light = false,
    centered = false,
}: ServiceHeadingProps) {
    return (
        <div
            className={`${light ? "text-[#fff9f0]" : "text-[var(--service-ink,#182033)]"} ${centered ? "text-center" : ""}`}
        >
            <p
                className={`mb-6 text-[11px] font-[650] tracking-[.18em] max-[600px]:mb-[18px] ${light ? "text-[#d1b08f]" : "text-[var(--service-accent,#8d725a)]"}`}
            >
                {eyebrow}
            </p>
            <h2 className="text-[clamp(30px,4.15vw,68px)] leading-[1.28] font-[550] tracking-[-.055em] whitespace-pre-line text-balance">
                {title}
            </h2>
            {description && (
                <p
                    className={`mt-7 max-w-[42ch] text-[clamp(15px,1.25vw,19px)] leading-[1.9] whitespace-pre-line break-keep max-[600px]:mt-5 ${light ? "text-[#ddd7cb]" : "text-[var(--service-muted,#666)]"} ${centered ? "mx-auto" : ""}`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
