import Image from "next/image";

type TildeConnectionCardProps = {
    label: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    href: string;
    number: string;
};

export default function TildeConnectionCard({
    label,
    title,
    description,
    image,
    alt,
    href,
    number,
}: TildeConnectionCardProps) {
    return (
        <article className="group h-full text-[#465543]">
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[28px] bg-[#dce4d1] after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/20 after:to-transparent after:to-45% max-[900px]:rounded-[20px] max-[700px]:aspect-[5/4] max-[700px]:rounded-[23px]">
                <Image
                    src={image}
                    fill
                    sizes="(max-width: 700px) 90vw, 30vw"
                    alt={alt}
                    className="object-cover transition-transform duration-800 ease-[cubic-bezier(.2,.65,.2,1)] group-hover:scale-[1.045] motion-reduce:transform-none motion-reduce:transition-none"
                />
                <span className="absolute top-[23px] left-[23px] z-1 text-[10px] tracking-[.14em] text-white max-[900px]:top-[15px] max-[900px]:left-[15px] max-[900px]:text-[8px] max-[700px]:top-5 max-[700px]:left-5 max-[700px]:text-[10px]">
                    {number} · {label}
                </span>
            </div>
            <div className="px-[3px] pt-[27px] max-[700px]:px-0.5 max-[700px]:pt-[21px]">
                <h3 className="text-[clamp(19px,1.65vw,27px)] leading-[1.5] font-[550] tracking-[-.045em] max-[900px]:text-lg max-[700px]:text-[23px]">
                    {title}
                </h3>
                <p className="mt-[13px] max-w-[36ch] text-sm leading-[1.9] break-keep text-[#606859] max-[900px]:text-xs max-[700px]:max-w-none max-[700px]:text-sm">
                    {description}
                </p>
                <a
                    href={href}
                    className="mt-[23px] inline-flex gap-[25px] border-b border-[#b6bfaa] pb-2 text-xs"
                >
                    경험 살펴보기{" "}
                    <span className="text-[15px]" aria-hidden="true">
                        ↗
                    </span>
                </a>
            </div>
        </article>
    );
}
