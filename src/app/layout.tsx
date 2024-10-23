import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from '../provider/Providers';

const inter = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
    title: 'MedSpace Connect',
    description: 'The best service in the world',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
