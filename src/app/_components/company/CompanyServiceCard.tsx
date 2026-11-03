import Image from "next/image";
import Link from "next/link";
import type { CompanyService } from "../../_data/services";

export default function CompanyServiceCard({ service }: { service: CompanyService }) {
    return (
        <Link
            href={service.href}
            aria-label={`${service.name} 서비스 소개`}
            className={`group block overflow-hidden rounded-2xl ${service.colors}`}
        >
            <div className="relative aspect-[2.25] overflow-hidden">
                <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.025]"
                />
            </div>
            <div className="px-6 py-6 sm:px-8 sm:py-7">
                <div className="flex items-center gap-3">
                    <h3 className="font-['Noto_Serif_KR',serif] text-3xl">{service.name}</h3>
                    <span lang="en" className="text-[10px] font-semibold tracking-[.2em]">
                        {service.englishName}
                    </span>
                    <span aria-hidden="true" className="ml-auto text-xl">
                        →
                    </span>
                </div>
                <p className="mt-3.5 text-sm leading-7 break-keep">{service.description}</p>
            </div>
        </Link>
    );
}
