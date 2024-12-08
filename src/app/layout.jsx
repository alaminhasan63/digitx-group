import NavBer from "@/components/shared/Navbar";
import "./globals.css";
import "./Scrollbar.css";
import "./hover.css";
import { Poppins } from "next/font/google";
import { AOSInit } from "@/components/AOSInit";
import Footer from "@/components/home/Footer";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Devsmanbd",
  description: "We create  memorably digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={`${poppins.className} relative bg-[#081127]`}>
        <NavBer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
