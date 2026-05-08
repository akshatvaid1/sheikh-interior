import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/components/ScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Sheikh Interiors And Exteriors | Luxury Interior Design Dehradun",
  description: "Premium interior and exterior solutions in Dehradun. Modern residential and commercial transformations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} antialiased`}>
      <body className="bg-matte-black text-soft-ivory">
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}

