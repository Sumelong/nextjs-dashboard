import type { Metadata } from 'next'
import React from "react";

import '@/app/ui/global.css';
import { inter } from '@/app/util/fonts';

export const metadata: Metadata = {
    generator: 'Next.js',
    applicationName: 'Next.js',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript'],
    authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
    creator: 'Jiachi Liu',
    publisher: 'Sebastian Markbåge',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    title: {
        template: '%s | Acme Dashboard', //The %s in the template will be replaced with the specific page title.
        default: 'Acme Dashboard',
    },
    description: 'The official Next.js Learn Dashboard built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({children,}: { children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}



