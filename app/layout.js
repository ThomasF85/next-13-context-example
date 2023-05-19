import Navigation from "@/components/Navigation";
import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import { PiecesInfoContextProvider } from "@/lib/context/artPiecesInfoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Art Gallery",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <PiecesInfoContextProvider>{children}</PiecesInfoContextProvider>
        </main>
        <Navigation />
      </body>
    </html>
  );
}
