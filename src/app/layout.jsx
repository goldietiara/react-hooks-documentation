import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Hooks Doc by Goldie Tiara",
  description: "a quick and simple understanding of React Hooks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-indigo-950 ${inter.className}`}>
        <div className=" font-mono text-indigo-950 grid bg-pink-50">
          <NavBar />
          <div className="max-w-7×1 m-auto min-w-[300px] w-full h-full">
            {children}
          </div>
          <div className="self-end">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
