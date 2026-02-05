"use client";

import {HeroUIProvider} from "@heroui/system";
import {useRouter} from "next/navigation";
import {FunctionComponent, PropsWithChildren} from "react";

export default (({children}) => {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      {children}
    </HeroUIProvider >
  );
}) satisfies FunctionComponent<PropsWithChildren>;
