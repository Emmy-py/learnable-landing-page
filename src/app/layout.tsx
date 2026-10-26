import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/motion/RevealObserver";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// Link previews (WhatsApp, LinkedIn, X…): the image comes from opengraph-image.jpg
// in this folder; these fill in the text around it.
const share = {
  title: "Learnable by Genesys — Turning Beginners Into Job-Ready Professionals",
  description:
    "A 6–9 month real work tech training program from Genesys Tech Hub — where beginners become industry-ready builders.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://learnable.emmycodes.site"),
  title: "Learnable by Genesys — Turning Beginners Into Job-Ready Professionals",
  description: share.description,
  openGraph: { ...share, url: "/", siteName: "Learnable by Genesys", type: "website" },
  twitter: { card: "summary_large_image", ...share },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Lets CSS hide scroll-reveal content only when JS is available to reveal it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <div aria-hidden className="scroll-progress fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-brand" style={{ transform: "scaleX(0)" }} />
        <Navbar />
        {/* overflow-x-clip: elements waiting to slide in from the side must not cause sideways scroll */}
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
