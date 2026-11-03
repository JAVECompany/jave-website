const companyIntroduction = "기업 소개와 비전, 핵심 가치를 추가할 예정입니다.";

export default function CompanySection() {
    return (
        <section className="mt-12 w-full border-t border-black/10 pt-8 sm:mt-16 sm:pt-10">
            <h2 className="text-2xl font-semibold">기업 소개</h2>
            <p className="mt-4 leading-8 text-neutral-600">{companyIntroduction}</p>
        </section>
    );
}
