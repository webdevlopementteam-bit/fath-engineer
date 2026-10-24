import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Blow Moulding Machine Manufacturers | Faith Engineering Works",
  description:
    "Faith Engineering Works is a Delhi-based blow moulding machine manufacturer since 2000. Single, double head & double stage machines, 250ml-10L. Contact Us Today!",
  keywords: ["", ""],
  alternates: {
    canonical: "https://www.blowmouldmachinemanufacturer.com/",
  },
  icons: {
    icon: "/logo/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[68px] sm:pt-[82px]">{children}</main>
        <Footer />
        <WhatsAppFloat
          phoneNumber="919871580960"
          message="Hi! I have an inquiry regarding your products."
        />
      </body>
    </html>
  );
}
