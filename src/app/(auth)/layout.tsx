import type { Metadata } from "next";
import "@/app/globals.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DutyRoster",
  description: "Use Duty Roster!",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto flex flex-col justify-between text-gray-700">
        <Header/>
        <main className="h-[90%] flex flex-col justify-center">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
