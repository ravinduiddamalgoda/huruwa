import { Html, Head, Main, NextScript } from "next/document";

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('huruwa-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#0a5eea" />
        <meta
          name="description"
          content="Huruwa (හුරුව) — An AI-IoT robotic system for adaptive Sinhala speech therapy and parental support."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </Head>
      <body className="antialiased bg-background text-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
