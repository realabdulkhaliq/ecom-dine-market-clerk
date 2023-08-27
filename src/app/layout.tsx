import Header from "@/components/layout/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer/Footer";
import Copyright from "@/components/layout/Footer/Copyright";
import ReduxProviderWrapper from "@/components/shared/Wrapper/ReduxProviderWrapper";
import { ClerkProvider } from "@clerk/nextjs";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dine Market",
  description: "E-Commerce Store by Abdul Khaliq",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <body className={`${inter.className} bg-[#FCFCFC]`}> */}
        <body className={` bg-[#FCFCFC]`}>
          <ReduxProviderWrapper>
            <Header />
            {children}
            <Footer />
            <Copyright />
          </ReduxProviderWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
