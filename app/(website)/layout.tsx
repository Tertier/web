"use client";

import {PageLayout} from "@primer/react";
import Header from "./header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout>
      <PageLayout.Header>
        <Header />
      </PageLayout.Header>
      {children}
    </PageLayout>
  );
}
