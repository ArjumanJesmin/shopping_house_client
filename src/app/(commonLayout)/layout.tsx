import type { Metadata } from "next";
import { Navigation } from "../components/Navigation";
import Footer from "../components/HomePage/Footer";

export const metadata: Metadata = {
  title: "Public App",
  description: "Common Page show all user info",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
