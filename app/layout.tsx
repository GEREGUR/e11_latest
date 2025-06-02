import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MaxWidthWrapper } from "@/components/core/MaxWidthWrapper";
import { Tiles } from "@/components/ui/bg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Egor Rubailo",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen overflow-x-hidden bg-background text-foreground antialiased`}
      >
        <div className="fixed inset-0 z-[-1] overflow-hidden">
          <Tiles />
        </div>
        <MaxWidthWrapper className="relative z-10">{children}</MaxWidthWrapper>
      </body>
    </html>
  );
}
