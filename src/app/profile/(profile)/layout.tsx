import Navbar from '@/src/components/shared/Navbar';

export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
