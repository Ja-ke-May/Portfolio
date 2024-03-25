import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jacob May",
  description: "Jacob May, Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#000110] text-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}