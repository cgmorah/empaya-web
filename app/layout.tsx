import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EmpaYá | Empanadas Colombianas Artesanales en Bogotá",
  description:
    "Empanadas frescas y congeladas hechas con receta familiar de 35 años. Sin atajos, sin conservantes.",
  keywords:
    "empanadas Bogotá, empanadas colombianas, empanadas congeladas, empanadas a domicilio, comida colombiana Bogotá",
  authors: [{ name: "EmpaYá" }],
  openGraph: {
    type: "website",
    siteName: "EmpaYá",
    title: "EmpaYá · Empanadas Colombianas en Bogotá",
    description: "Frescas o congeladas. Receta familiar de 35 años.",
    locale: "es_CO",
    url: "https://empaya.co/",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmpaYá · Empanadas Colombianas en Bogotá",
    description: "Frescas o congeladas. Receta familiar de 35 años.",
  },
  other: {
    "geo.region": "CO-DC",
    "geo.placename": "Bogotá",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "EmpaYá",
  description:
    "Empanadas colombianas frescas y congeladas en Bogotá. Receta familiar de 35 años.",
  url: "https://empaya.co",
  image: "https://empaya.co/og-image.jpg",
  telephone: "+57-XXX-XXX-XXXX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressRegion: "Cundinamarca",
    addressCountry: "CO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  servesCuisine: "Colombian",
  priceRange: "$",
  hasMenu: "https://empaya.co/#menu",
  acceptsReservations: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${dmSans.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 55 Q50 15 80 55 Q50 75 20 55 Z' fill='%23E8A84A'/%3E%3C/svg%3E"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('empaya-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
