import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Link href="/">Home:</Link>
        <Link href="/about">About:</Link>
        <Link href="/contact">Contact:</Link>
        {children}
      </body>
    </html>
  )
};