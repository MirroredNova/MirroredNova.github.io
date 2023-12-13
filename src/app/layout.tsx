import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUIProvider from "@/components/providers/NextUIProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Nate Wiltzius",
  description: "Nate Wiltzius' portfolio, built with Next.js and Tailwind CSS.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
