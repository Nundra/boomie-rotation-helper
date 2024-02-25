import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SOD Boomy Rotation Helper",
  description: "A rotation helper tool for SOD balance druid.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-[#141414] text-white'}>{children}</body>
    </html>
  );
}
