"use client";

import {HeroUIProvider} from "@heroui/system";
import {useRouter} from "next/navigation";
import {FunctionComponent, PropsWithChildren} from "react";
import {ThemeProvider} from "next-themes";

export default (({children}) => {
  const router = useRouter();

  return (
    <HeroUIProvider
      navigate={router.push}
    >
      <ThemeProvider
        attribute={["class", "data-theme"]}
        defaultTheme="system"
        enableColorScheme
        enableSystem
        disableTransitionOnChange
        forcedTheme="system"
      >
        {children}
      </ThemeProvider>
    </HeroUIProvider >
  );
}) satisfies FunctionComponent<PropsWithChildren>;
