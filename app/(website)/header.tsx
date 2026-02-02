"use client";

import {Label, PageHeader} from "@primer/react";
import {NextPage} from "next";

export default (() => {
  const {logo, title, versionLabel} = useViewModel();

  return (
    <PageHeader hasBorder>
      <PageHeader.TitleArea>
        <PageHeader.LeadingVisual>
          {logo}
        </PageHeader.LeadingVisual>
        <PageHeader.Title>
          {title}
        </PageHeader.Title>
        {
          versionLabel && (
            <PageHeader.TrailingVisual>
              <Label>{versionLabel}</Label>
            </PageHeader.TrailingVisual>
          )
        }
      </PageHeader.TitleArea>
    </PageHeader>
  );
}) satisfies NextPage;

const useViewModel = () => {
  const logo = useLogo();
  const title = useTitle();
  const versionLabel = useVersionLabel();

  return {logo, title, versionLabel, };
};

const useLogo = () => "🐶"
const useTitle = () => "Tertier"
const useVersionLabel = () => "Beta"