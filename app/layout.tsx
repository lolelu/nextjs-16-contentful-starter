import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SHARED HOMEPAGE",
  description: "Shared homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[scrollbar-gutter:stable]">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="min-h-screen">
          <Header title="SHARED HOMEPAGE" />
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
