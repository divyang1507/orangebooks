import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"] , weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"]});

export const metadata = {
  
  title: "Orange Book Publication",
  description: "Orange Book Publication creates best books for your child",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
      </Head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
