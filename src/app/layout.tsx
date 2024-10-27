import { Children } from "react";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <Link href="/">Home:</Link>
        <Link href="/about">About:</Link>
        <Link href="/contact">Contact:</Link>
        {children}
      </body>
    </html>
  )
};