"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathName = usePathname();
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center justify-center">
                {navLinks.map((link) => {
                    const isActive = pathName === link.href || (pathName.startsWith(link.href) && pathName !== "/");
                    return (
                        <Link 
                        key={link.name} 
                        href={link.href} 
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4 font-bold"}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
            {children}
        </div>
    )
}