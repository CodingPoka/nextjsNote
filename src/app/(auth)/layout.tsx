

//using active link  in AuthLayout
"use client";
import link from "next/link";
import "./globals.css";
import Link from "next/link";
//for using usePathname we have to use use client
import {usePathname} from "next/navigation";

// we will create a navlinks array to store the links for auth layout
const navLinks =[
  {
    name: "Login",
    href: "/login"
  },
  {
    name: "Register",
    href: "/register"
  },
  {
    name: "Profile",
    href: "/profile"
  }
]

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname=usePathname();

  return (
    <html lang="en">
      <body
      >
        <div>
          
        {
          navLinks.map((link)=>{
            const isActive= pathname === link.href || (pathname.startsWith(link.href) && link.href!=="/");
            return(
              <Link className={
                isActive? "bg-blue-500 text-white px-4 py-2 rounded-md": "bg-gray-200 text-black px-4 py-2 rounded-md"
              }
              key={link.name} href={link.href}>
              {link.name}</Link>
            )
          })
        }

        </div>
        {children}

        <div>Auth Footer</div>
      </body>
    </html>
  );
}