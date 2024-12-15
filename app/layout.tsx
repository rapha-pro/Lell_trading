
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/ui/styling/globals.css";
import { inter } from '@/app/fonts/fonts';
import { Provider } from "@/components/ui/provider";
import Navbar from "@/app/ui/components/navbar/Navbar";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "TradeFlow",
  description: "Work free, anytime and anywhere with trading",
  icons: {
    icon: "/assets/imageLogo.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <Provider>
			<Navbar />
            {children}
        </Provider>
      </body>
    </html>
  );
}
