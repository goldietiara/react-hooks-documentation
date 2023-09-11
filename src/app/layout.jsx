import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/navBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Hooks Doc by Goldie Tiara",
  description: "a quick and simple understanding of React Hooks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" font-mono">
          <NavBar />
          <div className="w-screen h-full flex justify-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
