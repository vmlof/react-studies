import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

export const metadata: Metadata = {
  title: "The Wild Oasis",
  description: "The Wild Oasis Web Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <Navigation />
        {children}
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
