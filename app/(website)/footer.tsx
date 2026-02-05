import {Link} from "@heroui/link";

export default function Footer() {
  return (
    <footer className="border-t border-divider">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-default-500 md:flex-row md:items-center md:justify-between">
        <span>Built for static export and zero-runtime docs.</span>
        <Link href="https://heroui.com" isExternal className="text-primary">
          Powered by HeroUI
        </Link>
      </div>
    </footer>
  );
}
