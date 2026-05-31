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
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "AN Creative Studios — Video Editing & Design, Nepal",
  description:
    "AN Creative Studios is a creative production studio based in Hetauda, Nepal. Video editing, graphic design, and motion graphics for creators and brands.",
  openGraph: {
    title: "AN Creative Studios — Video Editing & Design, Nepal",
    description:
      "Creative production studio in Hetauda, Nepal. Video editing, graphic design, and motion graphics.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full`} suppressHydrationWarning>
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
