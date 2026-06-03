import "./globals.css";
import { Inter, Sora } from "next/font/google";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import GrainOverlay from "@/utils/GrainOverlay";
import SmoothScroll from "@/utils/SmoothScroll";
import { ThemeProvider } from "@/store/ThemeContext";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://nirjal-portfolio.vercel.app"),
  title: {
    default: "Nirjal Timalsina — Video Editor",
    template: "%s | Nirjal Timalsina",
  },
  description:
    "Professional video editor specializing in YouTube content, motion graphics, and cinematic edits. Based in Nepal, working with clients worldwide.",
  keywords: [
    "video editor",
    "Nirjal Timalsina",
    "YouTube editing",
    "motion graphics",
    "Nepal video editor",
  ],
  openGraph: {
    title: "Nirjal Timalsina — Video Editor",
    description:
      "Professional video editor specializing in YouTube content and cinematic edits.",
    url: "https://nirjal-portfolio.vercel.app",
    siteName: "Nirjal Timalsina",
    type: "website",
    images: [
      {
        url: "/img1.png",
        width: 1200,
        height: 630,
        alt: "Nirjal Timalsina — Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirjal Timalsina — Video Editor",
    description:
      "Professional video editor specializing in YouTube content and cinematic edits.",
    images: ["/img1.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-(--bg) text-(--fg) font-(family-name:--font-inter) transition-colors duration-300">
        <ThemeProvider>
          <GrainOverlay />
          <SmoothScroll>
            <Header />
            <div className="h-[62px] shrink-0" />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
