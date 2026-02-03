"use client";

import {PageLayout} from "@primer/react";
import Header from "./header";
import Footer from "./footer";
import {NextPage} from "next";
import {PropsWithChildren} from "react";

export default (({
  children,
}) => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <Header />
      </PageLayout.Header>
      {children}
      <PageLayout.Footer divider="line">
        <Footer />
      </PageLayout.Footer>
    </PageLayout>
  );
}) satisfies NextPage<PropsWithChildren>;
