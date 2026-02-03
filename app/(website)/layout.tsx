"use client";

import {PageLayout} from "@primer/react";
import Header from "./header";
import Footer from "./footer";
import {NextPage} from "next";
import {PropsWithChildren} from "react";

export default (async ({
  children,
}) => {
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
}) satisfies NextPage<PropsWithChildren>;
