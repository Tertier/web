"use client";

import {
  Button,
  Chip,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import Navigation from "./navigation";

export default function Header() {
  const {logo, title, versionLabel} = useViewModel();

  return (
    <header className="border-b border-divider">
      <Navbar maxWidth="xl" className="bg-background">
        <NavbarBrand className="gap-3">
          <span className="text-2xl" aria-hidden>
            {logo}
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-semibold leading-none">{title}</span>
            {versionLabel ? (
              <Chip size="sm" color="primary" variant="flat">
                {versionLabel}
              </Chip>
            ) : null}
          </div>
        </NavbarBrand>
        <NavbarContent justify="end" className="hidden lg:flex">
          <NavbarItem>
            <Button as={Link} href="/" variant="light" size="sm">
              Overview
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="/docs" variant="light" size="sm">
              Docs
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="/" variant="light" size="sm">
              Templates
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="/" variant="light" size="sm">
              Community
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">

        </NavbarContent>
      </Navbar>
      <div className="border-t border-divider">
        <Navigation />
      </div>
    </header>
  );
}

// TODO: Make sure to replace with real data.

const useViewModel = () => {
  const logo = useLogo();
  const title = useTitle();
  const versionLabel = useVersionLabel();

  return {logo, title, versionLabel};
};

const useLogo = () => "🐶";
const useTitle = () => "Tertier";
const useVersionLabel = () => "Beta";
