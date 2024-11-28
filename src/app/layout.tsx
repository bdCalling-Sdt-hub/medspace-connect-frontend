import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
      title: 'MedSpace Connect',
      description: 'The best service in the world',
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      const Providers = dynamic(() => import('../provider/Providers'), { ssr: false });
      return (
            <html lang="en">
                  <body className={`${poppins.className} ${roboto.className}`}>
                        <Providers>{children}</Providers>
                  </body>
            </html>
      );
}
