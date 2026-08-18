import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sleeper Sales | Quality Treated Timber Sleepers",
  description:
    "Sleeper Sales supplies premium quality treated timber sleepers in a range of grades and standard lengths across South Africa.",
  keywords: [
    "timber sleepers",
    "treated timber sleepers",
    "railway sleepers",
    "wooden sleepers",
    "Sleeper Sales",
    "South Africa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}