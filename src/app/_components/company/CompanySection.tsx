import { services } from "../../_data/services";
import CompanyServiceCard from "./CompanyServiceCard";

export default function CompanySection() {
    return (
        <section aria-labelledby="company-services">
            <div className="mx-6 flex flex-wrap items-baseline justify-between gap-4 border-t border-[#c6cec1] pt-6 pb-10 sm:mx-10 lg:mx-[6vw]">
                <h2 id="company-services" className="text-xs tracking-[.2em]">
                    OUR SERVICES
                </h2>
                <span className="text-xs text-[#6c786d]">새로운 만남을 준비하고 있습니다</span>
            </div>
            <div className="grid lg:grid-cols-2">
                {services.map((service) => (
                    <CompanyServiceCard key={service.href} service={service} />
                ))}
            </div>
        </section>
    );
}
