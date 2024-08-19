import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LIntree Clone",
  description: "Dantruong Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="max-w-4xl mx-auto p-6">

          {children}
        </div>
      </body>
    </html>
  );
}
