import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-5xl mx-auto my-10">
            <Hero />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
