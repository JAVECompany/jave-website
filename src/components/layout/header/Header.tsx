import FloatingBar from "../../navigation/FloatingBar";

export default function Header() {
    return (
        <header className="site-header pointer-events-none absolute inset-x-0 top-0 z-50 px-4 pt-[max(1.25rem,env(safe-area-inset-top))] pb-12 sm:pt-8 sm:pb-16">
            <FloatingBar />
        </header>
    );
}
