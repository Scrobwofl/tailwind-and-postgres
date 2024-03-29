import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Nav from "./components/nav/page";
import Footer from "./components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scorbs Blog",
  description: "Hooooowdy hoooo!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
