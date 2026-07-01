import type { Metadata } from "next";
import { Outfit, Merriweather } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cornerstonehomehealth.net"),
  title: {
    default: "Cornerstone Home Health | In-Home Care in Rockport, Portland & Corpus Christi, TX",
    template: "%s | Cornerstone Home Health",
  },
  description:
    "Cornerstone Home Health provides skilled nursing, physical therapy, dementia care, and home health aide services in Rockport, Portland, and Corpus Christi, Texas. Joint Commission accredited.",
  keywords: [
    "home health Rockport TX",
    "home health Corpus Christi",
    "home health Portland Texas",
    "home health agency Coastal Bend",
    "skilled nursing at home",
    "physical therapy home Corpus Christi",
    "dementia care Rockport",
    "home health aide Texas",
    "Joint Commission accredited home health",
    "Alzheimer's care at home Corpus Christi",
    "home health services Aransas Pass",
    "home health Ingleside TX",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cornerstonehomehealth.net/",
    siteName: "Cornerstone Home Health",
    title: "Cornerstone Home Health | In-Home Care in Rockport, Portland & Corpus Christi, TX",
    description:
      "Skilled nursing, therapy, and compassionate home health care across the Texas Coastal Bend. Joint Commission accredited.",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Cornerstone Home Health caregiver with patient in a bright Texas home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornerstone Home Health | In-Home Care in Rockport, Portland & Corpus Christi, TX",
    description: "Skilled nursing, therapy, and compassionate home health care across the Texas Coastal Bend.",
    images: ["/images/og-home.jpg"],
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
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${outfit.variable} ${merriweather.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col bg-cream text-ink font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
