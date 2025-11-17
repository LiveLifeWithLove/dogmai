import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import BackToTopButton from "./components/BackToTopButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DOGM.AI - Accelerate Mastery. Learn with AI.",
  description: "Guided AI bootcamps to accelerate mastery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        {children}
        <BackToTopButton />
        <GoogleAnalytics gaId="G-VW00E9B53J" />
      </body>
    </html>
  );
}
