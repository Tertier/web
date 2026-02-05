"use client";

import { Button, Chip, Link } from "@heroui/react";

const navItems = [
  { label: "Guides", href: "/" },
  { label: "Articles", href: "/" },
  { label: "Tutorials", href: "/", count: 4 },
  { label: "API", href: "/", count: 2 },
  { label: "Tools", href: "/" },
  { label: "Changelog", href: "/" },
];

export default function Navigation() {
  return (
    <nav
      aria-label="Primary navigation"
      className="mx-auto w-full max-w-6xl px-6"
    >
      <div className="flex flex-wrap items-center gap-2 py-3">
        {navItems.map((item) => (
          <Button
            key={item.label}
            as={Link}
            href={item.href}
            variant="light"
            size="sm"
            className="gap-2"
          >
            {item.label}
            {item.count ? (
              <Chip size="sm" variant="flat">
                {item.count}
              </Chip>
            ) : null}
          </Button>
        ))}
      </div>
    </nav>
  );
}
