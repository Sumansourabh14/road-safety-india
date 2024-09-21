import localFont from "next/font/local";
import "./globals.css";
import { GlobalContextProvider } from "@/services/GlobalContext";
import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";
import { Analytics } from "@vercel/analytics/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { siteTitle } from "@/data/content/basicData";
config.autoAddCss = false;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: siteTitle,
  description: "Road safety awareness in India",
};

export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </body>
      </html>
    </GlobalContextProvider>
  );
}
