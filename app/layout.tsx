import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `${business.businessName} | Mobile Detailing`,
  description: business.description,
  robots: business.previewMode ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    title: business.businessName,
    description: business.description,
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
