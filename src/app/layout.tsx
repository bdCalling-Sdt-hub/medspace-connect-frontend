import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
      title: 'MedSpace Connect | Network & Collaborate with Medical Professionals',
      description:
            'MedSpace Connect is a professional networking platform for medical experts. Connect with peers, collaborate, find opportunities, and access healthcare resources. Join now to grow your medical network!',
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
