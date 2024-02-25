import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SOD Boomy Rotation Helper",
  description: "A rotation helper tool for SOD balance druid.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-[#141414] text-white min-h-screen flex flex-col'}>
        {children}
        <footer className=" bg-gray-800 text-gray-400 italic mt-auto text-center px-4 py-1 text-xs">
          Contribute to project from <Link className="underline" target="_blank" href='https://github.com/Nundra/boomie-rotation-helper'>github@boomie-rotation-helper</Link>
        </footer>
      </body>
    </html>
  );
}
