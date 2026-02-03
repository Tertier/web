"use client";

import {ThemeProvider} from "@primer/react";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider colorMode="auto" preventSSRMismatch>
      {children}
    </ThemeProvider>
  );
}
