import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "markkunitski | react dev",
  description: "Mark Kunitski frontend developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="frontend, developer, portfolio, React" />
        <meta name="author" content="Mark Kunitski" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <link rel="alternate" hrefLang="en" href="/" />
        <link rel="alternate" hrefLang="pl" href="/pl" />
      </Head>
      <html lang="en">
        <link rel="icon" href="/icon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icon.ico" sizes="180x180" />
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
