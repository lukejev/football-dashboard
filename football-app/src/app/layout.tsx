import "./globals.css";
import Header from "@/app/components/Header/Header";

export default function RootLayout({
children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
