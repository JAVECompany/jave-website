"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationLinkProps = {
    href: string;
    label: string;
    className: string;
    activeClassName: string;
    inactiveClassName: string;
};

export default function NavigationLink({
    href,
    label,
    className,
    activeClassName,
    inactiveClassName,
}: NavigationLinkProps) {
    const pathname = usePathname();
    const isActive = (pathname.replace(/\/$/, "") || "/") === (href.replace(/\/$/, "") || "/");

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`${className} ${isActive ? activeClassName : inactiveClassName}`}
        >
            {label}
        </Link>
    );
}
