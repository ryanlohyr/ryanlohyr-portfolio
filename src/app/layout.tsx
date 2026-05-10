import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "./theme-toggle";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Ryan Loh",
  description: "Website",
  icons: {
    icon: '/rl.png',
    shortcut: '/rl.png',
    apple: '/rl.png',
  },
};

const themeScript = `
  try {
    const t = localStorage.getItem('theme');
    const d = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (d) document.documentElement.classList.add('dark');
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${montserrat.variable} ${merriweather.variable} antialiased`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
