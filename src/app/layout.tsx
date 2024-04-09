import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import Provider from './provider';
import "./globals.css";

import { setLocale, setUserId } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {


  setLocale('啊实打实的')
  setUserId('用户id啊,这里是用户id')

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
          {auth}
          <Link href="/login">Open modal</Link>
        </Provider>
      </body>
    </html>
  );
}
