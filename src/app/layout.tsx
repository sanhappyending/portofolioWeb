import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Giga Syahbani | Data Science & AI Enthusiast",
  description:
    "Portfolio showcasing projects in Data Science, Machine Learning, AI, and modern digital solutions built with Python and interactive technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
