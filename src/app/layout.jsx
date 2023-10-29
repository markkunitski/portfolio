import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "markkunitski | react dev",
  description: "Mark Kunitski frontend developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.ico" sizes="32x32" />
      <link
        rel="apple-touch-icon"
        href="/icon.ico"
        sizes="180x180"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
