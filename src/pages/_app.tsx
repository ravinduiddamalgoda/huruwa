import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Sora, Noto_Sans_Sinhala } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "../lib/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  variable: "--font-sinhala",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Huruwa (හුරුව) — Adaptive AI Speech Therapy</title>
      </Head>
      <div
        className={`${inter.variable} ${sora.variable} ${sinhala.variable} font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
