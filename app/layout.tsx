import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import Providers from "@/components/layout/providers";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "Memorizi",
    template: "%s | Memorizi",
  },
  description: "Memorizi is a website for memorizing images and memories.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXTAUTH_URL}`,
    description: "Memorizi is a website for memorizing images and memories.",
    siteName: "Memorizi",
    images: [
      {
        url: `${process.env.NEXTAUTH_URL}/assets/og.png`,
        width: 1200,
        height: 630,
        alt: "Memorizi",
      },
    ],
  },
  metadataBase: new URL(`${process.env.NEXTAUTH_URL}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          {children}
          <Toaster />
          <SonnerToaster />
        </Providers>
      </body>
    </html>
  );
}
