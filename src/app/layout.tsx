import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/providers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Converter App",
  description: "Convert your files",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center h-screen">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
