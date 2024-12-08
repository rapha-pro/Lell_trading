
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/ui/styling/globals.css";
import { inter } from '@/app/fonts/fonts';
import { Provider } from "@/components/ui/provider";
import Navbar from "@/app/ui/components/navbar/Navbar";
import system from "@/theme";
import { Box } from "@chakra-ui/react";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Finance Flex",
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
        className={`${inter.variable} antialiased`}
      >
        <Provider>
			<Navbar />
			<Box color="primary" fontFamily="body">
				Hello World
			</Box>
          
        </Provider>
      </body>
    </html>
  );
}
