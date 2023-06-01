import "./globals.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Jako's Balay",
  description: "A house for all of us",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}