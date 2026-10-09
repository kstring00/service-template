import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import { business } from "@/config/business";

const title = `Car Detailing in ${business.town}, ${business.state} | ${business.businessName}`;
const description = `${business.mobile ? "Mobile car detailing" : "Car detailing"} in ${business.town}, ${business.state}. Packages priced by vehicle size, ${business.booking.responsePromise.toLowerCase().replace("i'll", "owner will")}`;

export const metadata: Metadata = {
  title,
  description,
  // Concept builds never index. Flip to index: true only on an approved client site.
  robots: business.mode === "concept" ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: { title, description, type: "website", images: [{ url: "/images/hero-1600.webp", width: 1600, height: 1000, alt: business.heroImage.alt }] },
  icons: { icon: "/icon.svg" }
};

export const viewport: Viewport = { themeColor: business.brand.ink, width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const brandVars = {
    "--accent": business.brand.accent,
    "--accent-deep": business.brand.accentDeep,
    "--ink": business.brand.ink,
    "--paper": business.brand.paper
  } as CSSProperties;

  return (
    <html lang="en" style={brandVars}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {business.clarityProjectId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script",${JSON.stringify(business.clarityProjectId)});`
            }}
          />
        ) : null}
      </head>
      <body>{children}</body>
    </html>
  );
}
