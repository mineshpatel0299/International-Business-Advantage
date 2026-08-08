import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "International Business Advantage",
  description: "A CXO Business Network Platform",
};

export default function SampleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={playfair.variable}>{children}</div>;
}
