import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { BRAND_NAME } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-acronym-family",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Transform Learning Into Intelligence`,
  description: `${BRAND_NAME} helps students, educators, and organizations unlock knowledge through AI-powered learning experiences and intelligent insights.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}


