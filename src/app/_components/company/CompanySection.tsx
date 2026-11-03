import { services } from "../../_data/services";
import CompanyServiceCard from "./CompanyServiceCard";

export default function CompanySection() {
    return (
        <section className="border-t border-[#cdd1c9] pt-5" aria-labelledby="company-services">
            <div className="mb-5 flex items-baseline justify-between gap-4">
                <h2 id="company-services" className="text-lg font-semibold tracking-tight">
                    서비스 소개
                </h2>
                <span className="text-xs text-[#5f675e]">출시 준비 중</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {services.map((service) => (
                    <CompanyServiceCard key={service.href} service={service} />
                ))}
            </div>
        </section>
    );
}
