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
  metadataBase: new URL("https://empaya.co"),
  title: {
    default: "EmpaYá | Empanadas Colombianas Artesanales en Bogotá",
    template: "%s | EmpaYá",
  },
  description:
    "Empanadas colombianas frescas y congeladas hechas con receta familiar de 35 años. Sin atajos, sin conservantes. Pide por WhatsApp en Restrepo, Bogotá.",
  applicationName: "EmpaYá",
  authors: [{ name: "EmpaYá" }],
  creator: "EmpaYá",
  publisher: "EmpaYá",
  category: "food",
  keywords: [
    "empanadas Bogotá",
    "empanadas colombianas",
    "empanadas congeladas",
    "empanadas a domicilio",
    "empanadas artesanales",
    "empanadas Restrepo",
    "comida colombiana Bogotá",
    "EmpaYá",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "EmpaYá",
    title: "EmpaYá · Empanadas Colombianas Artesanales en Bogotá",
    description:
      "Frescas o congeladas, con receta familiar de 35 años. Pídelas por WhatsApp en Restrepo, Bogotá.",
    locale: "es_CO",
    url: "https://empaya.co/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EmpaYá — Empanadas colombianas artesanales, desde 1990",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmpaYá · Empanadas Colombianas Artesanales en Bogotá",
    description:
      "Frescas o congeladas, con receta familiar de 35 años. Pídelas por WhatsApp en Restrepo, Bogotá.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "CO-DC",
    "geo.placename": "Bogotá",
    "geo.position": "4.5712;-74.0975",
    ICBM: "4.5712, -74.0975",
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
  logo: "https://empaya.co/logo-badge.webp",
  telephone: "+57-315-165-0333",
  foundingDate: "1990",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 14 A Sur # 19-46, Local 1, Restrepo",
    addressLocality: "Bogotá",
    addressRegion: "Cundinamarca",
    postalCode: "111611",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 4.5712,
    longitude: -74.0975,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  servesCuisine: "Colombian",
  priceRange: "$",
  hasMenu: "https://empaya.co/#menu",
  acceptsReservations: false,
  sameAs: ["https://www.instagram.com/empaya.oficial/"],
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
