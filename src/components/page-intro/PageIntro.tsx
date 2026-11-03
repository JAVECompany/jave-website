type PageIntroProps = {
    eyebrow: string;
    title: string;
    description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
    return (
        <section className="w-full min-w-0">
            <p className="text-sm font-medium tracking-widest text-neutral-500">{eyebrow}</p>
            <h1 className="mt-4 text-[clamp(2.5rem,6vw,6rem)] leading-tight font-bold tracking-tight">
                {title}
            </h1>
            <p className="mt-5 max-w-prose text-base leading-8 text-neutral-600 sm:mt-6 sm:text-lg">
                {description}
            </p>
        </section>
    );
}
