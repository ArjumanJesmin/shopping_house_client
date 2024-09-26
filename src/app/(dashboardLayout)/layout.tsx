import type { Metadata } from "next";
import { Dashboard } from "../components/Dashboard/dashboard";

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Dashboard show all user info",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Dashboard />
        {children}
      </body>
    </html>
  );
}
