'use client';
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Footer from "@/components/footer"
import Header from "@/components/header"

// export const metadata: Metadata = {
//   title: "Flashcarte",
//   description: "Flash cards!",
// };

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <SessionProvider>
      <html className="h-full bg-white" lang="en">
        <body className="h-full">
          <div className="flex flex-col justify-between w-full h-full min-h-screen">
            <Header />
            <main className="flex-auto w-full max-w-3xl px-4 py-4 mx-auto sm:px-6 md:py-6">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </SessionProvider>
  )
}
