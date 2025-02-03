import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import MyFooter from "../../components/footer";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concsia",
  description:
    "Find out what's happening in your community and what you can do to make a difference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} antialiased`}>
        {children}
        <MyFooter />
      </body>
    </html>
  );
}
