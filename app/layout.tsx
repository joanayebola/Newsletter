import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Newsletter App",
  description: "Your newsletter landing pages",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>

        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
