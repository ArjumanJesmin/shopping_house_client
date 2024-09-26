import type { Metadata } from "next";
import { Navigation } from "../components/Navigation";

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
        {children}
      </body>
    </html>
  );
}
