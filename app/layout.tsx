
import React from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Note: In a real Next.js app, we'd use Metadata and Google Fonts here.
// For the preview, we rely on the index.html head for fonts.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="noise flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
