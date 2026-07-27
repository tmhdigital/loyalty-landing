import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AdminAuthProvider } from "../context/AdminAuthContext";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Rewaldo — Digital Loyalty Cards & Rewards",
  description:
    "Rewaldo — the digital loyalty platform that turns every visit into a reason to come back. One card, every store, real rewards.",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white`}>
        <AdminAuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AdminAuthProvider>
      </body>
    </html>
  );
}