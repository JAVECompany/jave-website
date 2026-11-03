import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import { company } from "../data/company";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "JAVE | 기업 및 서비스 소개",
        template: "%s | JAVE",
    },
    description: company.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko" data-scroll-behavior="smooth">
            <body className="flex min-h-dvh w-full min-w-0 flex-col">
                <a href="#main-content" className="skip-link">
                    본문으로 바로가기
                </a>
                <Header />
                <main
                    id="main-content"
                    tabIndex={-1}
                    className="w-full min-w-0 flex-1 px-5 pt-44 pb-16 sm:px-8 sm:pt-40 sm:pb-24 lg:px-16"
                >
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
