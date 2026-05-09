import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hamza.devzoratech.com'),
  title: {
    default: "Mpango Hamza Rahman | Senior Systems Engineer & Lead Architect",
    template: "%s | Mpango Hamza Rahman"
  },
  description: "Senior Systems Engineer & Founder of Devzora Technologies. Architecting high-availability ecosystems and global software solutions. Specialized in real-time distributed systems, multi-platform engineering, and technical leadership.",
  keywords: [
    "Mpango Hamza Rahman", 
    "Hamza Rahman", 
    "Devzora Technologies", 
    "Devzora Tech", 
    "Senior Systems Engineer", 
    "Software Architect", 
    "Full Stack Developer Uganda", 
    "Kampala Software Engineering", 
    "Global Software Solutions",
    "Scalable System Architecture",
    "NestJS Expert",
    "Flutter Enterprise Architecture",
    "IT Leadership",
    "REST-OS Founder",
    "Software Development Africa",
    "High Performance Computing"
  ],
  authors: [{ name: "Mpango Hamza Rahman", url: "https://hamza.devzoratech.com" }],
  creator: "Mpango Hamza Rahman",
  publisher: "Devzora Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mpango Hamza Rahman | Senior Systems Engineer & Lead Architect",
    description: "Architecting the future of digital ecosystems. Founder of Devzora Technologies.",
    url: "https://hamza.devzoratech.com",
    siteName: "Mpango Hamza Rahman Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mpango Hamza Rahman - Engineering Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mpango Hamza Rahman | Senior Systems Engineer",
    description: "Expert Systems Architect & Founder of Devzora Technologies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mpango Hamza Rahman",
              "url": "https://hamza.devzoratech.com",
              "jobTitle": "Senior Systems Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Devzora Technologies"
              },
              "sameAs": [
                "https://github.com/DevzoraTech",
                "https://www.linkedin.com/in/mpango-hamza-rahman-139b793b1/"
              ],
              "description": "Senior Systems Engineer and Software Architect specializing in high-performance distributed systems.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kampala",
                "addressCountry": "Uganda"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${jetbrains.variable} font-sans antialiased bg-surface-base text-text-primary selection:bg-primary/10 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
