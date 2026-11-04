import Image from "next/image";
import Link from "next/link";
import type { CompanyService } from "../../_data/services";

export default function CompanyServiceCard({ service }: { service: CompanyService }) {
    return (
        <Link
            href={service.href}
            aria-label={`${service.name} 서비스 소개`}
            className={`group relative isolate flex min-h-[620px] flex-col justify-between overflow-hidden px-6 py-10 text-white sm:min-h-[720px] sm:px-10 sm:py-12 lg:min-h-[80dvh] lg:px-[6vw] lg:py-14 ${service.colors}`}
        >
            <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="-z-20 object-cover object-center motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/35 via-black/5 to-black/80" />
            <div className="flex items-center justify-between gap-6 border-b border-white/35 pb-5">
                <span lang="en" className="text-xs tracking-[.24em]">
                    {service.englishName}
                </span>
                <span className="text-[11px] text-white/80">출시 준비 중</span>
            </div>
            <div className="pt-40">
                <h3 className="font-['Noto_Serif_KR',serif] text-[clamp(2.8rem,4vw,5rem)] leading-[1.3] tracking-[-.07em]">
                    {service.name}
                </h3>
                <p className="mt-5 max-w-[24em] text-sm leading-[1.9] break-keep text-white/85 sm:text-base">
                    {service.description}
                </p>
                <div className="mt-9 flex items-center justify-between gap-6 border-t border-white/35 pt-5 text-xs">
                    <span>서비스 알아보기</span>
                    <span
                        aria-hidden="true"
                        className="text-xl motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                    >
                        ↗
                    </span>
                </div>
            </div>
        </Link>
    );
}
