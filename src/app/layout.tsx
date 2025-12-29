import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "GarudaPS – Growtopia Private Server",
  description: "Garuda Private Server official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a1a] text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
