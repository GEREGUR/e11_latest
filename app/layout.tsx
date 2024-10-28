import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MaxWidthWrapper } from "@/components/core/MaxWidthWrapper";
import { DockDemo } from "@/components/dock/Dock";
// import { Tiles } from "@/components/ui/bg";

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
        className={`${geistSans.variable} ${geistMono.variable} relative overflow-x-hidden antialiased`}
      >
        {/* <div className={"absolute top-0 left-0 h-full w-full"}>
          <Tiles rows={15} cols={24} />
        </div> */}
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
        <div className="fixed bottom-3 left-0 right-0 z-50 mx-auto">
          <DockDemo />
        </div>
      </body>
    </html>
  );
}
