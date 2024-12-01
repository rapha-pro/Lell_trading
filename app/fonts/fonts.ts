import { Inter } from 'next/font/google';
import "@/app/ui/styling/globals.css";

export const inter = Inter({
  subsets: ['latin'], // Optimize for Latin characters
  variable: '--font-inter', // Create a CSS variable
  weight: ['400', '500', '700'], 
});