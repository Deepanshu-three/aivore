import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { CartProvider } from "./context/CartContext";

// Import Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Aivora",
  description: "Aivora a place to buy 3d printed products",
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <CartProvider>
      <html lang="en">
        <body className={`${poppins.variable} font-sans antialiased bg-background text-foreground`}>
          {/* Navbar - Fixed at the top */}
                    <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
                        <Navbar />
                    </div>

                    {/* Content with space for fixed navbar */}
                    <main className="flex-grow w-full flex justify-center pt-16 md:pt-20">
                        <div className="w-full overflow-x-hidden">
                            {children}
                        </div>
                        <Toaster />
                    </main>
                    {/* Footer - Always at the bottom */}
                    <div className="w-full shadow-md bg-white">
                        <Footer />
                    </div>
        </body>
      </html>
      </CartProvider>
    </ClerkProvider>
  );
}
