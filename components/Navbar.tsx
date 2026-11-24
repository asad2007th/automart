
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "Favourites", href: "/favourites" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="container-page flex min-h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-black text-red-600">
          AutoMart<span className="text-slate-900">.</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-red-600"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/sell-car" className="primary-button">
            Sell your car
          </Link>
        </div>

        <button
          className="rounded-lg border px-3 py-2 font-bold md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="container-page flex flex-col gap-4 border-t py-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-slate-700"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/sell-car"
            onClick={() => setMenuOpen(false)}
            className="primary-button"
          >
            Sell your car
          </Link>
        </div>
      )}
    </header>
  );
}
