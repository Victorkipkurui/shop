"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import '../globals.css'

const NavLinks = [
  { name: "Register", href: "/signup" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html>
    <body>
    <header>
    {NavLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link href={link.href} key={link.name} className={isActive ? "text-blue-800 p-6" : "text-black p-6"}>
            {link.name}
          </Link>
        );
      })}
    </header>
    {children}
    </body>  
    </html>
  );
}
