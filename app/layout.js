import { Sora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata = {
  title: "CASEY'B",
  description: "Empowering Talents, Enablin Businesses, Shaping Success",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${sora.variable} antialiased 2xl:max-w-[1500px] 2xl:mx-auto`}
      >
        <Navigation />
        <div className="h-20"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
