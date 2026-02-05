import type {Metadata} from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Tertier Docs",
  description: "Static documentation rendered with HeroUI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
