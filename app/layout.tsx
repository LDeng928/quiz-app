import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Nunito } from "next/font/google";

import "./globals.css";
import { Header } from "./(marketing)/header";
import { Footer } from "./(marketing)/footer";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <header>
            <Header />
          </header>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
