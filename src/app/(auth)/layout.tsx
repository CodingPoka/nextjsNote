
import "./globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div>
            Auth Navbar
        </div>
        {children}

        <div>Auth Footer</div>
      </body>
    </html>
  );
}