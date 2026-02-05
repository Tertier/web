import { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

export default function WebsiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 py-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
