import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingGhosts from "@/components/effects/FloatingGhosts";
import WelcomeScreen from "@/components/common/WelcomeScreen";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WelcomeScreen />
      <FloatingGhosts />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}