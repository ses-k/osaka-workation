"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-paper-line bg-paper-cream/85 backdrop-blur"
          : "border-b border-transparent bg-paper-cream/30 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label={SITE.name}>
          <Image
            src="/logo/logo-mark-orange.png"
            alt=""
            width={28}
            height={50}
            className="h-8 w-auto"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-[0.18em] text-brand-ink">
              OSAKA
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
              Digital Nomads Workation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-orange"
                    : "text-brand-ink/70 hover:text-brand-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={SITE.discord}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !px-5 !py-2.5"
          >
            Join Discord <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-paper-line bg-paper-cream md:hidden">
          <nav className="container-page flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-brand-ink/80 hover:bg-brand-ink/5 hover:text-brand-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.discord}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-3"
            >
              Join Discord <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
