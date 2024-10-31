import Link from "next/link";

const NavLinks = [
  {name: "Register", href: "/signup"},
  {name: "Login", href: "/login"},
  {name: "Forgot Password", href: "/forgot-password"},
]
export default function AuthLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <>
    {NavLinks.map((link)=>(
      <Link href={link.href} key={link.name}>
        {link.name}
      </Link>
    ))}
     <body>
          {children}
    </body>
    </>
  )
}