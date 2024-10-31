"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <>
      {NavLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link href={link.href} key={link.name} className={isActive ? "text-blue-800" : "text-black"}>
            {link.name}
          </Link>
        );
      })}
      <div>{children}</div>
    </>
  );
}
