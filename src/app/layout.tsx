import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-acronym-family",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Edfoal | Transform Learning Into Intelligence",
  description: "Edfoal helps students, educators, and organizations unlock knowledge through AI-powered learning experiences and intelligent insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}


