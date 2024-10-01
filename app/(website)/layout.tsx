import Footer from "@/src/components/shared/Footer";
import Navbar from "@/src/components/shared/Navbar";
export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
