import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {ClerkProvider} from "@clerk/nextjs"
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Feed Fizz",
  description: "A platform for users to suggest and vote on features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange >
            <Navbar/>
            <main className="flex-1 container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer/>
            <Toaster/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
    
  );
}
