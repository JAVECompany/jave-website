type StoryCopyProps = {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    titleClassName?: string;
};

export default function StoryCopy({
    id,
    eyebrow,
    title,
    description,
    titleClassName = "text-[clamp(2rem,3.7vw,4.5rem)]",
}: StoryCopyProps) {
    return (
        <div className="min-w-0 text-[#303b30]">
            <p className="text-xs leading-relaxed font-medium tracking-[.04em] text-[#6b785e] sm:text-[13px]">
                {eyebrow}
            </p>
            <h2
                id={id}
                className={`mt-5 font-['Noto_Serif_KR',serif] leading-[1.38] font-normal tracking-[-.055em] whitespace-pre-line break-keep ${titleClassName}`}
            >
                {title}
            </h2>
            <p className="mt-7 max-w-[29em] text-sm leading-[1.95] whitespace-pre-line break-keep text-[#70756b] sm:text-base lg:mt-9">
                {description}
            </p>
        </div>
    );
}
