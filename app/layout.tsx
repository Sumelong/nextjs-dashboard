import type { Metadata } from 'next'
import React from "react";

import '@/app/ui/global.css';
import { inter } from '@/app/util/fonts';

export const metadata: Metadata = {
    title: 'Easy School Assistant',
    description: 'A School Management Assistant WebApp',
}
export default function RootLayout({children,}: { children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}



