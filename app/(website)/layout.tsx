"use client";

import {PageLayout} from "@primer/react";
import Header from "./header";
import Footer from "./footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout>
      <PageLayout.Header divider="line">
        <Header />
      </PageLayout.Header>
      {children}
      <PageLayout.Footer divider="line">
        <Footer />
      </PageLayout.Footer>
    </PageLayout>
  );
}
