"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";

const navLinks = [
  { name: "Начало", href: "/" },
  { name: "IT Стратегия", href: "/it-strategy" },
  { name: "UI/UX Дизайн", href: "/ui-ux-design" },
  { name: "Облачни решения", href: "/cloud-solutions" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-surface/80 border-b border-surface-dim shadow-[var(--shadow-level-2)] transition-colors duration-300">
      <Container className="h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-primary text-xl font-bold tracking-tight">
          Nymerix LTD.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-body-sm font-medium transition-colors hover:text-brand-yellow relative ${
                  isActive ? "text-brand-yellow" : "text-on-surface"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-yellow rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-brand-charcoal text-white rounded-full text-label-bold transition-all hover:bg-brand-charcoal/90 active:scale-98"
          >
            Започни проект
          </Link>

          {/* Hamburger Menu */}
          <button
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-surface-dim shadow-lg">
          <nav className="flex flex-col px-[var(--spacing-gutter)] py-4 gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-body-lg font-medium py-2 border-b border-surface-container ${
                    isActive ? "text-brand-yellow" : "text-on-surface"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="sm:hidden inline-flex items-center justify-center px-6 py-3 mt-4 bg-brand-charcoal text-white rounded-full text-label-bold transition-all active:scale-98"
            >
              Започни проект
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
