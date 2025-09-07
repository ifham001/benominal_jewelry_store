'use client'

import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Provider } from 'react-redux';
import Fotter from "@/layout/Fotter";
import Notification from "@/ui/Notification";
import { usePathname } from "next/navigation";
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import Sidebar from "@/components/admin/SideBar";
import ConfirmationNotification from "@/ui/ConfirmationNotification";
import AuthForms from "@/components/users/auth/AuthForms";
import Header from "@/components/header/Header";
import { store } from "@/store/store";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin/');

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Benominal</title>
        <meta name="description" content="Benominal E-commerce Platform" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
       

          <CacheProvider value={createEmotionCache()}>
            {!isAdminRoute && <Header />}
            <Notification />
            <ConfirmationNotification/>
            <AuthForms/>
            {children}
            {!isAdminRoute && <Fotter />}
          </CacheProvider>
         
        </Provider>
      </body>
    </html>
  );
}
