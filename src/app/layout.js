import "./globals.css";
import { Inter, Sora } from "next/font/google";

import Header from "../component/header/Header";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nirjal Timalsina",
  description: "Nirjal Timalsina - Video Editor",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased bg-[#fafafa]`}
    >
      <body className="min-h-full flex flex-col ">
        <Header />
        {children}
      </body>
    </html>
  );
}
