"use client";

import {Label, PageHeader, Link, LinkButton, ActionBar} from "@primer/react";
import {NextPage} from "next";
import Navigation from "./navigation";

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
      <PageHeader.Actions>
        <ActionBar aria-label="Primary Navigation">
          <LinkButton href="/" variant="invisible">
            asdf
          </LinkButton>
          <LinkButton href="/" variant="invisible">
            qwer
          </LinkButton>
          <LinkButton href="/" variant="invisible">
            zxc
          </LinkButton>
          <LinkButton href="/" variant="invisible">
            asdfqwer0
          </LinkButton>
          <LinkButton href="/" variant="invisible">
            asldkfjlkqjwerlk jqwlekjr
          </LinkButton>
        </ActionBar>
      </PageHeader.Actions>
      <PageHeader.Navigation>
        <Navigation />
      </PageHeader.Navigation>
    </PageHeader>
  );
}) satisfies NextPage;

// TODO: Make sure to replace with real data.

const useViewModel = () => {
  const logo = useLogo();
  const title = useTitle();
  const versionLabel = useVersionLabel();

  return {logo, title, versionLabel, };
};

const useLogo = () => "🐶"
const useTitle = () => "Tertier"
const useVersionLabel = () => "Beta"