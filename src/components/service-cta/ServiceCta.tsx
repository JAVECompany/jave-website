import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../motion/ScrollReveal";

type ServiceCtaProps = {
    name: string;
    logo: string;
    title: string;
    otherName: string;
    otherHref: string;
};

export default function ServiceCta({ name, logo, title, otherName, otherHref }: ServiceCtaProps) {
    return (
        <ScrollReveal>
            <section
                className="px-6 pt-[110px] pb-[70px] text-center text-[var(--service-ink)] max-[600px]:px-0 max-[600px]:pt-[72px] max-[600px]:pb-10"
                aria-label={`${name} 출시 안내`}
            >
                <Image
                    src={logo}
                    width={84}
                    height={84}
                    alt={`${name} 로고`}
                    className="mx-auto mb-[22px] size-16 rounded-2xl object-contain"
                />
                <p className="inline-flex items-center gap-2 text-xs text-[var(--service-muted)]">
                    <span className="size-1.5 rounded-full bg-[var(--service-accent)]" /> 출시 준비
                    중
                </p>
                <h2 className="mt-6 text-[clamp(30px,3.8vw,60px)] leading-[1.5] font-medium tracking-[-.06em] whitespace-pre-line text-balance [font-family:'Noto_Serif_KR',serif]">
                    {title}
                </h2>
                <p className="mt-7 text-[15px] leading-[1.9] break-keep text-[var(--service-muted)] max-[600px]:text-sm">
                    새로운 연결을 위한 서비스를 준비하고 있습니다.
                    <br />
                    출시 소식과 제휴에 관한 이야기는 JAVE에 전해주세요.
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 text-sm max-[600px]:flex-col max-[600px]:gap-[22px]">
                    <Link
                        href="/contact/"
                        className="inline-flex items-center gap-9 rounded-full bg-[var(--service-ink)] px-[27px] py-[18px] text-white transition-[transform,background] duration-250 hover:-translate-y-[3px] hover:bg-[var(--service-accent)] motion-reduce:transform-none motion-reduce:transition-none"
                    >
                        출시 · 제휴 문의 <span aria-hidden="true">↗</span>
                    </Link>
                    <Link href={otherHref} className="border-b border-current pb-[7px]">
                        {otherName}도 만나보세요{" "}
                        <span className="ml-3" aria-hidden="true">
                            →
                        </span>
                    </Link>
                </div>
            </section>
        </ScrollReveal>
    );
}
