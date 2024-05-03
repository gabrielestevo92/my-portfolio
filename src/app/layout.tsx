import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const inter = Poppins({ 
  subsets: ["latin"], 
  weight:['400', '500', '600'] 
});

export const metadata: Metadata = {
  title: "Gabriel Estevão",
  description: "Gabriel Estevão Nunes is a front-end developer...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
