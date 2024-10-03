import Footer from '@/src/components/shared/Footer';
import Navbar from '@/src/components/shared/Navbar';
import ChatBox from '@/src/components/ui/ChatBox';
export default function CommonLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <ChatBox />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
