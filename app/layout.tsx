import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tia Irene Delivery",
  description: "Adega e Mercearia Delivery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
