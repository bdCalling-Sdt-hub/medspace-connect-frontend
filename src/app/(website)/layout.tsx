'use client';
import Footer from '@/src/components/shared/Footer';
import Navbar from '@/src/components/shared/Navbar';
import ChatBox from '@/src/components/ui/ChatBox';
import Filter from '@/src/components/ui/Filter';
import { usePathname } from 'next/navigation';
export default function CommonLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    // console.log(pathname);
    return (
        <div>
            <ChatBox />
            <Navbar />
            {(pathname === '/' || pathname === '/search') && <Filter />}
            {children}
            <Footer />
        </div>
    );
}
